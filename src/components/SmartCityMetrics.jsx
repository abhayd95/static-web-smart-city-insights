import React, { useState, useEffect } from 'react'
import ScrollReveal from './ScrollReveal'

const SmartCityMetrics = () => {
  const [selectedDomain, setSelectedDomain] = useState(0)

  const domains = [
    {
      name: 'Transportation',
      icon: '🚗',
      metrics: [
        { label: 'Traffic Flow Efficiency', value: 87, unit: '%', trend: '+12%' },
        { label: 'Average Commute Time', value: 28, unit: 'min', trend: '-15%' },
        { label: 'Public Transit Usage', value: 64, unit: '%', trend: '+8%' },
        { label: 'Parking Utilization', value: 72, unit: '%', trend: '+5%' },
      ],
      color: 'blue',
    },
    {
      name: 'Energy',
      icon: '⚡',
      metrics: [
        { label: 'Energy Efficiency', value: 82, unit: '%', trend: '+18%' },
        { label: 'Renewable Energy Usage', value: 45, unit: '%', trend: '+22%' },
        { label: 'Carbon Reduction', value: 38, unit: '%', trend: '+12%' },
        { label: 'Smart Grid Coverage', value: 91, unit: '%', trend: '+7%' },
      ],
      color: 'yellow',
    },
    {
      name: 'Environment',
      icon: '🌱',
      metrics: [
        { label: 'Air Quality Index', value: 68, unit: 'AQI', trend: '+15%' },
        { label: 'Waste Recycling Rate', value: 54, unit: '%', trend: '+19%' },
        { label: 'Water Quality', value: 89, unit: '%', trend: '+6%' },
        { label: 'Green Space Coverage', value: 31, unit: '%', trend: '+8%' },
      ],
      color: 'green',
    },
    {
      name: 'Safety',
      icon: '🛡️',
      metrics: [
        { label: 'Emergency Response Time', value: 4.2, unit: 'min', trend: '-28%' },
        { label: 'Crime Reduction', value: 24, unit: '%', trend: '+24%' },
        { label: 'Safety Index Score', value: 85, unit: '/100', trend: '+9%' },
        { label: 'Surveillance Coverage', value: 78, unit: '%', trend: '+11%' },
      ],
      color: 'red',
    },
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      yellow: 'from-gold-500 to-gold-600',
      green: 'from-green-500 to-green-600',
      red: 'from-red-500 to-red-600',
    }
    return colors[color] || colors.blue
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal animation="fade-in" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Smart City
            <span className="text-gold-500"> Metrics & KPIs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track and monitor key performance indicators across all smart city domains
          </p>
        </ScrollReveal>

        {/* Domain Tabs */}
        <ScrollReveal animation="slide-left" delay={1} className="flex flex-wrap justify-center gap-3 mb-12">
          {domains.map((domain, index) => (
            <button
              key={index}
              onClick={() => setSelectedDomain(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                selectedDomain === index
                  ? `bg-gradient-to-r ${getColorClasses(domain.color)} text-white shadow-lg transform scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              <span className="text-2xl">{domain.icon}</span>
              <span>{domain.name}</span>
            </button>
          ))}
        </ScrollReveal>

        {/* Metrics Display */}
        <ScrollReveal animation="scale" delay={2}>
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
          <div className="flex items-center mb-8">
            <span className="text-5xl mr-4">{domains[selectedDomain].icon}</span>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                {domains[selectedDomain].name} Metrics
              </h3>
              <p className="text-gray-600">Real-time performance indicators</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {domains[selectedDomain].metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600 font-medium">{metric.label}</span>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    metric.trend.startsWith('+')
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {metric.trend}
                  </span>
                </div>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">{metric.value}</span>
                  <span className="text-xl text-gray-600 ml-2">{metric.unit}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${getColorClasses(domains[selectedDomain].color)} transition-all duration-1000`}
                    style={{ width: `${Math.min(metric.value, 100)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Card */}
          <div className={`mt-8 bg-gradient-to-r ${getColorClasses(domains[selectedDomain].color)} rounded-xl p-6 text-white`}>
            <h4 className="text-xl font-bold mb-2">Overall Performance</h4>
            <p className="text-white text-opacity-90">
              {domains[selectedDomain].name} domain is showing{' '}
              {domains[selectedDomain].metrics[0].trend.startsWith('+') ? 'positive' : 'improving'}{' '}
              trends across all key metrics, contributing to a smarter, more efficient city.
            </p>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default SmartCityMetrics

