import React from 'react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gold-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Smart City
            <span className="text-gold-500 block mt-2">Insights</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Transforming urban data into actionable intelligence for smarter,
            more sustainable cities
          </p>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-500 mb-4">
              Our comprehensive analytics platform empowers city leaders to make data-driven decisions, optimize resources, and enhance quality of life for millions of citizens. From traffic management to energy efficiency, waste reduction to public safety - we provide the insights you need to build the cities of tomorrow.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mt-6">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Real-Time Monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>AI-Powered Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Predictive Insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Scalable Solutions</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button className="px-8 py-4 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
              Explore Insights
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gold-500 hover:bg-gold-50 transition-all shadow-md hover:shadow-lg text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gold-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gold-300 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold-100 rounded-full opacity-30 blur-lg"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero

