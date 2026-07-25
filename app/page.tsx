import { Background } from '@/components/background'
import { Navbar } from '@/components/navbar'
import { WelcomeHero } from '@/components/welcome-hero'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Background />
      <Navbar />

      <div className="flex flex-1 flex-col items-center justify-center gap-8 py-10 sm:py-14">
        <WelcomeHero />
      </div>

      <Footer />
    </main>
  )
}
