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

  // 3D Digital DNA Matrix Illustration - WITHOUT PARTICLES
  useEffect(() => {
    if (!illustrationCanvasRef.current) {
      console.log('Canvas ref not available')
      return
    }

    console.log('Initializing DNA illustration...')

    const scene = new THREE.Scene()
    scene.background = null
    scene.fog = new THREE.Fog(0x000000, 20, 35)
    illustrationSceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      50,
      1, // Will be updated based on actual canvas size
      0.1,
      1000
    )
    camera.position.set(0, 0, 18)
    camera.lookAt(0, 0, 0)
    illustrationCameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({
      canvas: illustrationCanvasRef.current,
      alpha: true,
      antialias: true
    })
    
    const canvasWidth = Math.max(illustrationCanvasRef.current.clientWidth, 300)
    const canvasHeight = Math.max(illustrationCanvasRef.current.clientHeight, 400)
    console.log('Canvas size:', canvasWidth, 'x', canvasHeight)
    renderer.setSize(canvasWidth, canvasHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    illustrationRendererRef.current = renderer

    // Update camera aspect ratio
    camera.aspect = canvasWidth / canvasHeight
    camera.updateProjectionMatrix()

    // Enhanced Lighting for realism
    const ambientLight = new THREE.AmbientLight(0x2a4858, 0.4)
    scene.add(ambientLight)

    // Key light (cyan-blue)
    const keyLight = new THREE.DirectionalLight(0x00d9ff, 1.2)
    keyLight.position.set(5, 8, 10)
    keyLight.castShadow = true
    scene.add(keyLight)

    // Fill light (purple-pink)
    const fillLight = new THREE.PointLight(0xff00aa, 0.6, 30)
    fillLight.position.set(-5, 3, 5)
    scene.add(fillLight)

    // Rim light (white-cyan)
    const rimLight = new THREE.PointLight(0x88ddff, 0.8, 25)
    rimLight.position.set(0, -5, -8)
    scene.add(rimLight)

    // Back accent light
    const accentLight = new THREE.PointLight(0x4488ff, 0.5, 20)
    accentLight.position.set(0, 8, -5)
    scene.add(accentLight)

    const mainGroup = new THREE.Group()
    illustrationGroupRef.current = mainGroup
    scene.add(mainGroup)

    // Create DNA helix with more detail - SIZED to fit in view
    const helixHeight = 14
    const helixRadius = 3.2
    const turns = 4
    const pointsPerTurn = 40
    const totalPoints = turns * pointsPerTurn

    const strand1Points = []
    const strand2Points = []
    const basePairs = []

    // Create two strands of the helix with higher detail
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

      // Create base pairs with more detail
      if (i % 4 === 0) {
        // Create more realistic nucleotide bases - LARGER
        const baseGeometry = new THREE.SphereGeometry(0.20, 12, 12)
        
        // Alternate colors for base pairs (A-T and G-C)
        const isAT = i % 8 === 0
        const baseColor1 = isAT ? 0x00d9ff : 0xff00aa
        const baseColor2 = isAT ? 0x88ddff : 0xff66cc
        
        const baseMaterial1 = new THREE.MeshPhongMaterial({
          color: baseColor1,
          transparent: true,
          opacity: 0.95,
          shininess: 100,
          specular: 0xffffff
        })
        
        const baseMaterial2 = new THREE.MeshPhongMaterial({
          color: baseColor2,
          transparent: true,
          opacity: 0.95,
          shininess: 100,
          specular: 0xffffff
        })
        
        const base1 = new THREE.Mesh(baseGeometry, baseMaterial1)
        base1.position.copy(strand1Points[i])
        base1.castShadow = true
        mainGroup.add(base1)

        const base2 = new THREE.Mesh(baseGeometry, baseMaterial2)
        base2.position.copy(strand2Points[i])
        base2.castShadow = true
        mainGroup.add(base2)

        // Connection line between base pairs with gradient
        const linePoints = []
        const segments = 8
        for (let j = 0; j <= segments; j++) {
          const t = j / segments
          const point = new THREE.Vector3().lerpVectors(strand1Points[i], strand2Points[i], t)
          linePoints.push(point)
        }
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints)
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0x88ccff,
          transparent: true,
          opacity: 0.5,
          linewidth: 2
        })
        const line = new THREE.Line(lineGeometry, lineMaterial)
        mainGroup.add(line)

        basePairs.push({ base1, base2, line })
      }
    }

    // Create the helix strands as tubes with realistic materials
    const strand1Curve = new THREE.CatmullRomCurve3(strand1Points)
    const strand2Curve = new THREE.CatmullRomCurve3(strand2Points)

    const tubeGeometry1 = new THREE.TubeGeometry(strand1Curve, Math.floor(totalPoints * 1.2), 0.15, 12, false)
    const tubeGeometry2 = new THREE.TubeGeometry(strand2Curve, Math.floor(totalPoints * 1.2), 0.15, 12, false)

    const tubeMaterial1 = new THREE.MeshPhongMaterial({
      color: 0x00bbff,
      transparent: true,
      opacity: 0.9,
      shininess: 120,
      specular: 0xffffff
    })

    const tubeMaterial2 = new THREE.MeshPhongMaterial({
      color: 0xff0099,
      transparent: true,
      opacity: 0.9,
      shininess: 120,
      specular: 0xffffff
    })

    const strand1Mesh = new THREE.Mesh(tubeGeometry1, tubeMaterial1)
    const strand2Mesh = new THREE.Mesh(tubeGeometry2, tubeMaterial2)
    
    strand1Mesh.castShadow = true
    strand2Mesh.castShadow = true

    mainGroup.add(strand1Mesh)
    mainGroup.add(strand2Mesh)

    // Create outer rings for matrix effect with depth - sized to fit
    const rings = []
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.TorusGeometry(4.5 + i * 1.2, 0.03, 12, 48)
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: i === 0 ? 0x00ffff : i === 1 ? 0xff00ff : 0xffffff,
        transparent: true,
        opacity: 0.15 - i * 0.04
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.2
      ring.position.y = (i - 1) * 3.5
      ring.userData.speed = 0.0008 + i * 0.0003
      ring.userData.axis = Math.random() < 0.5 ? 'x' : 'z'
      rings.push(ring)
      mainGroup.add(ring)
    }

    // Create digital grid lines with depth - sized to fit
    const gridLines = []
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const points = [
        new THREE.Vector3(Math.cos(angle) * 7, -7, Math.sin(angle) * 7),
        new THREE.Vector3(Math.cos(angle) * 7, 7, Math.sin(angle) * 7)
      ]
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
      const lineMaterial = new THREE.LineBasicMaterial({
        color: i % 3 === 0 ? 0x00ffff : i % 3 === 1 ? 0xff00ff : 0xffffff,
        transparent: true,
        opacity: 0.08
      })
      const line = new THREE.Line(lineGeometry, lineMaterial)
      gridLines.push(line)
      mainGroup.add(line)
    }

    const handleIllustrationResize = () => {
      if (!illustrationCanvasRef.current || !illustrationCameraRef.current || !illustrationRendererRef.current) return
      const canvasWidth = Math.max(illustrationCanvasRef.current.clientWidth, 300)
      const canvasHeight = Math.max(illustrationCanvasRef.current.clientHeight, 400)
      illustrationCameraRef.current.aspect = canvasWidth / canvasHeight
      illustrationCameraRef.current.updateProjectionMatrix()
      illustrationRendererRef.current.setSize(canvasWidth, canvasHeight)
    }

    let time = 0
    const animate = () => {
      illustrationAnimationRef.current = requestAnimationFrame(animate)
      time += 0.01

      // Rotate the DNA helix smoothly
      mainGroup.rotation.y += 0.002
      mainGroup.rotation.x = Math.sin(time * 0.1) * 0.05

      // Pulse base pairs with realistic breathing effect
      basePairs.forEach((pair, index) => {
        const scale = 1 + Math.sin(time * 2 + index * 0.2) * 0.15
        pair.base1.scale.set(scale, scale, scale)
        pair.base2.scale.set(scale, scale, scale)
      })

      // Rotate rings with variation
      rings.forEach(ring => {
        if (ring.userData.axis === 'z') {
          ring.rotation.z += ring.userData.speed
        } else {
          ring.rotation.x += ring.userData.speed * 0.5
        }
      })

      // Camera subtle movement for depth - reduced since camera is closer
      camera.position.x = Math.sin(time * 0.3) * 0.5
      camera.position.y = Math.cos(time * 0.2) * 0.3
      camera.lookAt(0, 0, 0)

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
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white tracking-tight">
            Who We Are
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-2">
            Metaseti Digital Indonesia is at the forefront of digital innovation, 
            transforming businesses through cutting-edge technology solutions and 
            strategic digital engineering.
          </p>
        </div>
      </div>

      {/* Vision & Mission - Responsive Layout with Center Illustration */}
      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Responsive Grid Layout - DNA hidden on mobile */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-6 items-center lg:items-start">
            
            {/* Vision Card - Stacks first on mobile, left on desktop */}
            <div className="w-full lg:col-span-4 lg:col-start-1 lg:row-start-1 relative z-10">
              <div className="relative">
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/40 to-white/20 rounded-2xl opacity-75 blur-sm"></div>
                
                <div className="relative bg-black/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-7 lg:p-5 border border-white/20">
                  {/* Small tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/30 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white shadow-lg shadow-white/50"></div>
                    <span className="text-xs font-medium text-white uppercase tracking-wider">Vision</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-xl font-bold text-white mb-3">
                    {visionContent.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-base lg:text-sm">
                    {visionContent.description}
                  </p>
                </div>
              </div>
            </div>

            {/* 3D DNA Illustration - Center, Hidden on Mobile */}
            <div className="hidden lg:flex w-full lg:col-span-4 lg:col-start-5 lg:row-span-2 lg:row-start-1 items-center justify-center">
              <div className="relative w-full max-w-[500px] lg:max-w-[600px]">
                {/* Responsive canvas container */}
                <div className="relative w-full mx-auto" style={{ 
                  height: 'clamp(400px, 60vw, 700px)',
                  maxHeight: '700px'
                }}>
                  <canvas
                    ref={illustrationCanvasRef}
                    className="w-full h-full"
                    style={{ display: 'block' }}
                  />
                </div>
              </div>
            </div>

            {/* Mission Card - Stacks second on mobile, right on desktop */}
            <div className="w-full lg:col-span-4 lg:col-start-9 lg:row-start-2 relative z-10">
              <div className="relative">
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/40 to-white/20 rounded-2xl opacity-75 blur-sm"></div>
                
                <div className="relative bg-black/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 md:p-7 lg:p-5 border border-white/20">
                  {/* Small tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/30 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white shadow-lg shadow-white/50"></div>
                    <span className="text-xs font-medium text-white uppercase tracking-wider">Mission</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-xl font-bold text-white mb-3">
                    {missionContent.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-base lg:text-sm">
                    {missionContent.description}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Roadmap Section - Fully Responsive */}
      <div className="relative py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Roadmap Header */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">Future Roadmap</h3>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto px-2">
                Our strategic journey towards becoming Indonesia's leading AI-based company.
              </p>
            </div>

            {/* Roadmap Cards - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
              {roadmapPhases.map((item, index) => (
                <div key={index} className="relative">
                  {/* Card */}
                  <div className="h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 overflow-hidden">
                    
                    {/* Year Badge */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-center gap-3 mb-4 sm:mb-6">
                        <div className="text-2xl sm:text-3xl font-bold text-white">{item.year}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">{item.phase}</div>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                      {item.title}
                    </h4>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent mb-4 sm:mb-6"></div>

                    {/* Content */}
                    {index === 0 && (
                      <div className="space-y-3 sm:space-y-4">
                        <p className="text-gray-400 text-sm leading-relaxed">
                          With the rising use of artificial intelligence, it's important for us to familiarize the usage of AI. We will focus on:
                        </p>
                        <div className="space-y-2">
                          {['AI Agents', 'AI Infrastructure', 'AI Consultations', 'AI Products'].map((subItem, idx) => (
                            <div key={idx} className="flex items-center text-gray-400 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-white mr-3 flex-shrink-0"></div>
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

                  {/* Connection Line (hidden on mobile/tablet, shown on desktop) */}
                  {index < roadmapPhases.length - 1 && (
                    <div className="hidden md:block absolute top-20 -right-4 w-8 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Progress Indicator - Responsive */}
            <div className="mt-12 sm:mt-16">
              <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-1/2 left-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
                    <div className="mb-4 sm:mb-0">
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Overall Progress</h4>
                      <p className="text-gray-500 uppercase tracking-wider text-xs sm:text-sm">2024 • Foundation Phase</p>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-white">15%</div>
                    </div>
                  </div>

                  <div className="relative w-full h-2 sm:h-3 bg-white/5 rounded-full overflow-hidden mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-white via-white/90 to-white/70 rounded-full transition-all duration-1000 shadow-lg shadow-white/50"
                      style={{ width: '15%' }}
                    ></div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 sm:gap-4">
                    {[
                      { year: '2024', active: true },
                      { year: '2026', active: false },
                      { year: '2028', active: false },
                      { year: '2030+', active: false }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-auto mb-2 sm:mb-3 transition-all duration-500 ${item.active ? 'bg-white shadow-lg shadow-white/50 scale-125' : 'bg-white/20'}`}></div>
                        <span className={`text-xs sm:text-sm transition-colors duration-500 ${item.active ? 'text-white font-bold' : 'text-gray-500'}`}>
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
