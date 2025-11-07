import React, { useState } from 'react'

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(0)

  const useCases = [
    {
      title: 'Traffic Management',
      description:
        'Optimize traffic flow and reduce congestion in urban areas using real-time data and AI-powered routing.',
      benefits: [
        'Reduce commute times by 25-30%',
        'Decrease fuel consumption and emissions',
        'Improve road safety',
        'Better emergency vehicle routing',
      ],
      metrics: [
        { label: 'Traffic Reduction', value: '32%' },
        { label: 'Time Saved', value: '15 min/day' },
        { label: 'CO2 Reduction', value: '18%' },
      ],
      icon: '🚦',
    },
    {
      title: 'Energy Optimization',
      description:
        'Monitor and optimize energy consumption across city infrastructure to reduce costs and environmental impact.',
      benefits: [
        'Reduce energy costs by 20-25%',
        'Lower carbon footprint',
        'Predictive maintenance',
        'Smart grid integration',
      ],
      metrics: [
        { label: 'Energy Saved', value: '2.5M kWh' },
        { label: 'Cost Reduction', value: '$450K/year' },
        { label: 'Efficiency Gain', value: '28%' },
      ],
      icon: '⚡',
    },
    {
      title: 'Waste Management',
      description:
        'Intelligent waste collection scheduling and route optimization to improve efficiency and reduce costs.',
      benefits: [
        'Optimize collection routes',
        'Reduce operational costs',
        'Increase recycling rates',
        'Improve service quality',
      ],
      metrics: [
        { label: 'Cost Savings', value: '22%' },
        { label: 'Route Efficiency', value: '35%' },
        { label: 'Recycling Rate', value: '+15%' },
      ],
      icon: '♻️',
    },
    {
      title: 'Public Safety',
      description:
        'Enhance public safety through predictive analytics, emergency response optimization, and crime pattern analysis.',
      benefits: [
        'Faster emergency response',
        'Reduced crime rates',
        'Better resource allocation',
        'Improved citizen safety',
      ],
      metrics: [
        { label: 'Response Time', value: '-40%' },
        { label: 'Crime Reduction', value: '18%' },
        { label: 'Coverage Area', value: '+25%' },
      ],
      icon: '🛡️',
    },
    {
      title: 'Environmental Monitoring',
      description:
        'Track air quality, water quality, and environmental conditions to protect citizen health and the environment.',
      benefits: [
        'Real-time pollution monitoring',
        'Health risk mitigation',
        'Environmental compliance',
        'Data-driven policy making',
      ],
      metrics: [
        { label: 'Air Quality Improvement', value: '24%' },
        { label: 'Monitoring Points', value: '150+' },
        { label: 'Alert Accuracy', value: '96%' },
      ],
      icon: '🌍',
    },
    {
      title: 'Smart Parking',
      description:
        'Guide citizens to available parking spots, reduce traffic, and optimize parking space utilization.',
      benefits: [
        'Reduce parking search time',
        'Increase parking revenue',
        'Reduce traffic congestion',
        'Improve citizen satisfaction',
      ],
      metrics: [
        { label: 'Search Time', value: '-45%' },
        { label: 'Revenue Increase', value: '+18%' },
        { label: 'Utilization Rate', value: '82%' },
      ],
      icon: '🅿️',
    },
  ]

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Real-World
            <span className="text-gold-500"> Use Cases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how cities worldwide are leveraging our platform to solve critical urban challenges
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {useCases.map((useCase, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === index
                  ? 'bg-gold-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {useCase.title}
            </button>
          ))}
        </div>

        {/* Active Use Case Content */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side */}
            <div>
              <div className="text-6xl mb-6">{useCases[activeTab].icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {useCases[activeTab].title}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {useCases[activeTab].description}
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h4>
                <ul className="space-y-3">
                  {useCases[activeTab].benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-gold-500 mr-3 flex-shrink-0 mt-0.5"
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
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side - Metrics */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">Impact Metrics</h4>
              <div className="space-y-4">
                {useCases[activeTab].metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gold-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600 font-medium">{metric.label}</span>
                      <span className="text-3xl font-bold text-gold-500">
                        {metric.value}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-gold-400 to-gold-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.min(parseInt(metric.value), 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gold-50 rounded-xl border border-gold-200">
                <h5 className="font-bold text-gray-900 mb-2">Success Story</h5>
                <p className="text-gray-700 text-sm">
                  Cities using our platform for {useCases[activeTab].title.toLowerCase()} have seen
                  significant improvements in efficiency, cost reduction, and citizen satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UseCases

