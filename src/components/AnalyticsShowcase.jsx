import React from 'react'
import ScrollReveal from './ScrollReveal'
import useCountUp from '../hooks/useCountUp'

const analyticsData = [
  {
    title: 'Real-Time Mobility Index',
    value: 92,
    suffix: '%',
    description: 'Measure how efficiently citizens move across the city using public and private transportation.',
    color: 'from-blue-500 to-blue-600',
    segments: [68, 82, 92],
    labels: ['Morning', 'Midday', 'Evening'],
  },
  {
    title: 'Energy Optimization Score',
    value: 87,
    suffix: '%',
    description: 'Combine renewable integration, consumption efficiency, and grid stability into a single score.',
    color: 'from-green-500 to-green-600',
    segments: [54, 72, 87],
    labels: ['Residential', 'Commercial', 'Industrial'],
  },
  {
    title: 'Citizen Happiness Index',
    value: 94,
    suffix: '%',
    description: 'Blend sentiment analysis, service satisfaction, and engagement metrics to quantify citizen happiness.',
    color: 'from-purple-500 to-purple-600',
    segments: [71, 86, 94],
    labels: ['Services', 'Safety', 'Engagement'],
  },
]

const heatmapData = [
  { label: 'Traffic Flow', value: 82 },
  { label: 'Public Transit', value: 74 },
  { label: 'Smart Parking', value: 91 },
  { label: 'Air Quality', value: 88 },
  { label: 'Water Quality', value: 93 },
  { label: 'Waste Recycling', value: 79 },
  { label: 'Emergency Response', value: 96 },
  { label: 'Energy Efficiency', value: 85 },
  { label: 'Citizen Services', value: 90 },
]

const kpiData = [
  { label: 'Sensors Streaming', value: 12450 },
  { label: 'Events Processed / hr', value: 864000 },
  { label: 'Anomalies Prevented', value: 312 },
]

const AnalyticsCard = ({ data, index }) => {
  const [counterRef, value] = useCountUp(data.value, { duration: 2500 })

  return (
    <ScrollReveal
      animation={index % 3 === 0 ? 'slide-left' : index % 3 === 1 ? 'scale' : 'slide-right'}
      delay={Math.floor(index / 3)}
    >
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 h-full">
        <div className="flex items-start justify-between mb-6 gap-3">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 max-w-xs sm:max-w-sm">
            {data.title}
          </h3>
          <div
            ref={counterRef}
            className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${data.color} text-transparent bg-clip-text whitespace-nowrap`}
          >
            {value}
            <span className="text-lg sm:text-2xl align-top ml-1">{data.suffix}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
          {data.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.segments.map((segment, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex-1 bg-gray-100 rounded-lg p-2">
                <div className="h-24 sm:h-28 bg-gradient-to-t from-gray-200 to-gray-100 rounded-md overflow-hidden relative">
                  <div
                    className={`absolute bottom-0 left-0 right-0 rounded-md bg-gradient-to-t ${data.color}`}
                    style={{ height: `${segment}%` }}
                  ></div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <div className="text-sm font-semibold text-gray-900">{segment}%</div>
                <div className="text-xs text-gray-500">{data.labels[idx]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}

const KpiItem = ({ label, value, delay }) => {
  const [ref, count] = useCountUp(value, { duration: 2000 })
  return (
    <ScrollReveal animation="fade-in" delay={delay}>
      <div className="bg-gray-50 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <span className="text-sm font-semibold text-gray-700">{label}</span>
        <span ref={ref} className="text-xl sm:text-2xl font-bold text-gold-600">
          {count.toLocaleString()}
        </span>
      </div>
    </ScrollReveal>
  )
}

const HeatmapCard = () => (
  <ScrollReveal animation="fade-in" delay={3}>
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 text-white h-full">
      <h3 className="text-2xl font-bold mb-6">Operational Heatmap</h3>
      <p className="text-sm text-gray-300 mb-8 leading-relaxed">
        Evaluate performance across every smart city vertical. The heat intensity and value show how each domain is
        trending against strategic goals for the current quarter.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {heatmapData.map((item, index) => (
          <ScrollReveal
            key={item.label}
            animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
            delay={index % 3}
          >
            <div className="bg-white bg-opacity-10 rounded-xl border border-white/10 p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-200">{item.label}</span>
                <span className="text-lg font-bold text-gold-300">{item.value}%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </ScrollReveal>
)

const AnalyticsShowcase = () => {
  return (
    <section id="analytics" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal animation="fade-in" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Advanced Analytics
            <span className="text-gold-500"> Intelligence</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Visualize critical smart city metrics with interactive graphs and real-time counters. Every insight is backed
            by live data streaming from your urban infrastructure.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {analyticsData.map((data, index) => (
            <AnalyticsCard data={data} index={index} key={data.title} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 sm:gap-8">
          <ScrollReveal animation="fade-in" delay={2}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live KPI Stream</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Our live KPI stream aggregates data from sensors, IoT networks, and operational systems. Monitor mobility,
                energy consumption, sustainability, and citizen engagement with instant updates.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {kpiData.map((item, idx) => (
                  <KpiItem key={item.label} label={item.label} value={item.value} delay={idx} />
                ))}
              </div>
            </div>
          </ScrollReveal>
          <HeatmapCard />
        </div>
      </div>
    </section>
  )
}

export default AnalyticsShowcase
