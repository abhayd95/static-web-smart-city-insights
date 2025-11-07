import React from 'react'
import ScrollReveal from './ScrollReveal'

const Integrations = () => {
  const integrations = [
    {
      name: 'Traffic Management Systems',
      category: 'Transportation',
      icon: '🚦',
      description: 'Integrate with existing traffic control systems, traffic lights, and monitoring cameras',
      protocols: ['API', 'MQTT', 'REST'],
    },
    {
      name: 'Energy Management Systems',
      category: 'Energy',
      icon: '⚡',
      description: 'Connect with smart grids, energy meters, and renewable energy sources',
      protocols: ['Modbus', 'OPC UA', 'REST API'],
    },
    {
      name: 'Water Management',
      category: 'Utilities',
      icon: '💧',
      description: 'Integrate with water quality sensors, flow meters, and treatment facilities',
      protocols: ['LoRaWAN', 'MQTT', 'REST'],
    },
    {
      name: 'Public Safety Systems',
      category: 'Safety',
      icon: '🛡️',
      description: 'Connect with emergency services, surveillance cameras, and alarm systems',
      protocols: ['API', 'WebSocket', 'REST'],
    },
    {
      name: 'Waste Management',
      category: 'Environment',
      icon: '♻️',
      description: 'Integrate with waste collection systems, bin sensors, and recycling facilities',
      protocols: ['IoT', 'MQTT', 'API'],
    },
    {
      name: 'Public Transit',
      category: 'Transportation',
      icon: '🚌',
      description: 'Connect with bus, train, and metro systems for real-time tracking',
      protocols: ['GTFS', 'API', 'REST'],
    },
    {
      name: 'Payment Systems',
      category: 'Finance',
      icon: '💳',
      description: 'Integrate with payment gateways for parking, transit, and city services',
      protocols: ['REST API', 'Webhook', 'SDK'],
    },
    {
      name: 'GIS & Mapping',
      category: 'Infrastructure',
      icon: '🗺️',
      description: 'Connect with mapping services and geographic information systems',
      protocols: ['GeoJSON', 'WMS', 'API'],
    },
    {
      name: 'Weather Services',
      category: 'Environment',
      icon: '🌤️',
      description: 'Integrate with weather APIs and forecasting services',
      protocols: ['REST API', 'JSON'],
    },
    {
      name: 'Mobile Apps',
      category: 'Citizen Services',
      icon: '📱',
      description: 'SDK and APIs for citizen mobile applications',
      protocols: ['REST API', 'WebSocket', 'SDK'],
    },
    {
      name: 'Database Systems',
      category: 'Data',
      icon: '💾',
      description: 'Connect with existing databases and data warehouses',
      protocols: ['SQL', 'NoSQL', 'API'],
    },
    {
      name: 'Cloud Platforms',
      category: 'Infrastructure',
      icon: '☁️',
      description: 'Integration with AWS, Azure, Google Cloud, and other cloud services',
      protocols: ['REST API', 'gRPC', 'SDK'],
    },
  ]

  const categories = [...new Set(integrations.map(i => i.category))]

  return (
    <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal animation="fade-in" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Seamless
            <span className="text-gold-500"> Integrations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Connect with your existing systems and infrastructure easily
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Our platform supports multiple protocols and standards, making integration with your current systems simple and secure.
          </p>
        </ScrollReveal>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <ScrollReveal
              key={index}
              animation={index % 3 === 0 ? 'slide-left' : index % 3 === 1 ? 'scale' : 'slide-right'}
              delay={Math.floor(index / 3)}
            >
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gold-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{integration.icon}</div>
                <span className="px-3 py-1 bg-gold-50 text-gold-700 text-xs font-semibold rounded-full">
                  {integration.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{integration.name}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{integration.description}</p>

              <div className="border-t border-gray-100 pt-4">
                <div className="text-xs font-semibold text-gray-500 mb-2">Supported Protocols:</div>
                <div className="flex flex-wrap gap-2">
                  {integration.protocols.map((protocol, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {protocol}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Integration Benefits */}
        <ScrollReveal animation="scale" delay={2}>
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Integration Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🔌</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Easy Setup</h4>
              <p className="text-gray-600 text-sm">
                Simple API integration with comprehensive documentation and support
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Secure</h4>
              <p className="text-gray-600 text-sm">
                Enterprise-grade security with encryption and authentication
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Fast</h4>
              <p className="text-gray-600 text-sm">
                Real-time data synchronization with low latency
              </p>
            </div>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Integrations

