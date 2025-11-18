import React from 'react'

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-yellow-300/80 border-b border-yellow-400/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-yellow-500 border border-black/10 shadow-inner" />
          <span className="font-extrabold tracking-tight text-xl text-gray-900">SunnyStay Co-Living</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-gray-900 font-medium">
          <button onClick={() => scrollTo('properties')} className="hover:underline underline-offset-4">Properties</button>
          <button onClick={() => scrollTo('perks')} className="hover:underline underline-offset-4">Perks</button>
          <button onClick={() => scrollTo('contact')} className="px-3 py-1.5 rounded-md bg-black text-yellow-300 hover:bg-gray-900 transition">Enquire</button>
        </nav>
      </div>
    </header>
  )
}
