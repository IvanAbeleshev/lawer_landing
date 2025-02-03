'use client'
import { RefObject, useEffect, useRef, useState } from "react";

function useIntersectionObserver<T extends HTMLElement>(threshold = 0.1): [RefObject<T>, boolean] {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref as RefObject<T>, isVisible]
}

export default useIntersectionObserver;