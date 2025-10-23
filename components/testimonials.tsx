"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  stream: string
  semester: string
  text: string
  rating: number
  initial: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Kumar",
    initial: "AK",
    stream: "CSE",
    semester: "3rd",
    text: "Examplan-B's DSA course helped me crack my placement interview. The explanations are crystal clear!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    initial: "PS",
    stream: "ECE",
    semester: "3rd",
    text: "Network Theory was always confusing until I took this course. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Patel",
    initial: "RP",
    stream: "All",
    semester: "1st",
    text: "The Mathematics-I course made complex concepts simple. Worth every penny!",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Singh",
    initial: "NS",
    stream: "All",
    semester: "1st",
    text: "Physics and Chemistry courses are comprehensive and well-structured. Great learning experience!",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Palette of gradient classes for cards and initials. We cycle through them per-slide.
  const gradients = [
    {
      card: "from-[#0ea5e9]/20 via-[#7c3aed]/10 to-[#06b6d4]/10",
      initial: "bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] text-white",
    },
    {
      card: "from-[#06b6d4]/20 via-[#10b981]/10 to-[#84cc16]/10",
      initial: "bg-gradient-to-br from-[#06b6d4] to-[#10b981] text-white",
    },
    {
      card: "from-[#f97316]/20 via-[#ef4444]/10 to-[#f43f5e]/10",
      initial: "bg-gradient-to-br from-[#f97316] to-[#ef4444] text-white",
    },
    {
      card: "from-[#8b5cf6]/20 via-[#ef9a9a]/8 to-[#f59e0b]/10",
      initial: "bg-gradient-to-br from-[#8b5cf6] to-[#f59e0b] text-white",
    },
  ]

  const palette = gradients[currentIndex % gradients.length]

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of MAKAUT students who have transformed their learning journey with us
          </p>
        </div>

        {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`border border-border/50 rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-sm mb-12 bg-gradient-to-b ${palette.card}`}
              style={{ backgroundBlendMode: "overlay" }}
            >
              {/* Student Profile */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-semibold border border-white/10 shadow-lg ${palette.initial}`}>
                  {current.initial}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground">{current.name}</h3>
                  <p className="text-muted-foreground">
                    {current.stream} • {current.semester} Semester
                  </p>
                </div>
              </motion.div>

              {/* Rating */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.2 }}
                className="flex gap-1 mb-6"
              >
                {[...Array(current.rating)].map((_, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, rotate: -30 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-yellow-400 text-xl drop-shadow" 
                    aria-hidden
                  >
                    ★
                  </motion.span>
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="relative"
              >
                <motion.svg 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="absolute -top-4 -left-4 w-8 h-8 text-accent/20" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </motion.svg>
                <p className="text-lg md:text-xl text-card-foreground leading-relaxed pl-6">
                  "{current.text}"
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

        {/* Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="flex items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--accent) / 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="p-3 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <motion.svg 
                animate={{ x: [-2, 0, -2] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-6 h-6 text-accent" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </motion.svg>
            </motion.button>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="flex gap-3"
            >
            {testimonials.map((_, index) => (
                <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-10 bg-accent" : "w-2.5 bg-accent/30 hover:bg-accent/50"
                }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--accent) / 0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="p-3 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <motion.svg 
                animate={{ x: [2, 0, 2] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-6 h-6 text-accent" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.button>
          </motion.div>
      </div>
    </section>
  )
}
