import React from 'react'
import ScrollReveal from './ScrollReveal'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'City Manager',
      city: 'Singapore',
      image: '👩‍💼',
      quote:
        'Smart City Insights transformed how we approach urban planning. The real-time data and predictive analytics have helped us reduce traffic congestion by 28% and improve citizen satisfaction scores significantly.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Director of Urban Planning',
      city: 'Barcelona',
      image: '👨‍💼',
      quote:
        'The platform\'s comprehensive analytics have been instrumental in our sustainability initiatives. We\'ve achieved our carbon reduction goals two years ahead of schedule thanks to data-driven decision making.',
    },
    {
      name: 'Priya Patel',
      role: 'Chief Data Officer',
      city: 'Mumbai',
      image: '👩‍💻',
      quote:
        'Implementing Smart City Insights was seamless. The AI-powered insights have revolutionized our public safety operations, reducing emergency response times and improving overall city security.',
    },
    {
      name: 'James Thompson',
      role: 'Sustainability Coordinator',
      city: 'Vancouver',
      image: '👨‍🔬',
      quote:
        'The waste management optimization features alone have saved our city millions annually. The detailed reporting capabilities make it easy to communicate progress to stakeholders and citizens.',
    },
    {
      name: 'Emma Wilson',
      role: 'Transportation Director',
      city: 'Stockholm',
      image: '👩‍🚀',
      quote:
        'Smart City Insights has been a game-changer for our transportation network. The real-time monitoring and predictive analytics help us optimize routes and reduce operational costs significantly.',
    },
    {
      name: 'Ahmed Hassan',
      role: 'Smart City Consultant',
      city: 'Dubai',
      image: '👨‍🏫',
      quote:
        'Working with Smart City Insights across multiple projects, I\'ve seen firsthand how their platform drives measurable improvements. The integration capabilities and support are outstanding.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal animation="fade-in" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Trusted by City Leaders
            <span className="text-gold-500"> Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what city administrators and urban planners are saying about our platform
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={index}
              animation={index % 3 === 0 ? 'slide-left' : index % 3 === 1 ? 'fade-in' : 'slide-right'}
              delay={Math.floor(index / 3)}
            >
              <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gold-600 font-medium">
                    {testimonial.city}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

