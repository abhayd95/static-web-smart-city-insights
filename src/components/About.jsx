import React from 'react'

const About = () => {
  const stats = [
    { number: '500+', label: 'Cities Analyzed', description: 'Urban centers worldwide' },
    { number: '10M+', label: 'Data Points', description: 'Collected daily' },
    { number: '95%', label: 'Accuracy Rate', description: 'In predictions' },
    { number: '24/7', label: 'Monitoring', description: 'Real-time updates' },
    { number: '50+', label: 'Countries', description: 'Global presence' },
    { number: '99.9%', label: 'Uptime', description: 'Service reliability' },
  ]

  const insights = [
    {
      title: 'Traffic Optimization',
      description:
        'Reduce traffic congestion by up to 30% through intelligent routing and real-time traffic management.',
      icon: '🚦',
    },
    {
      title: 'Energy Efficiency',
      description:
        'Achieve 25% reduction in energy consumption with smart grid management and predictive analytics.',
      icon: '⚡',
    },
    {
      title: 'Waste Management',
      description:
        'Optimize waste collection routes and schedules, reducing operational costs by 20%.',
      icon: '♻️',
    },
    {
      title: 'Public Safety',
      description:
        'Enhance emergency response times by 40% through predictive policing and resource allocation.',
      icon: '🛡️',
    },
    {
      title: 'Water Management',
      description:
        'Optimize water distribution and reduce waste by 35% with smart metering and leak detection systems.',
      icon: '💧',
    },
    {
      title: 'Air Quality',
      description:
        'Monitor and improve air quality indices, reducing pollution levels by implementing data-driven policies.',
      icon: '🌬️',
    },
    {
      title: 'Urban Planning',
      description:
        'Support evidence-based urban development with demographic analytics and growth forecasting models.',
      icon: '🏗️',
    },
    {
      title: 'Healthcare Access',
      description:
        'Improve healthcare delivery by analyzing patient flow and optimizing medical facility locations.',
      icon: '🏥',
    },
    {
      title: 'Education Analytics',
      description:
        'Enhance educational outcomes by tracking school performance metrics and resource allocation efficiency.',
      icon: '📚',
    },
  ]

  return (
    <section
      id="insights"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gold-50 via-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Stats Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Cities Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Empowering urban transformation through data-driven decision making
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-gold-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights Section */}
        <div id="about" className="mt-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Key Insights & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how smart city analytics drive measurable improvements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-gold-500 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{insight.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your City?
            </h3>
            <p className="text-xl text-gold-100 mb-8 max-w-2xl mx-auto">
              Join leading cities in leveraging data-driven insights for smarter
              urban development
            </p>
            <button className="px-8 py-4 bg-white text-gold-600 font-semibold rounded-lg hover:bg-gold-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

