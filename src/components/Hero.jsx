import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-yellow-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_-10%,rgba(251,191,36,0.6),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(253,224,71,0.6),transparent_40%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight text-gray-900">
              Quirky, cool co-living in Bengaluru
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-800/80">
              Five vibrant homes across the city. Sunny balconies, community vibes and a whole lot of yellow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#properties" className="px-5 py-3 rounded-md bg-black text-yellow-300 font-semibold hover:bg-gray-900 transition">Explore Homes</a>
              <a href="#contact" className="px-5 py-3 rounded-md bg-white/70 text-gray-900 font-semibold border border-gray-900/10 hover:bg-white transition">Book a Tour</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,0.8)] overflow-hidden">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1400&auto=format&fit=crop" alt="Coliving common area" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-black text-yellow-300 px-4 py-2 rounded-md rotate-[-2deg] shadow-lg">Bengaluru Only</div>
          </div>
        </div>
      </div>
    </section>
  )
}
