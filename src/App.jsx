import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import DashboardPreview from './components/DashboardPreview'
import Solutions from './components/Solutions'
import UseCases from './components/UseCases'
import HowItWorks from './components/HowItWorks'
import Technology from './components/Technology'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <Solutions />
        <UseCases />
        <HowItWorks />
        <Technology />
        <About />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App

