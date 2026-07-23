"""Inspect which Chroma chunks match a question.

Example:
    python test_retrieval.py "What did Harsh do in WashU Rocketry?"
"""

import os
import sys
from pathlib import Path

from dotenv import load_dotenv
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings


BASE_DIR = Path(__file__).resolve().parent
CHROMA_DIR = BASE_DIR / "chroma_db"
COLLECTION_NAME = "harsh_portfolio"
DEFAULT_QUESTION = "What did Harsh do in WashU Rocketry?"


def main() -> None:
    load_dotenv(BASE_DIR / ".env")
    if not os.getenv("OPENAI_API_KEY"):
        raise RuntimeError("OPENAI_API_KEY is missing from backend/.env")
    if not CHROMA_DIR.exists():
        raise FileNotFoundError("No Chroma index yet. Run python ingest.py first.")

    question = " ".join(sys.argv[1:]) or DEFAULT_QUESTION
    vector_store = Chroma(
        collection_name=COLLECTION_NAME,
        persist_directory=str(CHROMA_DIR),
        embedding_function=OpenAIEmbeddings(model="text-embedding-3-small"),
    )

    # Smaller distance means the stored chunk is a closer semantic match.
    matches = vector_store.similarity_search_with_score(question, k=3)

    print(f"Question: {question}\n")
    for rank, (document, distance) in enumerate(matches, start=1):
        source = document.metadata["source"]
        page = document.metadata.get("page")
        location = f", page {page}" if page else ""
        excerpt = " ".join(document.page_content.split())

        print(f"{rank}. {source}{location} | distance: {distance:.3f}")
        print(f"   {excerpt}\n")


if __name__ == "__main__":
    main()
