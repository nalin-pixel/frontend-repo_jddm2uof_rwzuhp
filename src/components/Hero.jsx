import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="text-xs text-zinc-300">Award-winning graphic design studio</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
              Scribl makes brands unforgettable.
            </h1>
            <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
              Strategy-led visual identities, websites, and campaigns that convert. We blend playfulness with precision to help you stand out.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-orange-500 text-black font-medium px-6 py-3 hover:bg-orange-400 transition-colors">
                Get a Proposal
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-full border border-white/15 text-white font-medium px-6 py-3 hover:bg-white/10 transition-colors">
                See Our Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
    </section>
  )
}
