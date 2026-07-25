'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUp,
  Bot,
  GraduationCap,
  Clock,
  Building2,
  Wallet,
  Phone,
  ScrollText,
  User,
} from 'lucide-react'
import { TypingIndicator } from '@/components/typing-indicator'
import { getAnswer } from '@/lib/school-data'

type Message = {
  id: string
  role: 'user' | 'ai'
  content: string
}

const SUGGESTIONS = [
  { label: 'Admission Process', icon: GraduationCap },
  { label: 'School Timings', icon: Clock },
  { label: 'Facilities', icon: Building2 },
  { label: 'Fee Structure', icon: Wallet },
  { label: 'Contact Information', icon: Phone },
  { label: 'School Rules', icon: ScrollText },
]

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, isTyping])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  function sendMessage(text: string) {
    const trimmed = text.trim()
    if (!trimmed || isTyping) return

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      role: 'user',
      content: trimmed,
    }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    timeoutRef.current = setTimeout(() => {
      const reply = getAnswer(trimmed)
      setMessages((prev) => [
        ...prev,
        { id: `${Date.now()}-ai`, role: 'ai', content: reply },
      ])
      setIsTyping(false)
    }, 900)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    sendMessage(input)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (
      e.key === 'Enter' &&
      !e.shiftKey &&
      !e.nativeEvent.isComposing &&
      e.keyCode !== 229
    ) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  const isEmpty = messages.length === 0 && !isTyping

  return (
    <motion.section
      initial={{ y: 40, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="glass-strong relative mx-auto flex h-[68vh] max-h-[720px] min-h-[520px] w-full max-w-3xl flex-col overflow-hidden rounded-4xl"
    >
      {/* Top sheen line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

      {/* Messages area */}
      <div
        ref={scrollRef}
        className="scroll-glass flex-1 space-y-5 overflow-y-auto px-4 py-6 sm:px-8"
      >
        {isEmpty && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex h-full flex-col items-center justify-center gap-4 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30">
              <Bot className="h-8 w-8" />
            </div>
            <div className="space-y-1">
              <h2 className="font-display text-xl font-semibold text-foreground">
                How can I help you today?
              </h2>
              <p className="mx-auto max-w-sm text-pretty text-sm text-muted-foreground">
                Ask me anything about Shashi Madan Public School — admissions,
                academics, facilities and more.
              </p>
            </div>
          </motion.div>
        )}

        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              layout
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={`flex items-end gap-2.5 ${
                message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl shadow-sm ${
                  message.role === 'user'
                    ? 'bg-white/70 text-primary ring-1 ring-white/60'
                    : 'bg-gradient-to-br from-primary to-accent text-primary-foreground'
                }`}
              >
                {message.role === 'user' ? (
                  <User className="h-4.5 w-4.5" />
                ) : (
                  <Bot className="h-4.5 w-4.5" />
                )}
              </div>
              <div
                className={`max-w-[78%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm sm:text-[0.95rem] ${
                  message.role === 'user'
                    ? 'rounded-br-lg bg-gradient-to-br from-primary to-[oklch(0.46_0.09_262)] text-primary-foreground'
                    : 'glass rounded-bl-lg text-foreground'
                }`}
              >
                {message.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-end gap-2.5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-sm">
                <Bot className="h-4.5 w-4.5" />
              </div>
              <div className="glass rounded-3xl rounded-bl-lg px-4 py-3">
                <TypingIndicator />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Suggested prompts */}
      <AnimatePresence>
        {isEmpty && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 px-4 pb-4 sm:px-8"
          >
            {SUGGESTIONS.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.button
                  key={s.label}
                  type="button"
                  onClick={() => sendMessage(s.label)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.06 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="glass-sheen flex items-center gap-2 rounded-2xl border border-white/60 bg-white/40 px-3.5 py-2 text-xs font-medium text-foreground backdrop-blur-md transition-colors hover:bg-white/70 hover:text-primary sm:text-sm"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {s.label}
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input box */}
      <div className="px-4 pb-4 pt-1 sm:px-6 sm:pb-6">
        <form
          onSubmit={handleSubmit}
          className="glass flex items-end gap-2 rounded-3xl p-2 pl-4"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Ask about admissions, academics, facilities..."
            aria-label="Message"
            className="max-h-32 flex-1 resize-none bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground sm:text-[0.95rem]"
          />
          <motion.button
            type="submit"
            disabled={!input.trim() || isTyping}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Send message"
            className="group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/40 transition-all disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
          >
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-80" />
            <ArrowUp className="relative h-5 w-5" />
          </motion.button>
        </form>
        <p className="mt-2 text-center text-[0.7rem] text-muted-foreground">
          Shashi Madan Public School AI can make mistakes. Verify important
          details with the school office.
        </p>
      </div>
    </motion.section>
  )
}
