import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from './useInView'
import { Github, ExternalLink, Brain, Code, Layers } from 'lucide-react'

type ProjectCategory = 'all' | 'fullstack' | 'aiml'

interface Project {
  title: string
  description: string
  longDescription: string[]
  technologies: string[]
  category: 'fullstack' | 'aiml'
  github?: string
  live?: string
  image?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Neuro Pilot: AutoML Analysis Pipeline",
    description: "End-to-end automated ML platform with intelligent model selection",
    longDescription: [
      "Automated 100% of the ML pipeline—from dataset search (via Kaggle & Groq APIs) to automated preprocessing, visualizations, and model training",
      "Trained & evaluated multiple models per dataset, performing intelligent best model selection with downloadable results",
      "Engineered full automation system using PandasAI and Groq API for zero-code data preprocessing"
    ],
    technologies: ["Python", "Machine Learning", "Kaggle API", "Groq API", "PandasAI", "AutoML"],
    category: "aiml",
    featured: true
  },
  {
    title: "Online Code Executor with AI Analysis",
    description: "Full-stack code compiler with LLM-based complexity analysis",
    longDescription: [
      "Designed a full-stack Online Code Compiler supporting 4+ languages with automatic language detection",
      "Implemented a code execution engine using Python's subprocess module, enabling input handling and execution",
      "Integrated LLM-based time and space complexity analysis to evaluate user submitted code"
    ],
    technologies: ["Python", "React.js", "LLM Integration", "subprocess", "API"],
    category: "aiml",
    live: "#",
    github: "https://github.com/FlashArk271/IntelliCompiler",
    featured: true
  },
  {
    title: "Seller Admin Product Management Dashboard",
    description: "Full-stack MERN dashboard with OTP authentication",
    longDescription: [
      "Built a full-stack product management dashboard with MERN featuring OTP-based authentication and JWT session management",
      "Implemented secure RESTful APIs for product CRUD operations, and real-time search functionality with role-based access control",
      "Designed a responsive seller dashboard with product categorization, multi-image upload support"
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST API"],
    category: "fullstack",
    live: "#",
    github: "https://github.com/FlashArk271/ProductDashboard",
    featured: true
  },
  {
    title: "Store Review Platform",
    description: "Full-stack store rating platform with role-based access control",
    longDescription: [
      "Built a full-stack store rating platform with role-based access control (Admin, Owner, User) using React.js, Express.js, and MySQL",
      "Implemented REST APIs with features including real-time rating aggregation, and form validation on both sides",
      "Designed secure authentication system with protected routes, token-based sessions, and middleware for role authorization"
    ],
    technologies: ["React.js", "Express.js", "MySQL", "REST API", "JWT", "RBAC"],
    category: "fullstack",
    github: "https://github.com/FlashArk271/StoreRatingWithAdmin"
  },
  {
    title: "AI-Powered Resume Suite",
    description: "Hackathon-winning AI resume builder and analyzer",
    longDescription: [
      "Developed an AI-powered resume suite during a hackathon",
      "Secured 2nd position among 99 teams",
      "Integrated AI capabilities for resume analysis and optimization"
    ],
    technologies: ["Python", "AI/ML", "NLP", "React.js"],
    category: "aiml",
    featured: true
  }
]

const categories = [
  { id: 'all', label: 'All Projects', icon: <Layers size={18} /> },
  { id: 'fullstack', label: 'Full Stack', icon: <Code size={18} /> },
  { id: 'aiml', label: 'AI/ML', icon: <Brain size={18} /> },
]

export default function Projects() {
  const { ref, isInView } = useInView()
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

  const filteredProjects = projects.filter(
    project => activeCategory === 'all' || project.category === activeCategory
  )

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-tertiary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-medium text-accent-primary mb-4 tracking-wider uppercase">Projects</h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of my recent projects in Full Stack Development and AI/ML
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as ProjectCategory)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white'
                  : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`glass rounded-xl overflow-hidden card-hover group ${
                  project.featured ? 'ring-1 ring-accent-primary/30' : ''
                }`}
              >
                {/* Project Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${
                      project.category === 'aiml' 
                        ? 'bg-purple-500/20 text-purple-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.category === 'aiml' ? <Brain size={24} /> : <Code size={24} />}
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-accent-primary transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-accent-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <span className="inline-block px-2 py-1 bg-accent-primary/20 text-accent-primary text-xs rounded mb-3">
                      Featured
                    </span>
                  )}

                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Description Points */}
                  <ul className="space-y-2 mb-4">
                    {project.longDescription.slice(0, 2).map((point, i) => (
                      <li key={i} className="text-gray-500 text-xs flex items-start gap-2">
                        <span className="text-accent-primary mt-0.5">▹</span>
                        <span className="line-clamp-2">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-700 text-gray-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-dark-700 text-gray-400 text-xs rounded">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/FlashArk271"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent-primary/50 rounded-lg text-accent-primary hover:bg-accent-primary/10 transition-all"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
