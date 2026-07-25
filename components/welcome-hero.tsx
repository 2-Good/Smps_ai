'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  MapPin,
  Trees,
  Users,
  BookOpen,
} from 'lucide-react'

const STATS = [
  { icon: Trees, label: '10-acre campus' },
  { icon: BookOpen, label: 'Science, Math & Computer Labs' },
  { icon: Users, label: 'M.P. Singh Foundation' },
  { icon: MapPin, label: 'Chandausi, Sambhal' },
]

export function WelcomeHero() {
  return (
    <div className="mx-auto max-w-2xl px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-md"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Welcome
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.12 }}
        className="text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
      >
        Hello 👋
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.18 }}
        className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        Welcome to{' '}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Shashi Madan Public School
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.26 }}
        className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        An inclusive community of empowered lifelong learners, run by the
        M.P. Singh Foundation in Chandausi. When you're ready, our AI
        assistant can answer questions about admissions, academics,
        facilities and more.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.36 }}
        className="mt-8 flex justify-center"
      >
        <Link href="/chat">
          <motion.span
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-shadow hover:shadow-xl hover:shadow-primary/40 sm:text-base"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Talk to our AI Assistant
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </motion.span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.46 }}
        className="glass glass-sheen mt-10 grid grid-cols-2 gap-3 rounded-3xl p-4 text-left sm:grid-cols-4 sm:p-5"
      >
        {STATS.map((s) => {
          const Icon = s.icon
          return (
            <div
              key={s.label}
              className="flex flex-col items-start gap-2 rounded-2xl px-2 py-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <p className="text-xs font-medium leading-tight text-foreground sm:text-sm">
                {s.label}
              </p>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
