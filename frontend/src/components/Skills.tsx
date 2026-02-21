import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Code, Database, Server, Layout, Brain, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    color: "from-cyan-500 to-teal-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Backend & APIs",
    icon: <Server className="w-5 h-5" />,
    color: "from-teal-500 to-emerald-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    skills: ["Node.js", "Express.js", "FastAPI", "Django", "Flask", "REST APIs"]
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Supabase"]
  },
  {
    title: "AI/ML & LLMs",
    icon: <Brain className="w-5 h-5" />,
    color: "from-rose-500 to-red-500",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
    skills: ["Machine Learning", "LLM Integration", "PandasAI", "Groq API", "OpenAI API"]
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="w-5 h-5" />,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    skills: ["Git", "GitHub", "Vercel", "Render", "Postman", "VS Code"]
  }
]

const coreSkills = [
  { name: "Data Structures & Algorithms", highlight: true },
  { name: "Object-Oriented Programming", highlight: true },
  { name: "Database Management", highlight: false },
  { name: "Operating Systems", highlight: false },
  { name: "Problem Solving", highlight: true },
]

export default function Skills() {
  const { ref, isInView } = useInView()

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-accent-primary mb-4 tracking-wider uppercase">Skills & Technologies</h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing products
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1 }}
              className={`glass rounded-2xl p-6 card-hover border ${category.borderColor}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <span className="text-white">{category.icon}</span>
                </div>
                <h4 className="text-lg font-semibold text-white">{category.title}</h4>
              </div>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default
                      ${category.bgColor} text-gray-200 border ${category.borderColor} hover:border-opacity-60`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core CS Fundamentals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h4 className="text-gray-400 mb-5 text-sm font-medium tracking-wide">Core CS Fundamentals</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {coreSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default
                  ${skill.highlight 
                    ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white border border-blue-500/30' 
                    : 'bg-dark-700/50 text-gray-300 border border-dark-600 hover:border-gray-500'
                  }`}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
