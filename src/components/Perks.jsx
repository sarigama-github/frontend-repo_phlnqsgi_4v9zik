import React from 'react'

const perks = [
  { title: 'Move-in Ready', desc: 'Furnished rooms, fast WiFi, housekeeping and utilities.' },
  { title: 'Community Vibes', desc: 'Game nights, rooftop sessions and weekend potlucks.' },
  { title: 'Central Locations', desc: 'Walkable neighborhoods with cafes and co-working nearby.' },
  { title: 'Easy Payments', desc: 'Simple digital rents and flexible deposits.' },
]

export default function Perks() {
  return (
    <section id="perks" className="py-16 bg-yellow-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Why you’ll love it</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p) => (
            <div key={p.title} className="bg-white border-2 border-black/80 rounded-xl p-5 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
              <h3 className="font-extrabold text-lg text-gray-900">{p.title}</h3>
              <p className="text-gray-700 mt-2 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
