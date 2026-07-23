import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from langchain_chroma import Chroma
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI, OpenAIEmbeddings


BASE_DIR = Path(__file__).resolve().parent
CHROMA_DIR = BASE_DIR / "chroma_db"
COLLECTION_NAME = "harsh_portfolio"

load_dotenv(BASE_DIR / ".env")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=["*"],
)

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
vector_store = Chroma(
    collection_name=COLLECTION_NAME,
    persist_directory=str(CHROMA_DIR),
    embedding_function=OpenAIEmbeddings(model="text-embedding-3-small"),
)


def format_context(documents) -> str:
    """Label retrieved text so the model can distinguish its sources."""
    sections = []
    for document in documents:
        source = document.metadata["source"]
        page = document.metadata.get("page")
        location = f", page {page}" if page else ""
        sections.append(f"[Source: {source}{location}]\n{document.page_content}")
    return "\n\n---\n\n".join(sections)


def source_labels(documents) -> list[str]:
    """Return each source once for the frontend to display as a citation."""
    labels = []
    for document in documents:
        label = document.metadata["source"]
        page = document.metadata.get("page")
        if page:
            label += f", page {page}"
        if label not in labels:
            labels.append(label)
    return labels


@app.get("/")
def health_check():
    return {"message": "Portfolio RAG backend is running."}


@app.get("/ask")
def ask_ai(question: str):
    if not question.strip():
        raise HTTPException(status_code=400, detail="A question is required.")
    if not CHROMA_DIR.exists():
        raise HTTPException(
            status_code=503,
            detail="Knowledge index is missing. Run python ingest.py first.",
        )

    documents = vector_store.similarity_search(question, k=4)
    context = format_context(documents)

    response = llm.invoke(
        [
            SystemMessage(
                content="""
You are the assistant for Harsh Vibhuti's public portfolio website.
Answer only with facts supported by the supplied CONTEXT.
If the CONTEXT does not answer the question, say that you do not know based on
the available portfolio information. Do not guess or invent details.
Do not reveal email addresses, phone numbers, addresses, or other personal
contact details from the context; direct visitors to the website contact section.
Keep answers concise and professional.
""".strip()
            ),
            HumanMessage(content=f"QUESTION:\n{question}\n\nCONTEXT:\n{context}"),
        ]
    )

    return {"answer": response.content, "sources": source_labels(documents)}
