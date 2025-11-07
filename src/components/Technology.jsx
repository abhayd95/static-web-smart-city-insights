import React from 'react'
import ScrollReveal from './ScrollReveal'

const Technology = () => {
  const technologies = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', description: 'Modern UI framework', icon: '⚛️' },
        { name: 'TypeScript', description: 'Type-safe development', icon: '📘' },
        { name: 'Tailwind CSS', description: 'Utility-first styling', icon: '🎨' },
        { name: 'Vite', description: 'Fast build tool', icon: '⚡' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', description: 'Server runtime', icon: '🟢' },
        { name: 'Python', description: 'Data processing', icon: '🐍' },
        { name: 'PostgreSQL', description: 'Reliable database', icon: '🐘' },
        { name: 'Redis', description: 'Caching layer', icon: '🔴' },
      ],
    },
    {
      category: 'AI & ML',
      items: [
        { name: 'TensorFlow', description: 'Machine learning', icon: '🧠' },
        { name: 'PyTorch', description: 'Deep learning', icon: '🔥' },
        { name: 'Scikit-learn', description: 'Data science', icon: '📊' },
        { name: 'OpenCV', description: 'Computer vision', icon: '👁️' },
      ],
    },
    {
      category: 'Cloud & Infrastructure',
      items: [
        { name: 'AWS', description: 'Cloud services', icon: '☁️' },
        { name: 'Docker', description: 'Containerization', icon: '🐳' },
        { name: 'Kubernetes', description: 'Orchestration', icon: '⚓' },
        { name: 'CI/CD', description: 'Automated deployment', icon: '🔄' },
      ],
    },
    {
      category: 'IoT & Sensors',
      items: [
        { name: 'MQTT', description: 'IoT messaging', icon: '📡' },
        { name: 'LoRaWAN', description: 'Long-range connectivity', icon: '📶' },
        { name: 'Edge Computing', description: 'Local processing', icon: '⚙️' },
        { name: 'Sensor Integration', description: 'Multi-protocol support', icon: '🔌' },
      ],
    },
    {
      category: 'Data & Analytics',
      items: [
        { name: 'Apache Kafka', description: 'Stream processing', icon: '🌊' },
        { name: 'Elasticsearch', description: 'Search & analytics', icon: '🔍' },
        { name: 'Grafana', description: 'Visualization', icon: '📈' },
        { name: 'InfluxDB', description: 'Time-series data', icon: '📉' },
      ],
    },
  ]

  return (
    <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal animation="fade-in" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Technology
            <span className="text-gold-500"> Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with cutting-edge technologies to deliver performance, scalability, and reliability
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, categoryIndex) => (
            <ScrollReveal
              key={categoryIndex}
              animation={categoryIndex % 3 === 0 ? 'slide-left' : categoryIndex % 3 === 1 ? 'scale' : 'slide-right'}
              delay={Math.floor(categoryIndex / 3)}
            >
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gold-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-gold-500 mr-3 rounded"></span>
                {tech.category}
              </h3>
              <div className="space-y-4">
                {tech.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gold-50 transition-colors"
                  >
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Architecture Overview */}
        <ScrollReveal animation="scale" delay={2}>
          <div className="mt-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Scalable Architecture</h3>
              <p className="text-lg text-gold-100 max-w-2xl mx-auto">
                Our platform is designed with microservices architecture, ensuring high availability,
                scalability, and easy maintenance. Each component can scale independently based on demand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-sm">Uptime SLA</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur">
                <div className="text-3xl font-bold mb-2">&lt;100ms</div>
                <div className="text-sm">Average Response Time</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur">
                <div className="text-3xl font-bold mb-2">1M+</div>
                <div className="text-sm">Data Points/Second</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Technology

