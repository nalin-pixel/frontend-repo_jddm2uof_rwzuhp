import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <CTA />
      <footer className="border-t border-white/10 bg-black text-zinc-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Scribl. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Dribbble</a>
            <a href="#" className="hover:text-white">Behance</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
