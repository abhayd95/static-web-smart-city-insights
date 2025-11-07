import React, { useState, useEffect } from 'react'

const DashboardPreview = () => {
  const [activeMetric, setActiveMetric] = useState(0)

  const metrics = [
    { label: 'Traffic Flow', value: '87%', change: '+12%', trend: 'up' },
    { label: 'Energy Usage', value: '2.4M kWh', change: '-8%', trend: 'down' },
    { label: 'Air Quality', value: 'Good', change: '+5%', trend: 'up' },
    { label: 'Waste Collected', value: '1,240 tons', change: '+3%', trend: 'up' },
  ]

  const chartData = [
    { name: 'Mon', value: 65, color: 'bg-gold-400' },
    { name: 'Tue', value: 78, color: 'bg-gold-500' },
    { name: 'Wed', value: 82, color: 'bg-gold-600' },
    { name: 'Thu', value: 75, color: 'bg-gold-500' },
    { name: 'Fri', value: 88, color: 'bg-gold-400' },
    { name: 'Sat', value: 92, color: 'bg-gold-500' },
    { name: 'Sun', value: 85, color: 'bg-gold-600' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [metrics.length])

  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Interactive
            <span className="text-gold-400"> Dashboard Preview</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of real-time data visualization with our comprehensive analytics dashboard
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-700">
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">City Analytics Dashboard</h3>
              <p className="text-gray-400">Real-time monitoring and insights</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Live</span>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`bg-gray-700 rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                  activeMetric === index
                    ? 'ring-2 ring-gold-400 transform scale-105'
                    : 'hover:bg-gray-600'
                }`}
                onClick={() => setActiveMetric(index)}
              >
                <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div
                  className={`text-sm flex items-center ${
                    metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  <svg
                    className={`w-4 h-4 mr-1 ${
                      metric.trend === 'up' ? 'rotate-0' : 'rotate-180'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  {metric.change} from last week
                </div>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="bg-gray-700 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold mb-4">Weekly Performance Trend</h4>
            <div className="flex items-end justify-between h-48 gap-2">
              {chartData.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-full ${item.color} rounded-t-lg transition-all duration-500 hover:opacity-80`}
                    style={{ height: `${item.value}%` }}
                    title={`${item.name}: ${item.value}%`}
                  ></div>
                  <div className="text-xs text-gray-400 mt-2">{item.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">1,234</div>
              <div className="text-sm opacity-90">Active Sensors</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">98.7%</div>
              <div className="text-sm opacity-90">System Uptime</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Monitoring</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Want to see the full dashboard in action?
          </p>
          <button className="px-8 py-4 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Request Demo
          </button>
        </div>
      </div>
    </section>
  )
}

export default DashboardPreview

