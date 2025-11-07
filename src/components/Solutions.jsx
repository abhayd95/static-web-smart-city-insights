import React from 'react'
import ScrollReveal from './ScrollReveal'

const Solutions = () => {
  const solutions = [
    {
      category: 'Transportation',
      title: 'Smart Traffic Management',
      description:
        'Optimize traffic flow, reduce congestion, and improve air quality through intelligent traffic signal coordination and real-time routing.',
      features: [
        'Real-time traffic monitoring',
        'Adaptive signal control',
        'Parking optimization',
        'Public transit analytics',
      ],
      icon: '🚗',
    },
    {
      category: 'Energy',
      title: 'Smart Grid & Energy Management',
      description:
        'Monitor energy consumption, optimize distribution, and integrate renewable energy sources for sustainable power management.',
      features: [
        'Energy consumption tracking',
        'Smart meter integration',
        'Renewable energy monitoring',
        'Demand forecasting',
      ],
      icon: '⚡',
    },
    {
      category: 'Environment',
      title: 'Environmental Monitoring',
      description:
        'Track air quality, water management, and waste systems to create healthier, more sustainable urban environments.',
      features: [
        'Air quality sensors',
        'Water quality monitoring',
        'Waste management optimization',
        'Noise pollution tracking',
      ],
      icon: '🌱',
    },
    {
      category: 'Safety',
      title: 'Public Safety & Security',
      description:
        'Enhance public safety through predictive analytics, emergency response optimization, and comprehensive security monitoring.',
      features: [
        'Crime pattern analysis',
        'Emergency response optimization',
        'CCTV analytics',
        'Disaster preparedness',
      ],
      icon: '🛡️',
    },
    {
      category: 'Governance',
      title: 'Citizen Services',
      description:
        'Improve citizen engagement and service delivery through digital platforms and transparent data sharing.',
      features: [
        'Digital service portals',
        'Citizen feedback systems',
        'Open data platforms',
        'E-governance solutions',
      ],
      icon: '👥',
    },
    {
      category: 'Infrastructure',
      title: 'Smart Infrastructure',
      description:
        'Monitor and maintain critical infrastructure including bridges, buildings, and utilities for optimal performance and safety.',
      features: [
        'Structural health monitoring',
        'Predictive maintenance',
        'Utility management',
        'Asset tracking',
      ],
      icon: '🏗️',
    },
  ]

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal animation="fade-in" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive
            <span className="text-gold-500"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            End-to-end smart city solutions tailored to address the unique challenges
            of modern urban environments
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            From transportation to energy, environment to governance - we provide
            integrated solutions that work together to create smarter, more efficient cities.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <ScrollReveal
              key={index}
              animation={index % 3 === 0 ? 'slide-left' : index % 3 === 1 ? 'scale' : 'slide-right'}
              delay={Math.floor(index / 3)}
            >
              <div className="group bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-gold-300 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gold-600 bg-gold-50 px-3 py-1 rounded-full">
                    {solution.category}
                  </span>
                  <div className="text-4xl">{solution.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <svg
                        className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-6">
                <button className="w-full px-4 py-2 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors">
                  Learn More
                </button>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions

