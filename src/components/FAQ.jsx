import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What is Smart City Insights?',
      answer:
        'Smart City Insights is a comprehensive analytics platform that helps city administrators make data-driven decisions. We collect, process, and analyze urban data from various sources to provide actionable insights for improving city operations, citizen services, and quality of life.',
    },
    {
      question: 'How does the platform integrate with existing city systems?',
      answer:
        'Our platform is designed with integration in mind. We offer REST APIs, webhooks, and SDKs for seamless integration with existing city infrastructure, IoT sensors, databases, and third-party systems. Our team works closely with your IT department to ensure smooth integration.',
    },
    {
      question: 'What kind of data can the platform analyze?',
      answer:
        'We can analyze data from traffic systems, energy grids, waste management, public safety, environmental sensors, citizen services, public transit, parking systems, and more. The platform supports various data formats including real-time streams, batch data, and historical records.',
    },
    {
      question: 'Is my city\'s data secure and private?',
      answer:
        'Absolutely. We employ enterprise-grade security measures including end-to-end encryption, multi-factor authentication, role-based access control, and regular security audits. We comply with GDPR, CCPA, and other data privacy regulations. Your data is stored securely and only accessible to authorized personnel.',
    },
    {
      question: 'What is the implementation timeline?',
      answer:
        'Implementation typically takes 4-8 weeks depending on the scope and complexity. This includes integration setup, data pipeline configuration, dashboard customization, and training. Our team provides dedicated support throughout the process to ensure a smooth rollout.',
    },
    {
      question: 'Can the platform scale as our city grows?',
      answer:
        'Yes, our platform is built on scalable cloud infrastructure and can handle millions of data points per day. As your city grows, the platform automatically scales to accommodate increased data volumes and users without performance degradation.',
    },
    {
      question: 'What support and training do you provide?',
      answer:
        'We provide comprehensive training sessions for administrators and end-users, detailed documentation, video tutorials, and 24/7 technical support. Our team is always available to help with any questions or issues you may have.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'Pricing depends on the size of your city, data volume, and specific features needed. We offer flexible pricing plans starting from $999/month. Contact our sales team for a customized quote based on your requirements.',
    },
    {
      question: 'Can I customize the dashboards and reports?',
      answer:
        'Yes, our platform is highly customizable. You can create custom dashboards with drag-and-drop widgets, configure reports with specific metrics and visualizations, set up automated report delivery, and brand the interface with your city\'s colors and logo.',
    },
    {
      question: 'Do you offer a free trial?',
      answer:
        'Yes, we offer a 30-day free trial that includes full access to all features. This allows you to evaluate the platform with your own data and see the value it brings to your city operations. No credit card required.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="text-gold-500"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Smart City Insights
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 pb-5 text-gray-600 transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="pt-2 border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-gold-50 rounded-xl p-8 border border-gold-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch with us for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-600 transition-all shadow-md hover:shadow-lg">
              Contact Support
            </button>
            <button className="px-6 py-3 bg-white text-gold-600 font-semibold rounded-lg border-2 border-gold-500 hover:bg-gold-50 transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

