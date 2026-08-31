import { motion } from 'framer-motion'

const educationData = [
  {
    degree: 'M.Sc. AI for Health',
    university: 'Stockholm University',
    location: 'Stockholm / Sverige',
    period: '2024 — 2026',
    image: '/Stockholm-MSC.jpg',
    coursework: ['Artificial Intelligence', 'Machine Learning', 'NLP', 'Reinforcement Learning', 'Data Science in Healthcare'],
    thesis: 'Therapy specific Constitutional AI using Acceptance and Commitment Therapy (ACT) Principles',
    supervisors: [
      { name: 'Zack Hui, Cambridge University', url: 'https://www.zackhui.com/' },
      { name: 'Prof. Isak Samsten, Stockholm University', url: 'https://scholar.google.com/citations?user=YZOpzS8AAAAJ&hl=en' }
    ]
  },
  {
    degree: 'M.Sc. Psychology',
    university: 'University of Graz',
    location: 'Graz / Austria',
    period: '2023 — 2025',
    image: '/Graz-MSC.png',
    coursework: ['Cognitive Psychology', 'Clinical Psychology', 'Methods of Psychological Research', 'Advanced Statistics', 'EEG and fMRI Analysis'],
    thesis: 'Sentiment Analysis in Research Abstracts: ChatGPT Generated vs. Human-Written',
    supervisors: [
      { name: 'Prof. Dr. Guilherme Wood', url: 'https://scholar.google.com/citations?user=L7WFhmgAAAAJ&hl=en' }
    ]
  },
  {
    degree: 'B.Sc. Psychology',
    university: 'University of Graz',
    location: 'Graz / Austria',
    period: '2020 — 2023',
    image: '/Graz-BSC.jpeg',
    coursework: ['Social Psychology', 'Biological Psychology', 'General Psychology', 'Statistics', 'Research Methods'],
    thesis: 'Iconic Help for Diabetes! The Influence of Icons and Prior Knowledge on Cognitive Load in Visualizing Health Information Using the Example of Type 2 Diabetes.',
    supervisors: [
      { name: 'Prof. Dr. Sabine Berger', url: 'https://scholar.google.com/citations?user=FnOjwgEAAAAJ&hl=en' }
    ]
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-16 lg:space-y-24">
          {educationData.map((edu, index) => (
            <div key={edu.degree} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
              <motion.div 
                {...fadeInUp}
                className={index === 1 ? 'lg:order-2' : ''}
              >
                <img
                  src={edu.image}
                  alt={`${edu.university} - ${edu.degree}`}
                  className="w-full h-auto img-editorial"
                />
                <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                  {edu.university} - {edu.location}
                </p>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.2 }}
                className={`flex items-center ${index === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="w-full">
                  <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-500 tracking-widest uppercase mb-6">
                    {edu.period}
                  </p>

                  {/* Coursework */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-300 mb-3 tracking-wide">COURSEWORK</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Thesis */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-300 mb-2 tracking-wide">THESIS</h4>
                    <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                      {edu.thesis}
                    </p>
                  </div>

                  {/* Supervisors */}
                  {edu.supervisors.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-3 tracking-wide">SUPERVISORS</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.supervisors.map((supervisor) => (
                          <a
                            key={supervisor.name}
                            href={supervisor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full hover:text-white hover:border-gray-600 transition-colors"
                          >
                            {supervisor.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
