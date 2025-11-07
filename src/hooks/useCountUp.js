import { useEffect, useRef, useState } from 'react'

const useCountUp = (endValue, options = {}) => {
  const { duration = 2000, startValue = 0, once = true } = options
  const [value, setValue] = useState(startValue)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)
  const startTimestamp = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) {
      return
    }

    let observer

    const animate = (timestamp) => {
      if (!startTimestamp.current) {
        startTimestamp.current = timestamp
      }

      const progress = Math.min((timestamp - startTimestamp.current) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress)

      setValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (once && hasAnimated) {
            return
          }
          setHasAnimated(true)
          startTimestamp.current = null
          requestAnimationFrame(animate)
        } else if (!once) {
          setValue(startValue)
          setHasAnimated(false)
        }
      })
    }

    observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.2,
      rootMargin: '0px',
    })

    observer.observe(element)

    return () => {
      if (observer && element) {
        observer.unobserve(element)
      }
    }
  }, [duration, endValue, hasAnimated, once, startValue])

  return [elementRef, value]
}

export default useCountUp
