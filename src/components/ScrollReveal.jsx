import React, { useEffect, useRef, useState } from 'react'

const ScrollReveal = ({ children, animation = 'fade-in', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  const animationClasses = {
    'fade-in': 'scroll-fade-in',
    'slide-left': 'scroll-slide-left',
    'slide-right': 'scroll-slide-right',
    'scale': 'scroll-scale',
    'rotate': 'scroll-rotate',
  }

  const delayClasses = {
    0: '',
    1: 'scroll-delay-1',
    2: 'scroll-delay-2',
    3: 'scroll-delay-3',
    4: 'scroll-delay-4',
    5: 'scroll-delay-5',
    6: 'scroll-delay-6',
  }

  const animationClass = animationClasses[animation] || animationClasses['fade-in']
  const delayClass = delayClasses[delay] || ''

  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${delayClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default ScrollReveal

