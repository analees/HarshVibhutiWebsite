"use client"

import Image from "next/image"
import { FormEvent, useEffect, useRef, useState } from "react"
import { LoaderCircle, Send, X } from "lucide-react"


const API_URL = process.env.NEXT_PUBLIC_RAG_API_URL ?? "http://127.0.0.1:8000"

type ChatMessage = {
  role: "assistant" | "user"
  content: string
  sources?: string[]
}

type AskResponse = {
  answer: string
  sources: string[]
}

const starterMessage: ChatMessage = {
  role: "assistant",
  content: "Ask me about Harsh's experience, projects, or technical skills.",
}

export function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [question, setQuestion] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([starterMessage])
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedQuestion = question.trim()
    if (!trimmedQuestion || isLoading) return

    setQuestion("")
    setMessages((current) => [
      ...current,
      { role: "user", content: trimmedQuestion },
    ])
    setIsLoading(true)

    try {
      const params = new URLSearchParams({ question: trimmedQuestion })
      const response = await fetch(`${API_URL}/ask?${params.toString()}`)
      if (!response.ok) throw new Error("The portfolio assistant is unavailable.")

      const result = (await response.json()) as AskResponse
      setMessages((current) => [
        ...current,
        { role: "assistant", content: result.answer, sources: result.sources },
      ])
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Harsh has experience in robotics, engineering, mathematics from his dual degree as well as numerous project, internships and research opportunities. Please take a look at his Linkedin for more details on each.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {isOpen && (
        <section
          aria-label="Ask about Harsh"
          className="flex h-[30rem] w-[calc(100vw-2.5rem)] max-w-[24rem] flex-col overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-2xl shadow-black/40"
        >
          <header className="flex items-center justify-between border-b border-border bg-secondary/60 px-4 py-3">
            <div className="flex items-center gap-3">
              <Image
                src="/images/ask-harsh-rocket.png"
                alt="Engineering portfolio assistant"
                width={40}
                height={40}
                className="rounded-full border border-primary/40"
              />
              <div>
                <h2 className="text-sm font-semibold">Ask Harsh&apos;s portfolio</h2>
                <p className="text-xs text-muted-foreground">Grounded in portfolio sources</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="size-4" />
            </button>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p>{message.content}</p>
                  {message.sources && message.sources.length > 0 && (
                    <p className="mt-2 border-t border-border/70 pt-2 text-xs text-muted-foreground">
                      Sources: {message.sources.join(" · ")}
                    </p>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm bg-secondary px-3 py-2 text-sm text-muted-foreground">
                  <LoaderCircle className="size-4 animate-spin" /> Searching portfolio sources…
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border p-3">
            <label htmlFor="portfolio-question" className="sr-only">
              Ask a question about Harsh
            </label>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                id="portfolio-question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Ask about projects or skills..."
                className="min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!question.trim() || isLoading}
                className="rounded-lg bg-primary px-3 text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send question"
              >
                <Send className="size-4" />
              </button>
            </div>
          </form>
        </section>
      )}

      {!isOpen && (
        <p className="max-w-52 rounded-xl border border-border bg-card px-3 py-2 text-right text-xs font-medium leading-relaxed text-foreground shadow-lg shadow-black/20">
          Ask me anything about Harsh&apos;s qualifications
        </p>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="group size-16 overflow-hidden rounded-full border-2 border-primary/70 bg-secondary shadow-xl shadow-primary/25 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        aria-label={isOpen ? "Close portfolio chat" : "Open portfolio chat"}
        aria-expanded={isOpen}
      >
        <Image
          src="/images/ask-harsh-rocket.png"
          alt=""
          width={128}
          height={128}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </button>
    </div>
  )
}
