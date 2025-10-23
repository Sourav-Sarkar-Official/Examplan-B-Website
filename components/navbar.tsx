"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
  <nav className="sticky top-0 z-50 bg-transparent border-b border-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-white hover:text-brand-red-500 transition">
            Examplan-B
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-white/90 hover:text-white transition font-medium">
              Home
            </Link>
            <Link href="/courses" className="text-white/90 hover:text-white transition font-medium">
              Courses
            </Link>
            <Link href="/notes" className="text-white/90 hover:text-white transition font-medium">
              Notes
            </Link>
            <Link href="/faq" className="text-white/90 hover:text-white transition font-medium">
              Need Help
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-white/10">
            <Link 
              href="/" 
              className="block text-white/90 hover:text-white transition py-2 px-2 rounded hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/courses" 
              className="block text-white/90 hover:text-white transition py-2 px-2 rounded hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link 
              href="/notes" 
              className="block text-white/90 hover:text-white transition py-2 px-2 rounded hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Notes
            </Link>
            <Link 
              href="/faq" 
              className="block text-white/90 hover:text-white transition py-2 px-2 rounded hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Need Help
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
