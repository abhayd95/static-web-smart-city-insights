import React from 'react'

const DataSources = () => {
  const dataSources = [
    {
      category: 'Government Systems',
      icon: '🏛️',
      sources: [
        'City administrative databases',
        'Traffic management systems',
        'Public safety records',
        'Permit and licensing systems',
        'Budget and financial data',
        'Census and demographic data',
      ],
      color: 'blue',
    },
    {
      category: 'IoT Sensors',
      icon: '📡',
      sources: [
        'Traffic sensors',
        'Air quality monitors',
        'Energy meters',
        'Water quality sensors',
        'Weather stations',
        'Parking sensors',
      ],
      color: 'green',
    },
    {
      category: 'Mobile Applications',
      icon: '📱',
      sources: [
        'Citizen reporting apps',
        'Public transit apps',
        'Parking apps',
        'Emergency services apps',
        'Service request apps',
        'Community engagement platforms',
      ],
      color: 'purple',
    },
    {
      category: 'Satellite & Aerial',
      icon: '🛰️',
      sources: [
        'Satellite imagery',
        'Drone surveillance',
        'Aerial photography',
        'Thermal imaging',
        'GIS mapping data',
        'Remote sensing',
      ],
      color: 'indigo',
    },
    {
      category: 'Social Media',
      icon: '💬',
      sources: [
        'Twitter sentiment analysis',
        'Facebook community data',
        'Instagram location data',
        'News media feeds',
        'Public forums',
        'Citizen feedback',
      ],
      color: 'pink',
    },
    {
      category: 'Third-Party APIs',
      icon: '🔌',
      sources: [
        'Weather services',
        'Mapping services',
        'Payment gateways',
        'Transportation APIs',
        'Business directories',
        'Real estate data',
      ],
      color: 'orange',
    },
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      indigo: 'from-indigo-500 to-indigo-600',
      pink: 'from-pink-500 to-pink-600',
      orange: 'from-orange-500 to-orange-600',
    }
    return colors[color] || colors.blue
  }

  return (
    <section id="data-sources" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Comprehensive
            <span className="text-gold-400"> Data Sources</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Integrate data from multiple sources to create a complete picture of your city
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataSources.map((source, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gold-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{source.icon}</div>
                <h3 className="text-xl font-bold">{source.category}</h3>
              </div>

              <ul className="space-y-2 mb-6">
                {source.sources.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-300">
                    <svg
                      className="w-5 h-5 text-gold-400 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={`mt-4 pt-4 border-t border-gray-700`}>
                <button className={`w-full py-2 px-4 bg-gradient-to-r ${getColorClasses(source.color)} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Stats */}
        <div className="mt-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Data Sources</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10M+</div>
              <div className="text-lg opacity-90">Data Points Daily</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Integration Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataSources

