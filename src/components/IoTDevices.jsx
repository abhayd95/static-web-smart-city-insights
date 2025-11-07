import React from 'react'
import ScrollReveal from './ScrollReveal'

const IoTDevices = () => {
  const devices = [
    {
      category: 'Traffic Sensors',
      icon: '🚦',
      count: '2,450',
      description: 'Monitor traffic flow, vehicle counts, and congestion patterns in real-time',
      features: ['Vehicle detection', 'Speed monitoring', 'Congestion alerts', 'Traffic flow optimization'],
      status: 'Active',
      statusColor: 'green',
    },
    {
      category: 'Air Quality Monitors',
      icon: '🌬️',
      count: '380',
      description: 'Track air pollution levels, particulate matter, and environmental health indicators',
      features: ['PM2.5/PM10 monitoring', 'Ozone detection', 'NO2 levels', 'Real-time alerts'],
      status: 'Active',
      statusColor: 'green',
    },
    {
      category: 'Smart Parking Sensors',
      icon: '🅿️',
      count: '5,200',
      description: 'Detect parking space availability and guide drivers to open spots',
      features: ['Space detection', 'Occupancy tracking', 'Payment integration', 'Mobile alerts'],
      status: 'Active',
      statusColor: 'green',
    },
    {
      category: 'Energy Meters',
      icon: '⚡',
      count: '12,500',
      description: 'Monitor energy consumption, demand patterns, and optimize grid distribution',
      features: ['Real-time monitoring', 'Demand forecasting', 'Peak load management', 'Cost optimization'],
      status: 'Active',
      statusColor: 'green',
    },
    {
      category: 'Waste Management Sensors',
      icon: '🗑️',
      count: '3,800',
      description: 'Track waste bin levels and optimize collection routes',
      features: ['Fill level detection', 'Route optimization', 'Schedule alerts', 'Cost reduction'],
      status: 'Active',
      statusColor: 'green',
    },
    {
      category: 'Water Quality Sensors',
      icon: '💧',
      count: '920',
      description: 'Monitor water quality, flow rates, and detect leaks in the water system',
      features: ['Quality monitoring', 'Leak detection', 'Flow measurement', 'Contamination alerts'],
      status: 'Active',
      statusColor: 'green',
    },
    {
      category: 'Security Cameras',
      icon: '📹',
      count: '1,650',
      description: 'AI-powered surveillance cameras for public safety and crime prevention',
      features: ['Face recognition', 'Motion detection', 'License plate reading', 'Incident alerts'],
      status: 'Active',
      statusColor: 'green',
    },
    {
      category: 'Weather Stations',
      icon: '🌤️',
      count: '85',
      description: 'Comprehensive weather monitoring for urban planning and emergency management',
      features: ['Temperature/humidity', 'Wind speed/direction', 'Precipitation', 'Weather forecasts'],
      status: 'Active',
      statusColor: 'green',
    },
    {
      category: 'Noise Sensors',
      icon: '🔊',
      count: '420',
      description: 'Monitor noise pollution levels across different city zones',
      features: ['Decibel monitoring', 'Zone mapping', 'Complaint tracking', 'Regulation compliance'],
      status: 'Active',
      statusColor: 'green',
    },
  ]

  return (
    <section id="iot-devices" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal animation="fade-in" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            IoT Devices &
            <span className="text-gold-500"> Sensor Network</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Comprehensive network of smart sensors and IoT devices powering your smart city infrastructure
          </p>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-green-50 border border-green-200 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold">
              {devices.reduce((sum, device) => sum + parseInt(device.count.replace(',', '')), 0).toLocaleString()} Devices Active
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device, index) => (
            <ScrollReveal
              key={index}
              animation={index % 3 === 0 ? 'slide-left' : index % 3 === 1 ? 'fade-in' : 'slide-right'}
              delay={Math.floor(index / 3)}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:border-gold-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{device.icon}</div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{device.count}</div>
                  <div className="text-sm text-gray-500">Devices</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{device.category}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{device.description}</p>

              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-semibold text-gray-700">{device.status}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="text-sm font-semibold text-gray-700 mb-2">Key Features:</div>
                <ul className="space-y-1">
                  {device.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0"
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Network Stats */}
        <ScrollReveal animation="scale" delay={3}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="text-sm opacity-90">Uptime</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">&lt;50ms</div>
              <div className="text-sm opacity-90">Response Time</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Monitoring</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-sm opacity-90">Data Points/Day</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default IoTDevices

