import { PenTool, Palette, Layout, Sparkles } from 'lucide-react'

const services = [
  {
    icon: PenTool,
    title: 'Brand Identity',
    desc: 'Naming, logo systems, typography, and brand guidelines that scale.'
  },
  {
    icon: Layout,
    title: 'Web & UI Design',
    desc: 'Conversion-focused websites and product interfaces that feel effortless.'
  },
  {
    icon: Palette,
    title: 'Campaign & Content',
    desc: 'Art direction, social systems, and motion for big moments and launches.'
  },
  {
    icon: Sparkles,
    title: 'Packaging & Print',
    desc: 'Tactile experiences—from boxes to books—that people want to keep.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-[70%] bg-gradient-to-r from-indigo-600/20 via-fuchsia-600/20 to-violet-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">What we do</h2>
          <p className="mt-3 text-zinc-400">A focused set of services designed to move the needle.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 border border-white/10 text-indigo-200 inline-flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium text-lg">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
