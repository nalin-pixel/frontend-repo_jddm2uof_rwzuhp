import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-indigo-600 blur-[120px]" />
        <div className="absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full bg-fuchsia-600 blur-[120px]" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
              <span className="text-xs text-zinc-300">Design systems for next-gen brands</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
              Build a brand that feels like the future.
            </h1>
            <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
              We craft identities and interfaces with a cosmic glow—crisp, modern, and engineered to convert.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-violet-600 text-white font-medium px-6 py-3 shadow-lg shadow-indigo-900/20 hover:from-indigo-400 hover:to-violet-500 transition-colors">
                Get a Proposal
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-full border border-white/15 text-white font-medium px-6 py-3 hover:bg-white/10 transition-colors">
                See Our Work
              </a>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
    </section>
  )
}
