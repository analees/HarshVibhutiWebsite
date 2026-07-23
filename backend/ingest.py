"""Build the local Chroma index from public portfolio documents.

Run this script after changing a document in knowledge/:
    python ingest.py
"""

import os
import shutil
from pathlib import Path

from dotenv import load_dotenv
from langchain_community.document_loaders import PyPDFLoader
from langchain_core.documents import Document
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain_text_splitters import (
    MarkdownHeaderTextSplitter,
    RecursiveCharacterTextSplitter,
)


BASE_DIR = Path(__file__).resolve().parent
KNOWLEDGE_DIR = BASE_DIR / "knowledge"
CHROMA_DIR = BASE_DIR / "chroma_db"
COLLECTION_NAME = "harsh_portfolio"


def load_documents() -> list[Document]:
    """Load each public source and attach useful source metadata."""
    documents: list[Document] = []
    markdown_splitter = MarkdownHeaderTextSplitter(
        headers_to_split_on=[("#", "h1"), ("##", "h2"), ("###", "h3")],
        strip_headers=False,
    )

    for markdown_path in KNOWLEDGE_DIR.glob("*.md"):
        sections = markdown_splitter.split_text(
            markdown_path.read_text(encoding="utf-8")
        )
        for section in sections:
            section.metadata.update(
                {
                    "source": markdown_path.name,
                    "document_type": "portfolio",
                }
            )
        documents.extend(sections)

    for pdf_path in KNOWLEDGE_DIR.glob("*.pdf"):
        pages = PyPDFLoader(str(pdf_path)).load()
        for page_number, page in enumerate(pages, start=1):
            page.metadata = {
                "source": pdf_path.name,
                "document_type": "resume",
                "page": page_number,
            }
        documents.extend(pages)

    if not documents:
        raise FileNotFoundError(f"No .md or .pdf files found in {KNOWLEDGE_DIR}")

    return documents


def main() -> None:
    load_dotenv(BASE_DIR / ".env")
    if not os.getenv("OPENAI_API_KEY"):
        raise RuntimeError("OPENAI_API_KEY is missing from backend/.env")

    documents = load_documents()
    splitter = RecursiveCharacterTextSplitter(chunk_size=700, chunk_overlap=100)
    chunks = splitter.split_documents(documents)

    # This folder is a generated, Git-ignored index. Rebuilding prevents duplicates.
    if CHROMA_DIR.exists():
        shutil.rmtree(CHROMA_DIR)

    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
    Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        collection_name=COLLECTION_NAME,
        persist_directory=str(CHROMA_DIR),
    )

    print(f"Indexed {len(documents)} documents into {len(chunks)} chunks.")
    print(f"Chroma database: {CHROMA_DIR}")


if __name__ == "__main__":
    main()
