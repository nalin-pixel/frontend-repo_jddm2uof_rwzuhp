export default function CTA() {
  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 right-1/3 h-40 w-40 rounded-full bg-indigo-600 blur-[100px]" />
        <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-fuchsia-600 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">Have a brief? Let’s make it brilliant.</h2>
        <p className="mt-3 text-zinc-400">Tell us about your goals and we’ll return with a tailored proposal within 24 hours.</p>
        <form className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
          <input type="text" required placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70" />
          <input type="email" required placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70" />
          <input type="text" required placeholder="Company / Project" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70" />
          <textarea required placeholder="What are you trying to achieve?" className="md:col-span-3 min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70" />
          <button type="submit" className="md:col-span-3 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-violet-600 text-white font-medium px-6 py-3 shadow-lg shadow-indigo-900/20 hover:from-indigo-400 hover:to-violet-500 transition-colors">
            Get my proposal
          </button>
        </form>
      </div>
    </section>
  )
}
