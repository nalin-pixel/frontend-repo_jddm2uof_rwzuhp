const work = [
  { title: 'Drift Coffee', tag: 'Brand + Web', image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop' },
  { title: 'MotionWare', tag: 'Campaign', image: 'https://images.unsplash.com/photo-1697724779999-c9e1697bea17?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEcmlmdCUyMENvZmZlZXxlbnwwfDB8fHwxNzYzMzQ0MzUxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Alto Labs', tag: 'Identity', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop' },
]

export default function Work() {
  return (
    <section id="work" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-40 w-[70%] bg-gradient-to-r from-indigo-600/20 via-fuchsia-600/20 to-violet-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Selected work</h2>
            <p className="mt-3 text-zinc-400">A few recent projects we loved.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-violet-600 text-white font-medium px-5 py-2 shadow-lg shadow-indigo-900/20 hover:from-indigo-400 hover:to-violet-500">Start a Project</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {work.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-zinc-400">{item.tag}</p>
                </div>
                <span className="text-xs rounded-full border border-white/10 bg-white/5 text-zinc-200 px-2 py-1">Case study</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
