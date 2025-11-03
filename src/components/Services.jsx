import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const [flippedCards, setFlippedCards] = useState(Array(4).fill(false))

  const services = [
    {
      title: "Custom Development",
      front: "Tailored software solutions built for your unique business needs",
      backItems: [
        "Custom Web Development",
        "Custom Web Applications with Modern Frameworks",
        "Native and Cross-Platform Mobile Apps",
        "API Development & Third Party Integrations",
        "Responsive Design & Optimization"
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 64 64">
          <rect x="8" y="12" width="48" height="36" rx="2" strokeWidth={2} />
          <path d="M8 20h48" strokeWidth={2} />
          <circle cx="14" cy="16" r="1.5" fill="#ff5f56" stroke="none" />
          <circle cx="20" cy="16" r="1.5" fill="#ffbd2e" stroke="none" />
          <circle cx="26" cy="16" r="1.5" fill="#27c93f" stroke="none" />
          <rect x="16" y="28" width="12" height="10" rx="1" fill="currentColor" opacity="0.3" />
          <rect x="32" y="28" width="12" height="10" rx="1" fill="currentColor" opacity="0.3" />
          <rect x="48" y="28" width="4" height="10" rx="1" fill="currentColor" opacity="0.3" />
        </svg>
      )
    },
    {
      title: "AI & Machine Learning",
      front: "Intelligent systems that learn and adapt to drive your business forward",
      backItems: [
        "Custom Machine Learning Models",
        "Predictive Analytics & Forecasting",
        "Chatbots & Virtual Assistants",
        "Data Mining & Pattern Recognition"
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="10" strokeWidth={2} />
          <circle cx="32" cy="18" r="1.5" fill="currentColor" />
          <circle cx="46" cy="32" r="1.5" fill="currentColor" />
          <circle cx="32" cy="46" r="1.5" fill="currentColor" />
          <circle cx="18" cy="32" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "IoT & Digital Engineering",
      front: "Connected devices and smart systems for the digital age",
      backItems: [
        "IoT Device Integration & Management",
        "Sensor Network & Data Collection",
        "Real-Time Monitoring Dashboards",
        "Automation System"
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 64 64">
          <rect x="20" y="20" width="10" height="10" rx="1.5" strokeWidth={2} />
          <rect x="36" y="20" width="10" height="10" rx="1.5" strokeWidth={2} />
          <rect x="28" y="36" width="10" height="10" rx="1.5" strokeWidth={2} />
          <path d="M30 41l2 2 4-4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Identity Branding & Marketing",
      front: "Strategic branding that resonates and marketing that converts",
      backItems: [
        "Brand Strategy & Positioning",
        "Logo Design & Visual Identity",
        "Social Media Management",
        "Content Creation & Copywriting",
        "Digital Marketing Campaigns"
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="14" strokeWidth={2} />
          <circle cx="32" cy="32" r="3" strokeWidth={2} />
          <path d="M32 18v8M32 38v8M18 32h8M38 32h8" strokeWidth={2} strokeLinecap="round" />
        </svg>
      )
    }
  ]

  const handleCardFlip = (index) => {
    const newFlippedCards = [...flippedCards]
    newFlippedCards[index] = !newFlippedCards[index]
    setFlippedCards(newFlippedCards)
  }

  return (
    <section id="services" className="min-h-screen py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        {/* Header - Static for better performance */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business 
            and secure your competitive advantage in the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-80 perspective-1000"
            >
              <motion.div
                className="relative w-full h-full preserve-3d cursor-pointer"
                style={{ willChange: 'transform' }}
                animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => handleCardFlip(index)}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="bg-black/95 rounded-2xl p-8 h-full flex flex-col justify-center items-center text-center border border-gray-800 hover:border-white/30 transition-colors duration-200 group">
                    <div className="text-white mb-6 transition-transform duration-200 group-hover:scale-105">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{service.front}</p>
                    <div className="text-sm text-gray-500 flex items-center">
                      <span>Click to explore</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-gradient-to-br from-white to-gray-100 text-black rounded-2xl p-8 h-full flex flex-col justify-center border border-white/20">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">What We Do:</h4>
                      <ul className="space-y-2.5">
                        {service.backItems.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <span className="text-black mr-3 text-lg leading-none">•</span>
                            <span className="text-sm leading-relaxed flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}

export default Services