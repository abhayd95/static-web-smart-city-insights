import React, { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(0)

  const caseStudies = [
    {
      city: 'Singapore',
      country: '🇸🇬',
      title: 'Smart Traffic Management System',
      challenge: 'High traffic congestion during peak hours causing delays and increased pollution',
      solution: 'Implemented AI-powered traffic management with real-time signal optimization and predictive analytics',
      results: [
        { metric: 'Traffic Congestion', value: '32% reduction' },
        { metric: 'Average Commute Time', value: '15 minutes saved' },
        { metric: 'CO2 Emissions', value: '18% reduction' },
        { metric: 'Citizen Satisfaction', value: '94% positive' },
      ],
      duration: '6 months',
      investment: '$2.5M',
      roi: '340%',
      image: '🏙️',
    },
    {
      city: 'Barcelona',
      country: '🇪🇸',
      title: 'Smart Energy Grid',
      challenge: 'High energy costs and need for sustainable energy solutions',
      solution: 'Deployed smart grid infrastructure with renewable energy integration and demand management',
      results: [
        { metric: 'Energy Costs', value: '25% reduction' },
        { metric: 'Renewable Energy', value: '45% of total' },
        { metric: 'Carbon Footprint', value: '30% reduction' },
        { metric: 'Grid Efficiency', value: '92% improvement' },
      ],
      duration: '12 months',
      investment: '$5.2M',
      roi: '280%',
      image: '⚡',
    },
    {
      city: 'Tokyo',
      country: '🇯🇵',
      title: 'Integrated Waste Management',
      challenge: 'Inefficient waste collection leading to high costs and environmental impact',
      solution: 'Smart waste bins with IoT sensors and optimized collection routes using AI',
      results: [
        { metric: 'Collection Efficiency', value: '35% improvement' },
        { metric: 'Operational Costs', value: '22% reduction' },
        { metric: 'Recycling Rate', value: '28% increase' },
        { metric: 'Citizen Complaints', value: '60% reduction' },
      ],
      duration: '8 months',
      investment: '$1.8M',
      roi: '420%',
      image: '♻️',
    },
    {
      city: 'Dubai',
      country: '🇦🇪',
      title: 'Smart City Platform',
      challenge: 'Need for comprehensive smart city infrastructure across multiple domains',
      solution: 'Integrated platform connecting transportation, energy, safety, and citizen services',
      results: [
        { metric: 'Service Efficiency', value: '40% improvement' },
        { metric: 'Citizen Engagement', value: '85% increase' },
        { metric: 'Cost Savings', value: '$12M annually' },
        { metric: 'Innovation Index', value: 'Top 5 globally' },
      ],
      duration: '18 months',
      investment: '$15M',
      roi: '250%',
      image: '🚀',
    },
  ]

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal animation="fade-in" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Success
            <span className="text-gold-500"> Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world examples of cities transforming through smart technology
          </p>
        </ScrollReveal>

        {/* Case Study Tabs */}
        <ScrollReveal animation="slide-left" delay={1} className="flex flex-wrap justify-center gap-3 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCase === index
                  ? 'bg-gold-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {study.country} {study.city}
            </button>
          ))}
        </ScrollReveal>

        {/* Case Study Content */}
        <ScrollReveal animation="scale" delay={2}>
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">{caseStudies[selectedCase].image}</span>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {caseStudies[selectedCase].city}
                  </h3>
                  <p className="text-xl text-gray-600">
                    {caseStudies[selectedCase].title}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">The Challenge</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {caseStudies[selectedCase].challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Our Solution</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {caseStudies[selectedCase].solution}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Duration</div>
                    <div className="text-lg font-bold text-gray-900">
                      {caseStudies[selectedCase].duration}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Investment</div>
                    <div className="text-lg font-bold text-gray-900">
                      {caseStudies[selectedCase].investment}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">ROI</div>
                    <div className="text-lg font-bold text-gold-600">
                      {caseStudies[selectedCase].roi}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Results */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Results</h4>
              <div className="space-y-4">
                {caseStudies[selectedCase].results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gold-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">{result.metric}</span>
                      <span className="text-2xl font-bold text-gold-500">
                        {result.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl p-6 text-white">
                <div className="text-sm opacity-90 mb-2">Success Rate</div>
                <div className="text-4xl font-bold mb-2">
                  {caseStudies[selectedCase].roi}
                </div>
                <div className="text-sm opacity-90">Return on Investment</div>
              </div>
            </div>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CaseStudies

