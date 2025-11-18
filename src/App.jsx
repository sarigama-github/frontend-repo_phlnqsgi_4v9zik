import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Properties from './components/Properties'
import Perks from './components/Perks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-900">
      <Navbar />
      <Hero />
      <Properties />
      <Perks />
      <CTA />
      <footer className="bg-yellow-300 border-t border-yellow-400/60">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-semibold">© {new Date().getFullYear()} SunnyStay Co-Living • Bengaluru</p>
          <a href="/test" className="text-sm underline">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
