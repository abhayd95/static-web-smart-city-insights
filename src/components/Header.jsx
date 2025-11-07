import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'IoT Devices', href: '#iot-devices' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-xl border-b border-gray-100/70 py-3'
          : 'bg-white/60 backdrop-blur-lg border-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-3"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-amber-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">SC</span>
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-semibold tracking-wide text-gray-500 uppercase">Smart City</span>
              <span className="block text-xl font-bold text-gray-900">Insights</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
              >
                <span>{item.name}</span>
                <span className="absolute inset-x-3 -bottom-1 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 transition-transform duration-300 ease-out hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden xl:flex items-center space-x-3">
            <button className="px-4 py-2 text-sm font-semibold text-gray-700 rounded-full border border-gray-200 hover:border-gold-400 hover:text-gold-600 transition-all">
              Login
            </button>
            <button className="px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-gold-500 to-amber-500 shadow-lg shadow-amber-200/60 hover:shadow-xl hover:shadow-amber-300/60 transition-transform duration-200 hover:-translate-y-0.5">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-gray-700 hover:text-gold-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 rounded-2xl border border-gray-100 bg-white/95 shadow-xl">
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gold-50 hover:text-gold-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 mt-3 border-t border-gray-100 flex flex-col space-y-2">
                <button className="w-full px-3 py-2 text-sm font-semibold text-gray-700 rounded-lg border border-gray-200 hover:border-gold-300 hover:text-gold-600 transition-colors">
                  Login
                </button>
                <button className="w-full px-3 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-gold-500 to-amber-500 shadow-lg shadow-amber-200/50">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

