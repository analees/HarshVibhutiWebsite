from fastapi import FastAPI
from dotenv import load_dotenv
import os

from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage

load_dotenv()


app = FastAPI()

llm = ChatOpenAI(
    model = "gpt-4o-mini",
    temperature=0
)


@app.get("/")
def home():
    return {
        "message": "AI backend is running!"
    }

@app.get("/ask")
def ask_ai():
    response = llm.invoke(
        [
            HumanMessage(
                content = "Explainwhat LangChain is in one sentence"
            )
        ]
    )

    return{
        "response": response.content
    }