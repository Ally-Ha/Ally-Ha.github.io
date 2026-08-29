import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Athletes Development Journal',
    company: 'Self Employed',
    location: 'Remote - currently in NZ',
    period: 'Nov. 2024 - ongoing',
    description: 'Researched, Designed and Co-Built a scientific sportpsychological journal for athletes. The journal is currently in the process of being published and will be available in 2026.',
    skills: ['Project Management', 'Marketing', 'Website Development', 'Publishing'],
  },
  {
    title: 'Student Clinical Research Assistant',
    company: 'Medical University of Graz',
    location: 'Graz, Austria',
    period: 'Sept. 2023 — Dec. 2024',
    description: 'Assisted in research projects about CBASP and Positive Psychology. Conducted literature reviews, data collection, and preliminary analysis. Collaborated with a team of researchers to prepare findings for publication.',
    skills: ['Project Management', 'Data Analysis', 'Literature Review', 'Research Collaboration', 'Scientific Writing', 'Clinical Study Management'],
  },
  {
    title: 'Research Intern',
    company: 'IDea Lab University of Graz',
    location: 'Graz, Austria',
    period: 'Feb. - Aug. 2023',
    description: 'Developed a Research Design about Decision Making in Triage Situations from a psychological perspective, using AI.',
    skills: ['Research Design', 'Psychological Perspective', 'AI Ethics'],
  },
  {
    title: 'Head of Business Administration',
    company: 'Groundwork GmbH',
    location: 'Graz, Austria',
    period: 'March 2021- Mai 2023',
    description: 'Managed business operations, including financial planning, marketing strategies, and client relations. Held Workshops and Coachings in Team Development, Leadership Development and Sport Psychology',
    skills: ['Financial Planning', 'Marketing', 'Client Relations', 'Team Development', 'Leadership Coaching', 'Sport Psychology'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Career</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          WORK<br />EXPERIENCE
        </motion.h2>

        {/* Experiences */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-12 lg:py-16 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Title & Company */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {exp.location}
                  </p>
                </div>

                {/* Middle Column - Period */}
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">
                    {exp.period}
                  </p>
                </div>

                {/* Right Column - Description & Skills */}
                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
