import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import DashboardPreview from './components/DashboardPreview'
import SmartCityMetrics from './components/SmartCityMetrics'
import IoTDevices from './components/IoTDevices'
import DataSources from './components/DataSources'
import Solutions from './components/Solutions'
import UseCases from './components/UseCases'
import Integrations from './components/Integrations'
import HowItWorks from './components/HowItWorks'
import Technology from './components/Technology'
import CaseStudies from './components/CaseStudies'
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
        <SmartCityMetrics />
        <IoTDevices />
        <DataSources />
        <Solutions />
        <UseCases />
        <Integrations />
        <HowItWorks />
        <Technology />
        <CaseStudies />
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

