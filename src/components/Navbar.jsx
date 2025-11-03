import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MetasetiLogo from '../assets/MetasetiDarkBG.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const { scrollY } = useScroll()
  
  const navbarY = useTransform(scrollY, [0, 100], [0, -5])
  const navbarBlur = useTransform(scrollY, [0, 100], [8, 20])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['about', 'services', 'portfolio', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      // Set to null if no section is found (Hero section)
      setActiveSection(current || null)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About' },
    { name: 'Services' },
    { name: 'Portfolio' },
    { name: 'Contact' }
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ y: navbarY }}
        className="fixed top-0 w-full z-50 flex justify-center px-4 lg:px-6 pt-6"
      >
        <motion.div
          animate={{ 
            scale: isScrolled ? 0.98 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl"
        >
          {/* Gradient Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-gray-400/20 to-white/20 rounded-[20px] blur-sm opacity-50"></div>
          
          {/* Main Navbar Container */}
          <div className="relative bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Animated Background Gradient */}
            <motion.div 
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative flex items-center justify-between px-4 lg:px-8 py-4">
              
              {/* Logo - Your Custom Image */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center cursor-pointer flex-shrink-0"
              >
                <motion.img
                  src={MetasetiLogo}
                  alt="Metaseti Digital Indonesia"
                  className="h-12 w-260 object-contain"
                  whileHover={{ filter: "brightness(1.1)" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              {/* Desktop Navigation Links - Centered */}
              <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-1 bg-white/5 rounded-xl p-1.5 backdrop-blur-sm border border-white/10">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.name.toLowerCase()
                    return (
                      <motion.a
                        key={item.name}
                        href={`#${item.name.toLowerCase()}`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-5 py-2.5 rounded-lg font-medium transition-all duration-300 whitespace-nowrap text-sm ${
                          isActive 
                            ? 'text-black' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-white rounded-lg shadow-lg"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        <span className="relative z-10">{item.name}</span>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* CTA Button - Enhanced */}
              <div className="hidden lg:block flex-shrink-0">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group bg-white text-black px-6 py-2.5 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg overflow-hidden flex items-center space-x-2 text-sm"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10">Start Project</span>
                  <motion.span 
                    className="relative z-10"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>

              {/* Mobile Menu Button - Enhanced */}
              <div className="lg:hidden flex-shrink-0">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative text-white p-2.5 rounded-xl hover:bg-white/10 transition-all duration-200 border border-white/10"
                >
                  <motion.div
                    animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {isMobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
                  </motion.div>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu - Enhanced */}
            <motion.div
              initial={false}
              animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-white/10"
            >
              <div className="py-4 space-y-2 px-4 bg-black/30 backdrop-blur-sm">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.name.toLowerCase()
                  return (
                    <motion.a
                      key={item.name}
                      href={`#${item.name.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all duration-200 font-medium ${
                        isActive 
                          ? 'bg-white text-black shadow-lg' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto w-2 h-2 bg-black rounded-full"
                        />
                      )}
                    </motion.a>
                  )
                })}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full bg-white text-black py-3 px-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 mt-4 shadow-lg"
                >
                  <span>Start Project</span>
                  <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Glow Effect */}
          <motion.div 
            className="absolute -bottom-px left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
    </>
  )
}

export default Navbar