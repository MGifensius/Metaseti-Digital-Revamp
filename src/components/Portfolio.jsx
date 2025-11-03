import React, { useState } from 'react'

//Image Thumbnail and Icon
import ECommerceThumbnail from '../assets/ECommerce.jpg'
import InventoryThumbnail from '../assets/Inventory.jpg'
import ManufacturingThumbnail from '../assets/Manufacturing.jpg'
import AIAgentsThumbnail from '../assets/AIAgents.jpg'
import BrandingThumbnail from '../assets/BrandingConcept.jpg'
import BrandingMockup from '../assets/BrandingMockup.png'
import ERPThumbnail from '../assets/ERPConcept.jpg'

// Mac Window Component - Simplified
const MacWindow = ({ children, title = "Demo" }) => {
  return (
    <div className="bg-gray-800 rounded-lg md:rounded-xl overflow-hidden shadow-2xl border border-gray-700 mx-2 md:mx-0">
      {/* Mac Window Header */}
      <div className="bg-gray-900 px-3 md:px-4 py-2 md:py-3 flex items-center gap-2 border-b border-gray-700">
        <div className="flex gap-1 md:gap-2">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center min-w-0">
          <div className="inline-flex items-center gap-1 md:gap-2 bg-gray-800 rounded-lg px-2 md:px-4 py-1 text-xs md:text-sm max-w-full">
            <svg className="w-2 h-2 md:w-3 md:h-3 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-gray-400 font-medium truncate">{title}</span>
          </div>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>
      {/* Window Content */}
      <div className="bg-white">
        {children}
      </div>
    </div>
  )
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (selectedProject) {
      closeProject()
    }
  }

  const projects = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      category: "Custom Development + AI",
      tags: ["AI/ML", "E-commerce", "Full Stack"],
      thumbnail: ECommerceThumbnail,
      color: "from-blue-500/20 to-purple-500/20",
      icon: ECommerceThumbnail,
      overview: "Transform your online store with intelligent AI that learns from every customer interaction. Our platform doesn't just sell products—it creates personalized shopping journeys that convert browsers into loyal customers.",
      challenge: "E-commerce businesses lose 70% of potential sales due to generic experiences, poor product discovery, and cart abandonment. Traditional platforms treat every customer the same, missing countless opportunities for conversion.",
      solution: "Our AI analyzes customer behavior in real-time, predicting what they want before they search. Smart recommendations increase basket size by 35%, while predictive inventory prevents stockouts during peak demand.",
      technologies: ["React", "Node.js", "TensorFlow", "PostgreSQL", "AWS", "Redis"],
      features: [
        "AI-powered product recommendations that evolve with each interaction",
        "Predictive inventory management preventing $200K+ in lost sales annually",
        "Real-time personalization engine adapting to customer behavior",
        "Advanced analytics showing exactly what drives your sales",
        "Smart search with natural language understanding"
      ],
      results: [
        { metric: "250%", label: "Increase in Conversions" },
        { metric: "40%", label: "Reduction in Cart Abandonment" },
        { metric: "3.5x", label: "Higher Customer Retention" }
      ],
      demoType: "ecommerce"
    },
    {
      id: 2,
      title: "Inventory Management System",
      category: "Supply Chain & Operations",
      tags: ["Inventory", "Automation", "Real-time"],
      thumbnail: InventoryThumbnail,
      color: "from-emerald-500/20 to-green-500/20",
      icon: InventoryThumbnail,
      overview: "Stop losing money to stockouts and overstock. Our intelligent inventory system uses AI to predict demand, automate reordering, and optimize warehouse operations—cutting costs by 35% while improving fulfillment speed.",
      challenge: "Businesses waste $1.1 trillion annually on inventory inefficiencies. Manual tracking leads to stockouts during peak demand, excess inventory tying up capital, and countless hours spent on spreadsheets instead of growth.",
      solution: "Real-time inventory tracking across all locations with AI-powered demand forecasting. Automatic reorder points prevent stockouts, while smart alerts notify you before issues become costly problems.",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "IoT Sensors", "ML Models"],
      features: [
        "Real-time stock tracking across unlimited locations",
        "AI demand forecasting with 95% accuracy",
        "Automated reorder point management",
        "Smart alerts for low stock, expiring items, and anomalies",
        "Mobile app for on-the-go warehouse management"
      ],
      results: [
        { metric: "35%", label: "Reduction in Carrying Costs" },
        { metric: "90%", label: "Fewer Stockouts" },
        { metric: "50%", label: "Faster Order Fulfillment" }
      ],
      demoType: "inventory"
    },
    {
      id: 3,
      title: "Smart IoT Manufacturing System",
      category: "IoT & Digital Engineering",
      tags: ["IoT", "Industry 4.0", "Automation"],
      thumbnail: ManufacturingThumbnail,
      color: "from-cyan-500/20 to-blue-500/20",
      icon: ManufacturingThumbnail,
      overview: "Transform your factory into an intelligent, self-optimizing production powerhouse. Our IoT solution predicts equipment failures before they happen, reduces downtime by 45%, and increases productivity by 30%—paying for itself in 6 months.",
      challenge: "Unexpected equipment failures cost manufacturers $50 billion annually. Without real-time visibility, you're constantly firefighting problems instead of preventing them, losing precious production time and customer trust.",
      solution: "Thousands of sensors create a digital twin of your factory, monitoring every machine in real-time. AI predicts failures 48 hours in advance, automated alerts notify technicians, and smart scheduling optimizes production flow.",
      technologies: ["Azure IoT", "MQTT", "Edge Computing", "React", "InfluxDB", "Python"],
      features: [
        "Real-time equipment monitoring with predictive maintenance",
        "Automated quality control using computer vision",
        "Production optimization algorithms maximizing output",
        "Energy consumption tracking reducing costs by 25%",
        "Digital twin simulation for testing changes before implementation"
      ],
      results: [
        { metric: "45%", label: "Reduction in Downtime" },
        { metric: "30%", label: "Increase in Productivity" },
        { metric: "25%", label: "Energy Cost Savings" }
      ],
      demoType: "iot"
    },
    {
      id: 4,
      title: "Autonomous AI Agents",
      category: "AI & Machine Learning",
      tags: ["AI Agents", "Automation", "NLP"],
      thumbnail: AIAgentsThumbnail,
      color: "from-violet-500/20 to-purple-500/20",
      icon: AIAgentsThumbnail,
      overview: "Deploy intelligent AI agents that work 24/7 handling customer inquiries, processing orders, scheduling appointments, and managing workflows—freeing your team to focus on what humans do best: building relationships and solving complex problems.",
      challenge: "Your team spends 60% of their time on repetitive tasks: answering FAQs, data entry, scheduling, and basic problem-solving. This drains productivity, delays response times, and prevents focus on high-value work that drives growth.",
      solution: "Our autonomous AI agents understand context, learn from interactions, and handle complex workflows independently. They integrate with your existing tools, escalate to humans when needed, and get smarter every day through continuous learning.",
      technologies: ["GPT-4", "LangChain", "Python", "FastAPI", "Vector DB", "Webhook Integration"],
      features: [
        "Natural language understanding for human-like conversations",
        "Multi-channel deployment (chat, email, voice, SMS)",
        "Workflow automation handling end-to-end processes",
        "Smart escalation to human agents for complex issues",
        "Continuous learning improving accuracy over time"
      ],
      results: [
        { metric: "80%", label: "Task Automation Rate" },
        { metric: "24/7", label: "Availability" },
        { metric: "65%", label: "Cost Reduction" }
      ],
      demoType: "aiagent"
    },
    {
      id: 5,
      title: "Visual Identity & Brand Image",
      category: "Branding & Marketing",
      tags: ["Branding", "Design", "Strategy"],
      thumbnail: BrandingThumbnail,
      color: "from-pink-500/20 to-rose-500/20",
      icon: BrandingThumbnail,
      overview: "Your brand is your most valuable asset. We create distinctive visual identities that don't just look beautiful—they command attention, build trust, and drive premium pricing. Our clients see 300% growth in brand recognition within 12 months.",
      challenge: "In crowded markets, invisible brands die. Generic design makes you forgettable. Inconsistent branding across channels confuses customers and destroys trust. Your competitors with strong brands capture the premium customers you deserve.",
      solution: "We craft comprehensive brand systems that tell your story across every touchpoint. From logo to color psychology to typography, every element is strategically designed to position you as the premium choice in your market.",
      technologies: ["Adobe Creative Suite", "Figma", "Brand Guidelines", "Style System", "Motion Design"],
      features: [
        "Complete visual identity system with logo, colors, typography",
        "Brand strategy and positioning framework",
        "Marketing collateral templates for consistent application",
        "Digital asset library with brand guidelines",
        "Social media templates and content strategy"
      ],
      results: [
        { metric: "300%", label: "Growth in Brand Recognition" },
        { metric: "85%", label: "Increase in Engagement" },
        { metric: "45%", label: "Higher Premium Pricing" }
      ],
      demoType: "branding"
    },
    {
      id: 6,
      title: "ERP Software Solution",
      category: "Enterprise Systems",
      tags: ["ERP", "Integration", "Automation"],
      thumbnail: ERPThumbnail,
      color: "from-orange-500/20 to-amber-500/20",
      icon: ERPThumbnail,
      overview: "Unify your entire business into one intelligent system. Our ERP eliminates data silos, automates workflows, and gives you real-time visibility across finance, inventory, HR, and operations—driving 40% efficiency gains and ROI in under 18 months.",
      challenge: "Disconnected systems create chaos: manual data entry errors, duplicate work, delayed reporting, and zero visibility into your business health. You're making critical decisions with outdated information, losing opportunities every day.",
      solution: "A fully integrated ERP platform where every department works from the same real-time data. Finance sees inventory costs instantly, operations updates sales automatically, and executives get live dashboards showing business health at a glance.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Microservices", "REST APIs"],
      features: [
        "Complete financial management with real-time reporting",
        "Integrated inventory and supply chain management",
        "HR and payroll automation with self-service portal",
        "CRM integration connecting sales to fulfillment",
        "Custom workflows automating your unique processes"
      ],
      results: [
        { metric: "40%", label: "Operational Efficiency Gain" },
        { metric: "50%", label: "Reduction in Manual Errors" },
        { metric: "$500K+", label: "Annual Cost Savings" }
      ],
      demoType: "erp"
    }
  ]

  const openProject = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section id="portfolio" className="min-h-screen py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header - No animations */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Portfolio</h2>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Explore our showcase of transformative digital solutions. Click on any project 
            to see detailed case studies, live demos, and the measurable impact we've delivered.
          </p>
        </div>

        {/* Projects Grid - Removed all Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-white/30 transition-colors duration-300">
                {/* Thumbnail */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                  <img 
                    src={project.icon} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-2 md:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <p className="text-white font-semibold text-sm md:text-base">View Case Study</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-3">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 md:px-3 py-1 bg-white/10 text-gray-300 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-gray-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal - Simplified animations */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
          onClick={closeProject}
        >
          <div className="min-h-screen py-4 md:py-8 px-2 md:px-4">
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-7xl mx-auto bg-gray-900 rounded-lg md:rounded-2xl overflow-hidden border border-gray-800"
            >
              {/* Close Button */}
              <button
                onClick={closeProject}
                className="fixed md:absolute top-4 right-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors shadow-lg border border-gray-700"
                aria-label="Close"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Project Header */}
              <div className={`relative bg-gradient-to-br ${selectedProject.color} p-6 md:p-12`}>
                <div className="max-w-4xl">
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                    {selectedProject.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs md:text-sm px-2 md:px-4 py-1 md:py-1.5 bg-white/20 text-white rounded-full backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6">
                    {selectedProject.category}
                  </p>
                  <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>
              </div>

              {/* Live Demo Section */}
              <div className="p-4 md:p-8 bg-gradient-to-br from-gray-900 to-gray-800">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {selectedProject.demoType === 'branding' ? 'Design Mockup Showcase' : 'Interactive Live Demo'}
                </h3>
                <MacWindow title={`${selectedProject.title} - ${selectedProject.demoType === 'branding' ? 'Design Showcase' : 'Interactive Demo'}`}>
                  <DemoComponent type={selectedProject.demoType} />
                </MacWindow>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8">
                {/* Challenge */}
                <div className="bg-gray-800/50 rounded-xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    The Challenge
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{selectedProject.challenge}</p>
                </div>

                {/* Solution */}
                <div className="bg-gray-800/50 rounded-xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Our Solution
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Technologies & Features */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8">
                {/* Technologies */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 md:px-4 py-1 md:py-2 bg-white/10 text-white rounded-lg text-xs md:text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Key Features</h3>
                  <ul className="space-y-1 md:space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm md:text-base">
                        <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div className="p-4 md:p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-8 text-center">Project Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                  {selectedProject.results.map((result, idx) => (
                    <div key={idx} className="text-center p-4 md:p-6 bg-white/5 rounded-xl border border-gray-700">
                      <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">{result.metric}</div>
                      <div className="text-gray-400 text-xs md:text-sm">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-4 md:p-8 text-center bg-gray-800/30">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-gray-400 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
                  Let's discuss how we can deliver similar results for your organization with proven, revenue-driving solutions.
                </p>
                <button 
                  onClick={scrollToContact}
                  className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-base md:text-lg w-full md:w-auto"
                >
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

// Demo Components - Removed Framer Motion
const DemoComponent = ({ type }) => {
  switch (type) {
    case 'ecommerce':
      return <EcommerceDemo />
    case 'inventory':
      return <InventoryDemo />
    case 'iot':
      return <IoTDemo />
    case 'aiagent':
      return <AIAgentDemo />
    case 'branding':
      return <BrandingDemo />
    case 'erp':
      return <ERPDemo />
    default:
      return null
  }
}

// E-commerce Demo - Simplified
const EcommerceDemo = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [recommendations, setRecommendations] = useState([])

  const products = [
    { id: 1, name: "Premium Wireless Headphones", price: 299, category: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80" },
    { id: 2, name: "Smart Fitness Watch", price: 399, category: "Wearables", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
    { id: 3, name: "Portable Bluetooth Speaker", price: 149, category: "Audio", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80" },
    { id: 4, name: "Wireless Earbuds Pro", price: 249, category: "Audio", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80" }
  ]

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    const recs = products.filter(p => p.id !== product.id && p.category === product.category)
    setRecommendations(recs)
  }

  return (
    <div className="p-4 md:p-8 min-h-64 md:min-h-96 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-2 mb-1 md:mb-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <h4 className="text-gray-900 font-bold text-base md:text-lg">AI-Powered Product Discovery</h4>
        </div>
        <p className="text-gray-600 text-xs md:text-sm">Click any product to see intelligent, real-time recommendations</p>
      </div>
      
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 mb-4 md:mb-6">
        {products.map(product => (
          <button
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="bg-white hover:bg-gray-50 rounded-lg md:rounded-xl p-2 md:p-4 transition-colors shadow-md hover:shadow-xl border-2 border-transparent hover:border-blue-400"
          >
            <div className="aspect-square mb-1 md:mb-3 rounded-lg overflow-hidden bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-gray-900 text-xs md:text-sm font-semibold mb-1 line-clamp-2 text-left">{product.name}</div>
            <div className="text-blue-600 font-bold text-sm md:text-lg">${product.price}</div>
            <div className="text-xs text-gray-500 mt-1 text-left">{product.category}</div>
          </button>
        ))}
      </div>

      {selectedProduct && (
        <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-xl border border-blue-200">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h5 className="text-gray-900 font-bold text-base md:text-lg flex items-center gap-1 md:gap-2">
              <span className="text-xl md:text-2xl">✨</span>
              AI Recommendations
            </h5>
            <span className="text-xs text-blue-600 bg-blue-100 px-2 md:px-3 py-1 rounded-full font-semibold">
              Real-time AI
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-3 md:mb-4">
            {recommendations.map(rec => (
              <div key={rec.id} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-2 md:p-4 border border-blue-200">
                <div className="aspect-square mb-1 md:mb-2 rounded overflow-hidden bg-white">
                  <img 
                    src={rec.image} 
                    alt={rec.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-gray-900 text-xs md:text-sm font-semibold mb-1 line-clamp-2">{rec.name}</div>
                <div className="text-blue-600 font-bold text-sm md:text-base">${rec.price}</div>
                <div className="flex items-center gap-1 mt-1 md:mt-2">
                  <div className="flex-1 bg-blue-200 rounded-full h-1 md:h-1.5">
                    <div className="bg-blue-600 h-1 md:h-1.5 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <span className="text-xs text-blue-600 font-semibold">92%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 md:p-4 border border-green-200">
            <div className="flex items-center justify-center gap-1 md:gap-2 text-green-700 text-xs md:text-sm">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="font-semibold">+35% Average Basket Size</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Inventory Demo - Simplified (removing motion)
const InventoryDemo = () => {
  const [inventory] = useState([
    { id: 1, name: "Product A", stock: 150, reorder: 50, status: "healthy", trend: "up", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80" },
    { id: 2, name: "Product B", stock: 35, reorder: 50, status: "low", trend: "down", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80" },
    { id: 3, name: "Product C", stock: 280, reorder: 100, status: "healthy", trend: "up", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&q=80" },
    { id: 4, name: "Product D", stock: 15, reorder: 50, status: "critical", trend: "down", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80" }
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'text-green-700 bg-green-100 border-green-300'
      case 'low': return 'text-yellow-700 bg-yellow-100 border-yellow-300'
      case 'critical': return 'text-red-700 bg-red-100 border-red-300'
      default: return 'text-gray-700 bg-gray-100 border-gray-300'
    }
  }

  return (
    <div className="p-4 md:p-8 min-h-64 md:min-h-96 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-2 mb-1 md:mb-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <h4 className="text-gray-900 font-bold text-base md:text-lg">Real-Time Inventory Management</h4>
        </div>
        <p className="text-gray-600 text-xs md:text-sm">Live tracking with AI-powered predictive alerts</p>
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
        <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-6 shadow-lg border-l-4 border-emerald-500">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-600 text-xs mb-1 font-medium">Total Stock</div>
              <div className="text-xl md:text-4xl font-bold text-gray-900">480</div>
              <div className="flex items-center gap-1 text-emerald-600 text-xs mt-1 md:mt-2">
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="font-semibold">↑ 12%</span>
              </div>
            </div>
            <div className="text-3xl md:text-5xl">📦</div>
          </div>
        </div>
        <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-6 shadow-lg border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-600 text-xs mb-1 font-medium">Stockouts</div>
              <div className="text-xl md:text-4xl font-bold text-yellow-600">2</div>
              <div className="text-gray-600 text-xs mt-1 md:mt-2">
                <span className="font-semibold">Next 7 days</span>
              </div>
            </div>
            <div className="text-3xl md:text-5xl">⚠️</div>
          </div>
        </div>
      </div>

      <div className="space-y-2 md:space-y-3">
        {inventory.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div className="flex items-center gap-2 md:gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 md:gap-3 mb-1 md:mb-2 flex-wrap">
                  <span className="text-gray-900 font-bold text-sm md:text-base truncate">{item.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full border font-semibold ${getStatusColor(item.status)}`}>
                    {item.status.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-6 text-xs md:text-sm flex-wrap">
                  <div>
                    <span className="text-gray-500">Stock:</span>
                    <span className="text-gray-900 font-bold ml-1">{item.stock}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Reorder:</span>
                    <span className="text-gray-900 font-bold ml-1">{item.reorder}</span>
                  </div>
                  <div className={item.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}>
                    <span className="font-semibold">{item.trend === 'up' ? '↗ Up' : '↘ Down'}</span>
                  </div>
                </div>
              </div>
              {item.status === 'critical' && (
                <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 md:px-6 py-2 md:py-3 rounded-lg text-xs md:text-sm font-bold transition-colors shadow-md hover:shadow-lg whitespace-nowrap">
                  Auto-Reorder
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 md:mt-6 bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300 rounded-lg md:rounded-xl p-3 md:p-5 shadow-lg">
        <div className="flex items-start gap-2 md:gap-4">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-lg md:text-2xl">
            🤖
          </div>
          <div className="min-w-0">
            <div className="text-purple-900 font-bold text-sm md:text-lg mb-1 md:mb-2">AI Predictive Alert</div>
            <div className="text-purple-800 text-xs md:text-sm leading-relaxed">
              <strong>Product B</strong> will reach critical levels in <strong>3 days</strong> based on current sales velocity.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// IoT Demo - Simplified
const IoTDemo = () => {
  const [machines] = useState([
    { id: 1, name: "Assembly Line A", status: "operational", health: 95, temp: 72, alert: null, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&q=80" },
    { id: 2, name: "CNC Machine B", status: "operational", health: 88, temp: 85, alert: null, image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=200&q=80" },
    { id: 3, name: "Packaging Unit C", status: "warning", health: 65, temp: 95, alert: "High temperature detected", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&q=80" },
    { id: 4, name: "Quality Scanner D", status: "operational", health: 92, temp: 68, alert: null, image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&q=80" }
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational': return 'bg-green-500'
      case 'warning': return 'bg-yellow-500'
      case 'critical': return 'bg-red-500'
      default: return 'bg-gray-400'
    }
  }

  const getHealthColor = (health) => {
    if (health >= 90) return 'text-green-600'
    if (health >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="p-4 md:p-8 min-h-64 md:min-h-96 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-2 mb-1 md:mb-2">
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
          <h4 className="text-gray-900 font-bold text-base md:text-lg">Smart Manufacturing Dashboard</h4>
        </div>
        <p className="text-gray-600 text-xs md:text-sm">Real-time equipment monitoring with predictive maintenance</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-6">
        <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-5 text-center shadow-lg border-t-4 border-green-500">
          <div className="text-gray-600 text-xs font-semibold mb-1 md:mb-2 uppercase tracking-wide">Efficiency</div>
          <div className="text-xl md:text-3xl font-bold text-green-600">94%</div>
          <div className="text-xs text-gray-500 mt-1">Excellent</div>
        </div>
        <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-5 text-center shadow-lg border-t-4 border-blue-500">
          <div className="text-gray-600 text-xs font-semibold mb-1 md:mb-2 uppercase tracking-wide">Active</div>
          <div className="text-xl md:text-3xl font-bold text-gray-900">4/4</div>
          <div className="text-xs text-gray-500 mt-1">Online</div>
        </div>
        <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-5 text-center shadow-lg border-t-4 border-yellow-500">
          <div className="text-gray-600 text-xs font-semibold mb-1 md:mb-2 uppercase tracking-wide">Issues</div>
          <div className="text-xl md:text-3xl font-bold text-yellow-600">1</div>
          <div className="text-xs text-gray-500 mt-1">Attention</div>
        </div>
        <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-5 text-center shadow-lg border-t-4 border-emerald-500">
          <div className="text-gray-600 text-xs font-semibold mb-1 md:mb-2 uppercase tracking-wide">Uptime</div>
          <div className="text-xl md:text-3xl font-bold text-emerald-600">99.2%</div>
          <div className="text-xs text-gray-500 mt-1">Target: 98%</div>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4">
        {machines.map(machine => (
          <div
            key={machine.id}
            className="bg-white rounded-lg md:rounded-xl p-3 md:p-5 shadow-md hover:shadow-xl transition-shadow border border-gray-200"
          >
            <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-4">
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <img src={machine.image} alt={machine.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 md:gap-3 mb-1 md:mb-2 flex-wrap">
                  <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${getStatusColor(machine.status)} animate-pulse shadow-lg`} />
                  <span className="text-gray-900 font-bold text-sm md:text-lg truncate">{machine.name}</span>
                  <span className="text-xs text-gray-600 uppercase tracking-wide font-semibold">{machine.status}</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span className="text-gray-600 text-xs md:text-sm">Health:</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-1 md:h-2 max-w-xs">
                    <div 
                      className={`h-1 md:h-2 rounded-full ${machine.health >= 90 ? 'bg-green-500' : machine.health >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${machine.health}%` }}
                    />
                  </div>
                  <span className={`text-lg md:text-2xl font-bold ${getHealthColor(machine.health)}`}>{machine.health}%</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 md:gap-4 text-xs md:text-sm bg-gray-50 rounded-lg p-2 md:p-4">
              <div className="text-center">
                <div className="text-gray-500 text-xs font-semibold mb-1">Temperature</div>
                <div className={`text-sm md:text-lg font-bold ${machine.temp > 90 ? 'text-red-600' : 'text-gray-900'}`}>
                  {machine.temp}°F
                </div>
              </div>
              <div className="text-center border-l border-r border-gray-200">
                <div className="text-gray-500 text-xs font-semibold mb-1">Vibration</div>
                <div className="text-sm md:text-lg font-bold text-green-600">Normal</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-xs font-semibold mb-1">Output</div>
                <div className="text-sm md:text-lg font-bold text-blue-600">125 u/hr</div>
              </div>
            </div>

            {machine.alert && (
              <div className="mt-2 md:mt-4 bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 rounded-lg p-2 md:p-4 flex items-center gap-2 md:gap-3">
                <div className="text-xl md:text-3xl">⚠️</div>
                <div className="min-w-0">
                  <div className="text-yellow-900 font-bold text-xs md:text-sm">Warning Alert</div>
                  <div className="text-yellow-800 text-xs md:text-sm truncate">{machine.alert}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 md:mt-6 bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 rounded-lg md:rounded-xl p-3 md:p-6 shadow-lg">
        <div className="flex items-start gap-2 md:gap-4">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-lg md:text-2xl">
            🔮
          </div>
          <div className="min-w-0">
            <div className="text-blue-900 font-bold text-sm md:text-lg mb-1 md:mb-2 flex items-center gap-1 md:gap-2">
              Predictive Maintenance
              <span className="text-xs bg-blue-200 text-blue-800 px-1 md:px-2 py-1 rounded-full font-bold">AI</span>
            </div>
            <div className="text-blue-800 text-xs md:text-sm leading-relaxed">
              <strong>Packaging Unit C</strong> shows early signs of bearing wear. Schedule maintenance in <strong>48 hours</strong>.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// AI Agent Demo - Simplified
const AIAgentDemo = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'user', text: 'I need to schedule a product demo for next week', time: '2:30 PM' },
    { id: 2, type: 'agent', text: 'I\'d be happy to help schedule your product demo! I\'ve checked your calendar and have the following slots available next week:', time: '2:30 PM' }
  ])
  const [showSchedule, setShowSchedule] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState(null)

  const timeSlots = [
    { day: 'Monday', time: '10:00 AM', available: true },
    { day: 'Monday', time: '2:00 PM', available: true },
    { day: 'Wednesday', time: '11:00 AM', available: true },
    { day: 'Thursday', time: '3:00 PM', available: true }
  ]

  const handleScheduleDemo = () => {
    setShowSchedule(true)
  }

  const selectSlot = (slot) => {
    setSelectedSlot(slot)
    setMessages([...messages, 
      { id: 3, type: 'agent', text: `Perfect! I've scheduled your product demo for ${slot.day} at ${slot.time}. You'll receive a calendar invitation and reminder 1 hour before. Is there anything else I can help you with?`, time: '2:31 PM' }
    ])
    setShowSchedule(false)
  }

  return (
    <div className="p-4 md:p-8 min-h-64 md:min-h-96 bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-2 mb-1 md:mb-2">
          <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
          <h4 className="text-gray-900 font-bold text-base md:text-lg">Autonomous AI Agent</h4>
        </div>
        <p className="text-gray-600 text-xs md:text-sm">Watch our AI handle complex scheduling autonomously</p>
      </div>

      <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl border border-gray-200 h-64 md:h-96 flex flex-col overflow-hidden">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-4 md:px-6 py-3 md:py-4 flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-lg md:text-xl">
            🤖
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white font-bold text-sm md:text-base">AI Assistant</div>
            <div className="flex items-center gap-1 md:gap-2 text-white/90 text-xs">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-300 rounded-full animate-pulse" />
              <span>Active • 0.3s response</span>
            </div>
          </div>
          <div className="text-white/80 text-xs bg-white/20 px-2 md:px-3 py-1 rounded-full font-semibold">
            24/7
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-2 md:space-y-4 bg-gradient-to-br from-gray-50 to-white">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] rounded-xl md:rounded-2xl p-3 md:p-4 shadow-md ${
                msg.type === 'user' 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}>
                <div className="text-xs md:text-sm leading-relaxed">{msg.text}</div>
                <div className={`text-xs mt-1 md:mt-2 ${msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}

          {showSchedule && (
            <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-5 shadow-xl border-2 border-violet-200">
              <div className="text-gray-900 font-bold text-sm md:text-base mb-3 md:mb-4 flex items-center gap-1 md:gap-2">
                <span className="text-lg md:text-xl">📅</span>
                Available Time Slots
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                {timeSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectSlot(slot)}
                    className="bg-gradient-to-br from-violet-50 to-purple-50 hover:from-violet-500 hover:to-purple-600 border-2 border-violet-200 hover:border-violet-500 text-gray-900 hover:text-white p-3 md:p-4 rounded-lg md:rounded-xl transition-colors shadow-md hover:shadow-lg text-left"
                  >
                    <div className="font-bold text-xs md:text-sm">{slot.day}</div>
                    <div className="text-xs text-gray-600 mt-1">{slot.time}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        {!showSchedule && messages.length === 2 && (
          <div className="p-3 md:p-4 border-t border-gray-200 bg-white">
            <button
              onClick={handleScheduleDemo}
              className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white py-3 md:py-4 rounded-lg md:rounded-xl font-bold transition-colors shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              Show Available Time Slots →
            </button>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6">
        <div className="bg-white rounded-lg md:rounded-xl p-2 md:p-4 text-center shadow-md border-t-4 border-violet-500">
          <div className="text-lg md:text-3xl font-bold text-violet-600">80%</div>
          <div className="text-xs text-gray-600 font-semibold mt-1">Automated</div>
        </div>
        <div className="bg-white rounded-lg md:rounded-xl p-2 md:p-4 text-center shadow-md border-t-4 border-purple-500">
          <div className="text-lg md:text-3xl font-bold text-purple-600">24/7</div>
          <div className="text-xs text-gray-600 font-semibold mt-1">Available</div>
        </div>
        <div className="bg-white rounded-lg md:rounded-xl p-2 md:p-4 text-center shadow-md border-t-4 border-pink-500">
          <div className="text-lg md:text-3xl font-bold text-pink-600">0.3s</div>
          <div className="text-xs text-gray-600 font-semibold mt-1">Response</div>
        </div>
      </div>
    </div>
  )
}

// Branding Demo
const BrandingDemo = () => {
  return (
    <div className="p-4 md:p-8 min-h-64 md:min-h-96 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-2 mb-1 md:mb-2">
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
          <h4 className="text-gray-900 font-bold text-base md:text-lg">Professional Brand Mockup</h4>
        </div>
        <p className="text-gray-600 text-xs md:text-sm">Complete visual identity system with professional design mockups</p>
      </div>

      {/* Mockup Image Display */}
      <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl border border-gray-200">
        <div className="relative w-full bg-gray-50 rounded-lg md:rounded-xl overflow-hidden shadow-2xl">
          <img 
            src={BrandingMockup} 
            alt="Brand Identity Mockup Design"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Mockup Description */}
        <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-3 md:p-4 border border-pink-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white text-lg md:text-xl">
                🎨
              </div>
              <div className="font-bold text-gray-900 text-sm md:text-base">Brand Identity</div>
            </div>
            <p className="text-xs md:text-sm text-gray-700">Complete visual system including logo variations, color palettes, and typography guidelines</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3 md:p-4 border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white text-lg md:text-xl">
                📱
              </div>
              <div className="font-bold text-gray-900 text-sm md:text-base">Multi-Platform</div>
            </div>
            <p className="text-xs md:text-sm text-gray-700">Optimized designs for web, mobile, print, and social media platforms</p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-lg p-3 md:p-4 border border-rose-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-rose-500 rounded-lg flex items-center justify-center text-white text-lg md:text-xl">
                ⭐
              </div>
              <div className="font-bold text-gray-900 text-sm md:text-base">Premium Quality</div>
            </div>
            <p className="text-xs md:text-sm text-gray-700">Professional mockups showcasing your brand in real-world applications</p>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="mt-4 md:mt-6 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200">
        <h5 className="text-gray-900 font-bold text-base md:text-lg mb-3 md:mb-4 text-center">Branding Impact</h5>
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          <div className="text-center p-2 md:p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border border-pink-200">
            <div className="text-2xl md:text-4xl font-bold text-pink-600 mb-1">300%</div>
            <div className="text-xs text-gray-600 font-semibold">Brand Recognition</div>
          </div>
          <div className="text-center p-2 md:p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
            <div className="text-2xl md:text-4xl font-bold text-purple-600 mb-1">85%</div>
            <div className="text-xs text-gray-600 font-semibold">Higher Engagement</div>
          </div>
          <div className="text-center p-2 md:p-4 bg-gradient-to-br from-rose-50 to-orange-50 rounded-lg border border-rose-200">
            <div className="text-2xl md:text-4xl font-bold text-rose-600 mb-1">45%</div>
            <div className="text-xs text-gray-600 font-semibold">Premium Pricing</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ERP Demo - Simplified
const ERPDemo = () => {
  const [activeModule, setActiveModule] = useState('dashboard')

  const modules = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊', color: 'blue' },
    { id: 'finance', name: 'Finance', icon: '💰', color: 'green' },
    { id: 'inventory', name: 'Inventory', icon: '📦', color: 'purple' },
    { id: 'hr', name: 'HR', icon: '👥', color: 'orange' }
  ]

  const dashboardData = {
    revenue: '$1.2M',
    orders: '234',
    inventory: '$450K',
    employees: '47'
  }

  const getModuleColor = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="p-4 md:p-8 min-h-64 md:min-h-96 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="mb-4 md:mb-6">
        <div className="flex items-center gap-2 mb-1 md:mb-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <h4 className="text-gray-900 font-bold text-base md:text-lg">Enterprise Resource Planning</h4>
        </div>
        <p className="text-gray-600 text-xs md:text-sm">Unified business management across all departments</p>
      </div>

      {/* Module Navigation */}
      <div className="flex gap-2 md:gap-3 mb-4 md:mb-6 overflow-x-auto pb-2">
        {modules.map(module => (
          <button
            key={module.id}
            onClick={() => setActiveModule(module.id)}
            className={`flex items-center gap-1 md:gap-3 px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl whitespace-nowrap transition-colors shadow-md ${
              activeModule === module.id
                ? `bg-gradient-to-r ${getModuleColor(module.color)} text-white`
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            <span className="text-lg md:text-xl">{module.icon}</span>
            <span className="text-xs md:text-sm font-bold">{module.name}</span>
          </button>
        ))}
      </div>

      {/* Dashboard Content */}
      <div>
        {activeModule === 'dashboard' && (
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-6 shadow-lg border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-1 md:mb-2">
                  <div className="text-gray-600 text-xs font-bold uppercase tracking-wide">Revenue</div>
                  <div className="text-lg md:text-2xl">💵</div>
                </div>
                <div className="text-xl md:text-3xl font-bold text-gray-900">{dashboardData.revenue}</div>
                <div className="flex items-center gap-1 text-green-600 text-xs mt-1 md:mt-2 font-semibold">
                  <svg className="w-2 h-2 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  ↑ 12.5% MTD
                </div>
              </div>
              <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-6 shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-1 md:mb-2">
                  <div className="text-gray-600 text-xs font-bold uppercase tracking-wide">Orders</div>
                  <div className="text-lg md:text-2xl">📋</div>
                </div>
                <div className="text-xl md:text-3xl font-bold text-gray-900">{dashboardData.orders}</div>
                <div className="text-blue-600 text-xs mt-1 md:mt-2 font-semibold">Active & Processing</div>
              </div>
              <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-6 shadow-lg border-l-4 border-purple-500">
                <div className="flex items-center justify-between mb-1 md:mb-2">
                  <div className="text-gray-600 text-xs font-bold uppercase tracking-wide">Inventory</div>
                  <div className="text-lg md:text-2xl">📦</div>
                </div>
                <div className="text-xl md:text-3xl font-bold text-gray-900">{dashboardData.inventory}</div>
                <div className="text-purple-600 text-xs mt-1 md:mt-2 font-semibold">Optimal Levels</div>
              </div>
              <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-6 shadow-lg border-l-4 border-orange-500">
                <div className="flex items-center justify-between mb-1 md:mb-2">
                  <div className="text-gray-600 text-xs font-bold uppercase tracking-wide">Team</div>
                  <div className="text-lg md:text-2xl">👥</div>
                </div>
                <div className="text-xl md:text-3xl font-bold text-gray-900">{dashboardData.employees}</div>
                <div className="text-orange-600 text-xs mt-1 md:mt-2 font-semibold">3 on Leave</div>
              </div>
            </div>

            <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg border border-gray-200">
              <h5 className="text-gray-900 font-bold text-base md:text-lg mb-3 md:mb-4 flex items-center gap-1 md:gap-2">
                <div className="w-1 h-4 md:h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                Real-Time Activity Feed
              </h5>
              <div className="space-y-2 md:space-y-3">
                {[
                  { action: 'New order #1234 received from Acme Corp', time: '2 min ago', type: 'order', color: 'blue' },
                  { action: 'Invoice #5678 paid - $12,500', time: '15 min ago', type: 'finance', color: 'green' },
                  { action: 'Low stock alert: Product A (15 units)', time: '1 hour ago', type: 'inventory', color: 'yellow' },
                  { action: 'New employee onboarding completed', time: '2 hours ago', type: 'hr', color: 'orange' }
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 md:py-3 px-3 md:px-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                        activity.color === 'blue' ? 'bg-blue-500' :
                        activity.color === 'green' ? 'bg-green-500' :
                        activity.color === 'yellow' ? 'bg-yellow-500' :
                        'bg-orange-500'
                      } shadow-lg`} />
                      <span className="text-gray-800 text-xs md:text-sm font-medium truncate">{activity.action}</span>
                    </div>
                    <span className="text-gray-500 text-xs font-semibold whitespace-nowrap ml-2">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeModule === 'finance' && (
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200">
            <h5 className="text-gray-900 font-bold text-lg md:text-xl mb-4 md:mb-6 flex items-center gap-1 md:gap-2">
              <span className="text-2xl md:text-3xl">💰</span>
              Financial Overview
            </h5>
            <div className="grid grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg md:rounded-xl p-3 md:p-6 border-2 border-green-200">
                <div className="text-gray-700 text-xs md:text-sm font-semibold mb-1 md:mb-2">Accounts Receivable</div>
                <div className="text-xl md:text-4xl font-bold text-green-700">$345K</div>
                <div className="text-xs text-green-600 mt-1 md:mt-2">Due in 30 days</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg md:rounded-xl p-3 md:p-6 border-2 border-red-200">
                <div className="text-gray-700 text-xs md:text-sm font-semibold mb-1 md:mb-2">Accounts Payable</div>
                <div className="text-xl md:text-4xl font-bold text-red-700">$123K</div>
                <div className="text-xs text-red-600 mt-1 md:mt-2">Due in 15 days</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg md:rounded-xl p-3 md:p-6 border-2 border-blue-200">
              <div className="text-sm text-gray-800 mb-2 md:mb-3 font-bold flex items-center justify-between">
                <span>Profit Margin</span>
                <span className="text-lg md:text-2xl text-green-600">68%</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2 md:h-3 shadow-inner">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 md:h-3 rounded-full shadow-md" style={{ width: '68%' }} />
                </div>
              </div>
              <div className="text-xs text-gray-600 mt-1 md:mt-2">Target: 65% • Above Target ✓</div>
            </div>
          </div>
        )}

        {activeModule === 'inventory' && (
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200">
            <h5 className="text-gray-900 font-bold text-lg md:text-xl mb-4 md:mb-6 flex items-center gap-1 md:gap-2">
              <span className="text-2xl md:text-3xl">📦</span>
              Inventory Status
            </h5>
            <div className="space-y-3 md:space-y-4">
              {['Warehouse A - New York', 'Warehouse B - Los Angeles', 'Warehouse C - Chicago'].map((warehouse, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 md:p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg md:rounded-xl border-2 border-purple-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 md:gap-3 min-w-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-base">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="text-gray-900 font-bold text-sm md:text-base truncate">{warehouse}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg md:text-2xl font-bold text-green-600">850</div>
                    <div className="text-xs text-gray-600 font-semibold">In Stock</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeModule === 'hr' && (
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-gray-200">
            <h5 className="text-gray-900 font-bold text-lg md:text-xl mb-4 md:mb-6 flex items-center gap-1 md:gap-2">
              <span className="text-2xl md:text-3xl">👥</span>
              Human Resources
            </h5>
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg md:rounded-xl p-3 md:p-6 border-2 border-green-200">
                <div className="text-gray-700 text-xs md:text-sm font-semibold mb-1 md:mb-2">Attendance Today</div>
                <div className="text-2xl md:text-5xl font-bold text-green-600">94%</div>
                <div className="mt-2 md:mt-3">
                  <div className="flex-1 bg-green-200 rounded-full h-1 md:h-2">
                    <div className="bg-green-600 h-1 md:h-2 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg md:rounded-xl p-3 md:p-6 border-2 border-yellow-200">
                <div className="text-gray-700 text-xs md:text-sm font-semibold mb-1 md:mb-2">Pending Leave</div>
                <div className="text-2xl md:text-5xl font-bold text-yellow-600">5</div>
                <div className="text-xs text-yellow-700 mt-2 md:mt-3 font-semibold">Requires Approval</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Integration Badge */}
      <div className="mt-4 md:mt-6 bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 rounded-lg md:rounded-xl p-3 md:p-6 shadow-lg">
        <div className="flex items-start gap-2 md:gap-4">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-lg md:text-2xl">
            🔗
          </div>
          <div className="min-w-0">
            <div className="text-blue-900 font-bold text-sm md:text-lg mb-1 md:mb-2">Fully Integrated System</div>
            <div className="text-blue-800 text-xs md:text-sm leading-relaxed">
              All modules share <strong>real-time data</strong>. Changes in one module instantly update across the entire system.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio