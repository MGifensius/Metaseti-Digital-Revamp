import React, { useState, useEffect, useRef, lazy, Suspense } from 'react'

// Lazy load Spline to improve initial page load
const Spline = lazy(() => import('@splinetool/react-spline'))

const About = () => {
  const [splineLoading, setSplineLoading] = useState(true)
  const [splineError, setSplineError] = useState(false)
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false)
  const splineRef = useRef(null)

  const visionContent = {
    title: "Leading Catalyst for Digital Transformation",
    description: "To be Indonesia's leading catalyst for digital transformation, empowering businesses to achieve unprecedented growth through innovative technology solutions and strategic excellence."
  }

  const missionContent = {
    title: "World-Class Solutions, Sustainable Innovation",
    description: "To deliver world-class IT solutions and branding strategies that transform challenges into competitive advantages, fostering sustainable innovation and measurable success for every client."
  }

  const roadmapPhases = [
    { 
      year: '2026', 
      phase: 'Phase 1',
      title: 'AI Driven Foundation',
      items: ['AI Agents', 'AI Infrastructure', 'AI Consultations', 'AI Products'],
      description: 'Allowing our customers to utilize AI for automation to its fullest'
    },
    { 
      year: '2028', 
      phase: 'Phase 2',
      title: 'Scale & Productize',
      description: 'Creating comprehensive, customizable products that help customers run their business efficiently'
    },
    { 
      year: '2030', 
      phase: 'Phase 3',
      title: '#1 AI-Based Company',
      description: 'Becoming the top AI-based company in Indonesia'
    }
  ]

  // Intersection Observer to load Spline only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadSpline(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (splineRef.current) {
      observer.observe(splineRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSplineLoad = () => {
    setSplineLoading(false)
  }

  const handleSplineError = () => {
    setSplineError(true)
    setSplineLoading(false)
  }

  return (
    <section id="about" className="w-full relative bg-black overflow-hidden">
      
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/5 to-black pointer-events-none"></div>
      
      {/* Header */}
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
            <span className="text-xs font-medium text-white/80 uppercase tracking-wider">About Us</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Who We Are
          </h2>
          
          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl leading-relaxed">
            Metaseti Digital Indonesia is at the forefront of digital innovation, 
            transforming businesses through cutting-edge technology solutions.
          </p>
        </div>
      </div>

      {/* Vision & Mission with 3D Robot */}
      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left: Cards - NO BACKGROUND, NO HOVER */}
            <div className="space-y-6">
              
              {/* Vision Card - Transparent, No Hover */}
              <div className="relative p-8">
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Vision</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {visionContent.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {visionContent.description}
                  </p>
                </div>
              </div>

              {/* Mission Card - Transparent, No Hover */}
              <div className="relative p-8">
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Mission</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {missionContent.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {missionContent.description}
                  </p>
                </div>
              </div>

            </div>

            {/* Right: 3D Robot from Spline - Optimized for Performance */}
            <div ref={splineRef} className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
              {/* Reduced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>
              
              {/* Spline 3D Robot Container - Optimized */}
              <div className="relative h-full rounded-3xl overflow-hidden">
                
                {/* Loading State */}
                {(!shouldLoadSpline || splineLoading) && !splineError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-white/60 text-sm">Loading 3D Model...</p>
                    </div>
                  </div>
                )}

                {/* Error State / Fallback */}
                {splineError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
                    <div className="text-center px-8">
                      <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">AI Technology</h4>
                      <p className="text-gray-400 text-sm">Powered by advanced algorithms</p>
                    </div>
                  </div>
                )}

                {/* Lazy loaded Spline Component - Performance Optimized */}
                {shouldLoadSpline && (
                  <Suspense fallback={null}>
                    <Spline 
                      scene="https://prod.spline.design/M0YbWIGrPfiojdnm/scene.splinecode" 
                      onLoad={handleSplineLoad}
                      onError={handleSplineError}
                      className="w-full h-full"
                      style={{ 
                        pointerEvents: 'auto',
                        // Performance optimizations
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden'
                      }}
                    />
                  </Suspense>
                )}
              </div>
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <div>
                    <p className="text-white font-semibold text-sm">AI-Powered Innovation</p>
                    <p className="text-gray-400 text-xs">Building the future of technology</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Roadmap Section - MINIMALIST DESIGN */}
      <div className="relative py-16 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Roadmap Header */}
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Roadmap</span>
              </div>
              
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                Future Vision
              </h3>
              
              <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
                Our strategic journey towards becoming Indonesia's leading AI-based company
              </p>
            </div>

            {/* Minimalist Timeline */}
            <div className="relative space-y-12 sm:space-y-16">
              
              {roadmapPhases.map((phase, index) => (
                <div key={index} className="relative group">
                  
                  {/* Timeline Line - Vertical */}
                  {index < roadmapPhases.length - 1 && (
                    <div className="hidden sm:block absolute left-8 top-12 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent"></div>
                  )}

                  <div className="flex gap-6 sm:gap-8">
                    
                    {/* Year indicator */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        {/* Dot */}
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative z-10 group-hover:border-white/20 transition-colors duration-300">
                          <div className="w-3 h-3 rounded-full bg-white group-hover:scale-125 transition-transform duration-300"></div>
                        </div>
                        {/* Year label */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                          <span className="text-2xl font-bold text-white">{phase.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      {/* Phase label */}
                      <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                        <span className="text-xs text-white/60 uppercase tracking-wider">{phase.phase}</span>
                      </div>

                      {/* Title */}
                      <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        {phase.title}
                      </h4>

                      {/* Description */}
                      {phase.items ? (
                        <div className="space-y-3">
                          <div className="flex flex-wrap gap-2">
                            {phase.items.map((item, idx) => (
                              <span 
                                key={idx} 
                                className="px-3 py-1.5 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-lg"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {phase.description}
                          </p>
                        </div>
                      ) : (
                        <p className="text-gray-400 leading-relaxed">
                          {phase.description}
                        </p>
                      )}
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Minimalist Progress Indicator */}
            <div className="mt-20 sm:mt-24">
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10">
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Overall Progress</h4>
                    <p className="text-gray-500 text-sm">2024 • Foundation Phase</p>
                  </div>
                  <div className="text-4xl font-bold text-white">15%</div>
                </div>

                {/* Simple Progress bar */}
                <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden mb-6">
                  <div 
                    className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-1000"
                    style={{ width: '15%' }}
                  ></div>
                </div>

                {/* Simple Milestones */}
                <div className="flex justify-between items-center">
                  {[
                    { year: '2024', active: true },
                    { year: '2026', active: false },
                    { year: '2028', active: false },
                    { year: '2030+', active: false }
                  ].map((milestone, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-sm font-bold ${
                        milestone.active ? 'text-white' : 'text-gray-600'
                      }`}>
                        {milestone.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default About
