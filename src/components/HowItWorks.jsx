import React from 'react'
import ScrollReveal from './ScrollReveal'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Data Collection',
      description:
        'We integrate with your existing city infrastructure, IoT sensors, and public data sources to collect comprehensive urban data in real-time.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Data Processing',
      description:
        'Advanced algorithms and machine learning models process the raw data, identifying patterns, anomalies, and trends across multiple urban systems.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Analytics & Insights',
      description:
        'Transform processed data into actionable insights through interactive dashboards, predictive analytics, and comprehensive reporting tools.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Implementation',
      description:
        'City administrators use insights to optimize operations, allocate resources efficiently, and implement data-driven policies that improve citizen quality of life.',
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal animation="fade-in" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It
            <span className="text-gold-500"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our four-step process transforms raw urban data into actionable intelligence
            that drives smarter city management
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Connection Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <ScrollReveal
                key={index}
                animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                delay={index}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-gold-500 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-gold-500">{step.icon}</div>
                    <div className="text-6xl font-bold text-gold-100">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <ScrollReveal animation="scale" delay={4} className="mt-16 text-center">
          <div className="bg-gold-50 rounded-xl p-8 max-w-4xl mx-auto border border-gold-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-700 mb-6">
              Our team of experts will work with you to customize the platform for your
              city's unique needs. From initial setup to ongoing support, we're here to
              ensure your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-600 transition-all shadow-md hover:shadow-lg">
                Schedule a Demo
              </button>
              <button className="px-6 py-3 bg-white text-gold-600 font-semibold rounded-lg border-2 border-gold-500 hover:bg-gold-50 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default HowItWorks

