import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { BookOpen, Award, Trophy, Star, FileCheck } from 'lucide-react'

const achievements = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Research Publication",
    description: "The Role of Artificial Intelligence in Market Prediction, Customer Retention, and Churn Modeling",
    details: "Chapter 25 in 'Next Generation Technologies for Sustainable Development'",
    publisher: "Taylor & Francis Publication",
    type: "publication"
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Hackathon Winner",
    description: "AI-Powered Resume Suite",
    details: "Secured 2nd position among 99 teams",
    type: "achievement"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "5★ C++ on HackerRank",
    description: "Achieved highest rating in C++ programming",
    details: "Demonstrates strong algorithmic and OOP skills",
    type: "achievement"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "4★ SQL on HackerRank",
    description: "Achieved high rating in SQL",
    details: "Strong database querying and management skills",
    type: "achievement"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "300+ Problems Solved",
    description: "Competitive Programming",
    details: "Solved across multiple platforms including LeetCode, HackerRank",
    type: "achievement"
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Certifications",
    description: "Python Programming & DSA",
    details: "Professional certifications in core technologies",
    type: "certification"
  }
]

export default function Publications() {
  const { ref, isInView } = useInView()

  return (
    <section id="publications" className="py-24 relative" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-accent-primary mb-4 tracking-wider uppercase">Achievements</h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Publications & <span className="gradient-text">Achievements</span>
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Recognition and accomplishments throughout my journey
          </p>
        </motion.div>

        {/* Featured Publication */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="gradient-border p-8 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="p-4 bg-accent-primary/20 rounded-xl text-accent-primary shrink-0">
                <BookOpen className="w-12 h-12" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-accent-primary/20 text-accent-primary text-xs rounded-full mb-3">
                  Research Publication
                </span>
                <h4 className="text-2xl font-bold text-white mb-2">
                  The Role of Artificial Intelligence in Market Prediction, Customer Retention, and Churn Modeling
                </h4>
                <p className="text-gray-400 mb-4">
                  Published as Chapter 25 in <span className="text-white">"Next Generation Technologies for Sustainable Development"</span>
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-2 text-accent-secondary">
                    <Award size={16} />
                    Taylor & Francis Publication
                  </span>
                  <span className="flex items-center gap-2 text-gray-400">
                    <FileCheck size={16} />
                    Peer Reviewed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.slice(1).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="glass rounded-xl p-6 card-hover"
            >
              <div className={`p-3 rounded-lg inline-block mb-4 ${
                item.type === 'achievement' 
                  ? 'bg-yellow-500/20 text-yellow-400'
                  : 'bg-green-500/20 text-green-400'
              }`}>
                {item.icon}
              </div>
              
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm mb-2">{item.description}</p>
              <p className="text-gray-500 text-xs">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
