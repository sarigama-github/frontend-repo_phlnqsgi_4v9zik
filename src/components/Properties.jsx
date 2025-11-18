import React, { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Properties() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/properties`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="properties" className="py-16 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Our 5 Sunny Homes</h2>
          <span className="text-gray-700/80">Bengaluru, India</span>
        </div>
        {loading ? (
          <p className="text-gray-700">Loading properties…</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <article key={p.slug} className="group bg-white rounded-xl border-2 border-black/80 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] overflow-hidden">
                <div className="relative">
                  <img src={p.image_url} alt={p.name} className="h-48 w-full object-cover" />
                  <span className="absolute top-3 left-3 bg-yellow-300 border border-black px-2 py-1 text-xs font-bold rounded">
                    {p.location}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-extrabold text-lg text-gray-900">{p.name}</h3>
                  <p className="text-sm text-gray-700 mt-1 line-clamp-2">{p.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="font-bold text-gray-900">
                      ₹{p.price_per_month.toLocaleString('en-IN')}
                      <span className="text-xs font-medium text-gray-700"> /month</span>
                    </div>
                    <a href={`#contact?property=${p.slug}`} className="px-3 py-1.5 rounded-md bg-black text-yellow-300 font-semibold hover:bg-gray-900 transition text-sm">Enquire</a>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.amenities.slice(0, 4).map(a => (
                      <span key={a} className="text-xs bg-yellow-100 text-gray-900 border border-yellow-300 px-2 py-1 rounded">{a}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
