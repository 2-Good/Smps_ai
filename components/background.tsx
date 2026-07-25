export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient: white to warm cream */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[oklch(0.97_0.02_85)] to-[oklch(0.93_0.04_80)]" />

      {/* Floating glow blobs */}
      <div className="animate-blob animate-glow absolute -left-24 top-10 h-[26rem] w-[26rem] rounded-full bg-[oklch(0.4_0.1_258)]/25 blur-3xl" />
      <div
        className="animate-blob animate-glow absolute right-[-6rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-[oklch(0.68_0.11_68)]/30 blur-3xl"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="animate-blob animate-glow absolute bottom-[-8rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.5_0.09_255)]/22 blur-3xl"
        style={{ animationDelay: '8s' }}
      />

      {/* Floating glass circles */}
      <div
        className="animate-blob absolute left-[12%] top-[22%] h-24 w-24 rounded-full border border-white/60 bg-white/20 backdrop-blur-md"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="animate-blob absolute right-[16%] top-[16%] h-16 w-16 rounded-full border border-white/60 bg-white/20 backdrop-blur-md"
        style={{ animationDelay: '6s' }}
      />
      <div
        className="animate-blob absolute bottom-[18%] right-[24%] h-20 w-20 rounded-full border border-white/60 bg-white/20 backdrop-blur-md"
        style={{ animationDelay: '10s' }}
      />
    </div>
  )
}
