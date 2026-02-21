import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { MapPin, GraduationCap, Code, Brain, Trophy, BookOpen } from 'lucide-react'

export default function About() {
  const { ref, isInView } = useInView()

  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "B.Tech CS @ NMIMS",
      description: "8.67 CGPA | 2022-2026"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Developer",
      description: "MERN, Django, FastAPI"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML Engineer",
      description: "LLM Apps, AutoML, PandasAI"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Hackathon Winner",
      description: "2nd among 99 teams"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Published Researcher",
      description: "Taylor & Francis Publication"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Based in India",
      description: "Kota, Rajasthan"
    }
  ]

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-accent-primary mb-4 tracking-wider uppercase">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Get to <span className="gradient-text">Know Me</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a <span className="text-white font-medium">Final-year Computer Science undergraduate</span> with 
                a deep passion for building scalable software solutions and exploring the frontiers of AI/ML.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                With expertise spanning from <span className="text-accent-primary">full-stack development</span> to 
                <span className="text-accent-secondary"> machine learning systems</span>, I've built production-ready 
                applications, automated ML pipelines, and published research in AI applications.
              </p>

              <p className="text-gray-400 leading-relaxed">
                I've gained real-world experience through internships at fintech companies and industrial measurement 
                solutions, working on everything from React dashboards to C++ factory systems. My competitive programming 
                background with <span className="text-white">300+ problems solved</span> has honed my problem-solving skills.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-dark-700 rounded-full text-sm text-gray-300 border border-dark-600">
                  🐍 Python Expert
                </span>
                <span className="px-4 py-2 bg-dark-700 rounded-full text-sm text-gray-300 border border-dark-600">
                  ⚛️ React Developer
                </span>
                <span className="px-4 py-2 bg-dark-700 rounded-full text-sm text-gray-300 border border-dark-600">
                  🤖 AI/ML Enthusiast
                </span>
                <span className="px-4 py-2 bg-dark-700 rounded-full text-sm text-gray-300 border border-dark-600">
                  🏆 Hackathon Winner
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass rounded-xl p-5 card-hover"
              >
                <div className="text-accent-primary mb-3">{item.icon}</div>
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
