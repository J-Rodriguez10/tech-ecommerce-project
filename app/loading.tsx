function Dot({ delay }: { delay: string }) {
  return (
    <span
      className="animate-dot inline-block h-5 w-5 rounded-full bg-darkOrange"
      style={{ animationDelay: delay }}
    />
  )
}

function Loading() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      {/* Dots */}
      <div className="flex gap-6">
        <Dot delay="0s" />
        <Dot delay="0.2s" />
        <Dot delay="0.4s" />
      </div>
    </main>
  )
}

export default Loading
