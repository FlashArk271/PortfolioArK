import { motion } from 'framer-motion'
import { ChevronDown, Download, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-tertiary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative inline-block"
          >
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden gradient-border p-1">
              <img
                src="/Aryan Photo.png"
                alt="Aryan Khandelwal"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-dark-900 animate-pulse" />
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent-primary font-medium text-sm mb-4 tracking-wider uppercase"
          >
            Welcome to my portfolio
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            I'm{' '}
            <span className="gradient-text">Aryan Khandelwal</span>
          </motion.h1>

          {/* Titles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-6 font-light"
          >
            <span className="text-white font-medium">Full Stack Developer</span>
            <span className="mx-3 text-accent-primary">|</span>
            <span className="text-white font-medium">AI/ML Engineer</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg leading-relaxed"
          >
            Final-year CS undergrad specializing in building production-ready applications 
            with expertise in React, Python, and Machine Learning systems.
            <span className="text-accent-primary"> Published Researcher</span> & 
            <span className="text-accent-secondary"> Hackathon Winner</span>.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-10"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">300+</div>
              <div className="text-sm text-gray-500">Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">8.67</div>
              <div className="text-sm text-gray-500">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">5★</div>
              <div className="text-sm text-gray-500">C++ HackerRank</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">1</div>
              <div className="text-sm text-gray-500">Publication</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="btn-shine px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg font-medium text-white hover:shadow-lg hover:shadow-accent-primary/25 transition-all"
            >
              Get In Touch
            </a>
            <a
              href="/Aryan Khandelwal_Resume.pdf"
              download
              className="px-8 py-3 border border-accent-primary/50 rounded-lg font-medium text-white hover:bg-accent-primary/10 transition-all flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
            <button
              onClick={() => {
                const chatBtn = document.querySelector('[data-chat-toggle]') as HTMLButtonElement
                if (chatBtn) chatBtn.click()
              }}
              className="px-8 py-3 border border-accent-secondary/50 rounded-lg font-medium text-white hover:bg-accent-secondary/10 transition-all flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Chat with AI
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-accent-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="animate-bounce" size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
