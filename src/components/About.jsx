import React, { useMemo, useEffect, useRef } from 'react'
import * as THREE from 'three'

const About = () => {
  // Refs for 3D DNA illustration only
  const illustrationCanvasRef = useRef(null)
  const illustrationSceneRef = useRef(null)
  const illustrationCameraRef = useRef(null)
  const illustrationRendererRef = useRef(null)
  const illustrationGroupRef = useRef(null)
  const illustrationAnimationRef = useRef(null)

  const visionContent = {
    title: "Leading Catalyst for Digital Transformation",
    description: "To be Indonesia's leading catalyst for digital transformation, empowering businesses to achieve unprecedented growth through innovative technology solutions and strategic excellence."
  }

  const missionContent = {
    title: "World-Class Solutions, Sustainable Innovation",
    description: "To deliver world-class IT solutions and branding strategies that transform challenges into competitive advantages, fostering sustainable innovation and measurable success for every client."
  }

  const roadmapPhases = useMemo(() => [
    { 
      year: '2026', 
      phase: 'Phase 1',
      title: 'AI Driven Foundation',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-white/20 to-white/5'
    },
    { 
      year: '2028', 
      phase: 'Phase 2',
      title: 'Scale & Productize',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-white/15 to-white/5'
    },
    { 
      year: '2030', 
      phase: 'Phase 3',
      title: '#1 AI-Based Company',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-white/10 to-white/5'
    }
  ], [])

  // 3D Digital DNA Matrix Illustration
  useEffect(() => {
    if (!illustrationCanvasRef.current) return

    const scene = new THREE.Scene()
    scene.background = null
    illustrationSceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      50,
      1,
      0.1,
      1000
    )
    camera.position.set(0, 0, 12)
    camera.lookAt(0, 0, 0)
    illustrationCameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({
      canvas: illustrationCanvasRef.current,
      alpha: true,
      antialias: true
    })
    
    const size = illustrationCanvasRef.current.clientWidth
    renderer.setSize(size, size)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    illustrationRendererRef.current = renderer

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1, 50)
    pointLight.position.set(0, 5, 10)
    scene.add(pointLight)

    const mainGroup = new THREE.Group()
    illustrationGroupRef.current = mainGroup
    scene.add(mainGroup)

    // Create DNA helix - OPTIMIZED
    const helixHeight = 8
    const helixRadius = 1.5
    const turns = 2.5
    const pointsPerTurn = 30
    const totalPoints = turns * pointsPerTurn

    const strand1Points = []
    const strand2Points = []
    const basePairs = []

    // Create two strands of the helix
    for (let i = 0; i < totalPoints; i++) {
      const t = i / totalPoints
      const angle = t * Math.PI * 2 * turns
      const y = (t - 0.5) * helixHeight

      // Strand 1
      const x1 = Math.cos(angle) * helixRadius
      const z1 = Math.sin(angle) * helixRadius
      strand1Points.push(new THREE.Vector3(x1, y, z1))

      // Strand 2 (opposite side)
      const x2 = Math.cos(angle + Math.PI) * helixRadius
      const z2 = Math.sin(angle + Math.PI) * helixRadius
      strand2Points.push(new THREE.Vector3(x2, y, z2))

      // Create base pairs (connecting lines) every few points - REDUCED
      if (i % 6 === 0) {
        const sphereGeometry = new THREE.SphereGeometry(0.08, 6, 6)
        const sphereMaterial = new THREE.MeshPhongMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.9,
          emissive: 0xffffff,
          emissiveIntensity: 0.3
        })
        
        const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial)
        sphere1.position.copy(strand1Points[i])
        mainGroup.add(sphere1)

        const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial.clone())
        sphere2.position.copy(strand2Points[i])
        mainGroup.add(sphere2)

        // Connection line between base pairs
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          strand1Points[i],
          strand2Points[i]
        ])
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.4
        })
        const line = new THREE.Line(lineGeometry, lineMaterial)
        mainGroup.add(line)

        basePairs.push({ sphere1, sphere2, line })
      }
    }

    // Create the helix strands as tubes
    const strand1Curve = new THREE.CatmullRomCurve3(strand1Points)
    const strand2Curve = new THREE.CatmullRomCurve3(strand2Points)

    const tubeGeometry1 = new THREE.TubeGeometry(strand1Curve, Math.floor(totalPoints * 0.8), 0.05, 6, false)
    const tubeGeometry2 = new THREE.TubeGeometry(strand2Curve, Math.floor(totalPoints * 0.8), 0.05, 6, false)

    const tubeMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      shininess: 100,
      emissive: 0xffffff,
      emissiveIntensity: 0.2
    })

    const strand1Mesh = new THREE.Mesh(tubeGeometry1, tubeMaterial)
    const strand2Mesh = new THREE.Mesh(tubeGeometry2, tubeMaterial.clone())

    mainGroup.add(strand1Mesh)
    mainGroup.add(strand2Mesh)

    // Create floating data particles around DNA - REDUCED from 60 to 30
    const particles = []
    for (let i = 0; i < 30; i++) {
      const particleGeometry = new THREE.SphereGeometry(0.04, 6, 6)
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.6 + Math.random() * 0.4
      })
      
      const particle = new THREE.Mesh(particleGeometry, particleMaterial)
      
      const radius = 2.5 + Math.random() * 1.5
      const angle = Math.random() * Math.PI * 2
      const height = (Math.random() - 0.5) * helixHeight
      
      particle.position.x = Math.cos(angle) * radius
      particle.position.y = height
      particle.position.z = Math.sin(angle) * radius
      
      particle.userData.orbitSpeed = 0.001 + Math.random() * 0.002
      particle.userData.angle = angle
      particle.userData.radius = radius
      particle.userData.verticalSpeed = (Math.random() - 0.5) * 0.01
      
      particles.push(particle)
      mainGroup.add(particle)
    }

    // Create outer rings for matrix effect - REDUCED from 4 to 2
    const rings = []
    for (let i = 0; i < 2; i++) {
      const ringGeometry = new THREE.TorusGeometry(2.5 + i * 0.8, 0.01, 8, 32)
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.1 - i * 0.03,
        blending: THREE.AdditiveBlending
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.rotation.x = Math.PI / 2
      ring.position.y = (i - 1) * 2
      ring.userData.speed = 0.001 + i * 0.0002
      rings.push(ring)
      mainGroup.add(ring)
    }

    // Create digital grid lines
    const gridLines = []
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const points = [
        new THREE.Vector3(Math.cos(angle) * 4, -4, Math.sin(angle) * 4),
        new THREE.Vector3(Math.cos(angle) * 4, 4, Math.sin(angle) * 4)
      ]
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.1
      })
      const line = new THREE.Line(lineGeometry, lineMaterial)
      gridLines.push(line)
      mainGroup.add(line)
    }

    const handleIllustrationResize = () => {
      if (!illustrationCanvasRef.current || !illustrationCameraRef.current || !illustrationRendererRef.current) return
      const size = illustrationCanvasRef.current.clientWidth
      illustrationRendererRef.current.setSize(size, size)
    }

    let time = 0
    const animate = () => {
      illustrationAnimationRef.current = requestAnimationFrame(animate)
      time += 0.01

      // Rotate the DNA helix - slower rotation
      mainGroup.rotation.y += 0.003

      // Pulse base pairs - only pulse every other frame for performance
      if (Math.floor(time * 60) % 2 === 0) {
        basePairs.forEach((pair, index) => {
          const scale = 1 + Math.sin(time * 2 + index * 0.3) * 0.2
          pair.sphere1.scale.set(scale, scale, scale)
          pair.sphere2.scale.set(scale, scale, scale)
        })
      }

      // Animate particles orbiting the DNA
      particles.forEach(particle => {
        particle.userData.angle += particle.userData.orbitSpeed
        particle.position.x = Math.cos(particle.userData.angle) * particle.userData.radius
        particle.position.z = Math.sin(particle.userData.angle) * particle.userData.radius
        
        // Vertical movement
        particle.position.y += particle.userData.verticalSpeed
        if (Math.abs(particle.position.y) > helixHeight / 2) {
          particle.userData.verticalSpeed *= -1
        }
      })

      // Rotate rings
      rings.forEach(ring => {
        ring.rotation.z += ring.userData.speed
      })

      if (illustrationRendererRef.current && illustrationSceneRef.current && illustrationCameraRef.current) {
        illustrationRendererRef.current.render(illustrationSceneRef.current, illustrationCameraRef.current)
      }
    }

    window.addEventListener('resize', handleIllustrationResize)
    animate()

    return () => {
      window.removeEventListener('resize', handleIllustrationResize)
      if (illustrationAnimationRef.current) {
        cancelAnimationFrame(illustrationAnimationRef.current)
      }
      if (illustrationRendererRef.current) {
        illustrationRendererRef.current.dispose()
      }
    }
  }, [])

  return (
    <section id="about" className="w-full relative bg-black overflow-hidden">
      
      {/* Header */}
      <div className="relative container mx-auto px-6 py-24 text-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Who We Are
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Metaseti Digital Indonesia is at the forefront of digital innovation, 
            transforming businesses through cutting-edge technology solutions and 
            strategic digital engineering.
          </p>
        </div>
      </div>

      {/* Vision & Mission - Simplified Layout with DNA Illustration */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - 3D DNA Illustration */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Glow background */}
                <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl"></div>
                
                {/* Canvas container */}
                <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                  <canvas
                    ref={illustrationCanvasRef}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Vision & Mission Cards Stacked */}
            <div className="order-1 lg:order-2 space-y-8">
              
              {/* Vision Card */}
              <div className="relative">
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/40 to-white/20 rounded-2xl opacity-75"></div>
                
                <div className="relative bg-black/90 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
                  {/* Small tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-xs font-medium text-white uppercase tracking-wider">Vision</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {visionContent.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {visionContent.description}
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="relative">
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/40 rounded-2xl opacity-75"></div>
                
                <div className="relative bg-black/90 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
                  {/* Small tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                    <span className="text-xs font-medium text-white uppercase tracking-wider">Mission</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {missionContent.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {missionContent.description}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Roadmap Section - Redesigned for Smooth Scrolling */}
      <div className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Roadmap Header */}
            <div className="text-center mb-20">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white">Future Roadmap</h3>
              <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto">
                Our strategic journey towards becoming Indonesia's leading AI-based company.
              </p>
            </div>

            {/* Roadmap Cards - Simple Grid Layout */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {roadmapPhases.map((item, index) => (
                <div key={index} className="relative">
                  {/* Card */}
                  <div className="h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-3xl p-8 overflow-hidden">
                    
                    {/* Year Badge - No Icon */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="text-3xl font-bold text-white">{item.year}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">{item.phase}</div>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-4">
                      {item.title}
                    </h4>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent mb-6"></div>

                    {/* Content */}
                    {index === 0 && (
                      <div className="space-y-4">
                        <p className="text-gray-400 text-sm leading-relaxed">
                          With the rising use of artificial intelligence, it's important for us to familiarize the usage of AI. We will focus on:
                        </p>
                        <div className="space-y-2">
                          {['AI Agents', 'AI Infrastructure', 'AI Consultations', 'AI Products'].map((subItem, idx) => (
                            <div key={idx} className="flex items-center text-gray-400 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-white mr-3"></div>
                              <span>{subItem}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Allowing our customers to utilize AI for automation to its fullest
                        </p>
                      </div>
                    )}

                    {index === 1 && (
                      <p className="text-gray-400 text-sm leading-relaxed">
                        With our services, we are committed to creating a product that allows customers to fully utilize a comprehensive, customizable product to help customers run their business efficiently
                      </p>
                    )}

                    {index === 2 && (
                      <p className="text-gray-400 text-sm leading-relaxed">
                        We are prepared to become the top AI-based company in Indonesia.
                      </p>
                    )}
                  </div>

                  {/* Connection Line (between cards) */}
                  {index < roadmapPhases.length - 1 && (
                    <div className="hidden md:block absolute top-20 -right-4 w-8 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="mt-16">
              <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-3xl p-10 overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">Overall Progress</h4>
                      <p className="text-gray-500 uppercase tracking-wider text-sm">2024 • Foundation Phase</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="text-3xl font-bold text-white">15%</div>
                    </div>
                  </div>

                  <div className="relative w-full h-3 bg-white/5 rounded-full overflow-hidden mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-white via-white/90 to-white/70 rounded-full transition-all duration-1000 shadow-lg shadow-white/50"
                      style={{ width: '15%' }}
                    ></div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { year: '2024', active: true },
                      { year: '2026', active: false },
                      { year: '2028', active: false },
                      { year: '2030+', active: false }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-3 h-3 rounded-full mx-auto mb-3 transition-all duration-500 ${item.active ? 'bg-white shadow-lg shadow-white/50 scale-125' : 'bg-white/20'}`}></div>
                        <span className={`text-sm transition-colors duration-500 ${item.active ? 'text-white font-bold' : 'text-gray-500'}`}>
                          {item.year}
                        </span>
                      </div>
                    ))}
                  </div>
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