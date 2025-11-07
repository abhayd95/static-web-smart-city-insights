import React, { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small cities and municipalities',
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        'Up to 50,000 data points/month',
        'Basic analytics dashboard',
        'Email support',
        '5 user accounts',
        'Real-time monitoring',
        'Basic reporting',
        'Mobile app access',
        'API access (limited)',
      ],
      popular: false,
      icon: '🌱',
    },
    {
      name: 'Professional',
      description: 'Ideal for mid-sized cities with growing needs',
      monthlyPrice: 2499,
      yearlyPrice: 24990,
      features: [
        'Up to 500,000 data points/month',
        'Advanced analytics & AI insights',
        'Priority support (24/7)',
        '25 user accounts',
        'Custom dashboards',
        'Advanced reporting & exports',
        'Mobile & web apps',
        'Full API access',
        'Data integration tools',
        'Training & onboarding',
      ],
      popular: true,
      icon: '⭐',
    },
    {
      name: 'Enterprise',
      description: 'For large cities and metropolitan areas',
      monthlyPrice: 4999,
      yearlyPrice: 49990,
      features: [
        'Unlimited data points',
        'Premium AI & ML analytics',
        'Dedicated account manager',
        'Unlimited user accounts',
        'White-label solutions',
        'Custom integrations',
        'Advanced security & compliance',
        'On-premise deployment option',
        'Custom development',
        '24/7 premium support',
        'Quarterly business reviews',
        'SLA guarantee',
      ],
      popular: false,
      icon: '🚀',
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gold-50">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal animation="fade-in" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Flexible
            <span className="text-gold-500"> Pricing Plans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your city's needs. All plans include our core features with scalable options.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-gold-500 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-2 text-gold-600 font-bold">Save 17%</span>
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal
              key={index}
              animation={index === 1 ? 'scale' : index === 0 ? 'slide-left' : 'slide-right'}
              delay={index}
            >
              <div className={`relative p-8 bg-white rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-2 card-hover-effect h-full ${
                plan.popular
                  ? 'border-gold-500 shadow-2xl scale-105'
                  : 'border-gray-200 shadow-lg hover:border-gold-300'
              }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-600 ml-2">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className="text-sm text-gray-500">
                    ${plan.monthlyPrice}/month when billed annually
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0 mt-0.5"
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
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gold-500 text-white hover:bg-gold-600 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gold-500 hover:text-white border-2 border-gray-200 hover:border-gold-500'
                } transform hover:-translate-y-1`}
              >
                Get Started
              </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in" delay={3} className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom solution?{' '}
            <a href="#contact" className="text-gold-600 font-semibold hover:underline">
              Contact our sales team
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Pricing

