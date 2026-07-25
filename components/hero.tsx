'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="mx-auto max-w-2xl px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-md"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Intelligent School Assistant
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.12 }}
        className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
      >
        Shashi Madan Public School{' '}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          AI
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.2 }}
        className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        Your intelligent school assistant. Ask anything about admissions,
        academics, facilities, transport, events and more.
      </motion.p>
    </div>
  )
}
