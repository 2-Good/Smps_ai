'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/chat', label: 'AI Assistant' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-4 z-50 mx-auto w-full max-w-5xl px-4"
    >
      <nav className="glass glass-sheen flex items-center justify-between gap-3 rounded-3xl px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white/70 shadow-sm ring-1 ring-white/60">
            <Image
              src="/school-logo.png"
              alt="Shashi Madan Public School logo"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="font-display text-sm font-semibold text-foreground sm:text-base">
              Shashi Madan Public School
            </p>
            <p className="text-xs text-muted-foreground">AI Assistant</p>
          </div>
        </Link>

        <div className="flex items-center gap-1 rounded-full border border-white/60 bg-white/30 p-1 backdrop-blur-md">
          {LINKS.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link key={link.href} href={link.href} className="relative">
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent"
                  />
                )}
                <span
                  className={`relative z-10 block rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                    isActive ? 'text-primary-foreground' : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            )
          })}
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-white/60 bg-white/40 px-3 py-1.5 backdrop-blur-md sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="flex items-center gap-1 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Beta
          </span>
        </div>
      </nav>
    </motion.header>
  )
}
