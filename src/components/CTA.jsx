export default function CTA() {
  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">Have a brief? Let’s make it brilliant.</h2>
        <p className="mt-3 text-zinc-400">Tell us about your goals and we’ll return with a tailored proposal within 24 hours.</p>
        <form className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
          <input type="text" required placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input type="email" required placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <input type="text" required placeholder="Company / Project" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <textarea required placeholder="What are you trying to achieve?" className="md:col-span-3 min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <button type="submit" className="md:col-span-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-black font-medium px-6 py-3 hover:bg-orange-400 transition-colors">
            Get my proposal
          </button>
        </form>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,88,12,0.08),transparent_60%)]" />
    </section>
  )
}
