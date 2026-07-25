import { Background } from '@/components/background'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ChatWindow } from '@/components/chat-window'
import { Footer } from '@/components/footer'

export default function ChatPage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Background />
      <Navbar />

      <div className="flex flex-1 flex-col items-center justify-center gap-8 py-10 sm:py-14">
        <Hero />
        <div className="w-full px-4">
          <ChatWindow />
        </div>
      </div>

      <Footer />
    </main>
  )
}
