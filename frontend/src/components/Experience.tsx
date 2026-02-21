import { motion } from 'framer-motion'
import { useInView } from './useInView'
import { Building2, Calendar } from 'lucide-react'

const experiences = [
  {
    title: "Software Developer Intern",
    company: "BlueStock Fintech",
    period: "Feb 2025 - Mar 2025",
    description: [
      "Developed responsive and reusable UI components using React.js for fintech dashboards",
      "Converted Figma designs into production-ready code",
      "Integrated backend REST APIs and resolved bugs through debugging",
      "Maintained version control standards using Git"
    ],
    technologies: ["React.js", "REST APIs", "Git", "Figma"],
    type: "Frontend Development"
  },
  {
    title: "Software Developer Intern",
    company: "Premier Measurement Solutions",
    period: "Apr 2025 - May 2025",
    description: [
      "Optimized 3 C++ MultiATE factory systems",
      "Supported barcode programming and calibration workflow",
      "Debugged and resolved cross-module integration issues related to NVRAM data handling",
      "Improved memory integrity and system stability in 5+ production modules"
    ],
    technologies: ["C++", "NVRAM", "Factory Systems", "Debugging"],
    type: "Systems Development"
  }
]

export default function Experience() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-accent-primary mb-4 tracking-wider uppercase">Experience</h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 w-px h-full bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary transform md:-translate-x-1/2" />

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute top-6 w-4 h-4 bg-accent-primary rounded-full border-4 border-dark-900 ${
                index % 2 === 0 ? 'left-[-8px] md:left-auto md:right-[-8px]' : 'left-[-8px]'
              }`}>
                <div className="absolute inset-0 bg-accent-primary rounded-full animate-ping opacity-25" />
              </div>

              {/* Card */}
              <div className="glass rounded-xl p-6 ml-6 md:ml-0 card-hover">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-accent-primary/20 text-accent-primary text-xs rounded-full mb-2">
                      {exp.type}
                    </span>
                    <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                  </div>
                </div>

                {/* Company & Period */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Building2 size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-accent-primary mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-700 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
