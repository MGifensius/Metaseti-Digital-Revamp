import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MetasetiLogo from '../assets/MetasetiDarkBG.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const { scrollY } = useScroll()
  
  // Smoother scroll-based transformations
  const navbarY = useTransform(scrollY, [0, 100], [0, -5])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect active section with smoother detection
      const sections = ['about', 'services', 'portfolio', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || null)
    }
    
    // Use requestAnimationFrame for smoother scroll handling
    let ticking = false
    const updateScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <>
      <motion.nav
        style={{ y: navbarY }}
        className={`fixed top-0 w-full z-50 flex justify-center px-4 transition-all duration-[400ms] ease-out ${
          isScrolled ? 'py-2' : 'py-6'
        }`}
      >
        <div className="relative w-full max-w-7xl">
          {/* Main Navbar Container */}
          <motion.div 
            className={`relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-[400ms] ease-out ${
              isScrolled ? 'shadow-lg' : 'shadow-xl'
            }`}
            transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
          >
            <div className="flex items-center justify-between px-6 py-4">
              
              {/* Logo */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center cursor-pointer flex-shrink-0"
              >
                <img
                  src={MetasetiLogo}
                  alt="Metaseti Digital Indonesia"
                  className="h-12 w-auto object-contain"
                />
              </motion.a>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id
                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                        isActive 
                          ? 'text-white' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                          initial={false}
                          transition={{ 
                            type: "spring", 
                            stiffness: 500, 
                            damping: 30,
                            mass: 0.5
                          }}
                        />
                      )}
                    </motion.a>
                  )
                })}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <motion.a
                  href="#contact"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2), 0 5px 10px -5px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 17 
                  }}
                  className="bg-white text-black px-6 py-2.5 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300 text-sm"
                >
                  Start Project
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <motion.svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={isMobileMenuOpen ? { rotate: 90 } : {}}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                  >
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </motion.svg>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
              initial={false}
              animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.34, 1.56, 0.64, 1] // Custom easing for smoother animation
              }}
              className="overflow-hidden lg:hidden border-t border-white/10"
            >
              <div className="py-4 px-6 space-y-3">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id
                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-300 ${
                        isActive 
                          ? 'text-white bg-white/10' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </motion.a>
                  )
                })}
                <motion.a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="block bg-white text-black py-3 px-4 rounded-xl font-medium text-center transition-colors duration-300"
                >
                  Start Project
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        />
      )}
    </>
  )
}

export default Navbar
