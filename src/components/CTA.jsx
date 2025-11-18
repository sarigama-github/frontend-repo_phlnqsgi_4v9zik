import React, { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const url = new URL(window.location.href)
      const propertySlug = url.hash.includes('property=') ? url.hash.split('property=')[1] : undefined
      const res = await fetch(`${API_BASE}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, property_slug: propertySlug })
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks! We\'ll get back to you shortly.')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-16 bg-yellow-200">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Book a tour</h2>
          <p className="text-gray-800/80 mt-2">Tell us a bit about yourself and we\'ll ping you with options.</p>
          <ul className="mt-6 space-y-2 text-gray-900">
            <li>• Quick responses over email/WhatsApp</li>
            <li>• Flexible viewing slots</li>
            <li>• No broker drama</li>
          </ul>
        </div>
        <form onSubmit={onSubmit} className="bg-white border-2 border-black/80 rounded-xl p-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
          <div className="grid grid-cols-1 gap-4">
            <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Your name" className="px-3 py-2 border border-black/40 rounded" />
            <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="px-3 py-2 border border-black/40 rounded" />
            <input required value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Phone" className="px-3 py-2 border border-black/40 rounded" />
            <textarea rows={4} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Anything specific?" className="px-3 py-2 border border-black/40 rounded" />
            <button className="mt-2 px-4 py-2 rounded-md bg-black text-yellow-300 font-semibold hover:bg-gray-900 transition">Send</button>
            {status && <p className="text-sm text-gray-900 mt-1">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
