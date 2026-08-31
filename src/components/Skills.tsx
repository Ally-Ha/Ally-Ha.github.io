import { motion } from 'framer-motion'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const humanTraits = [
  'Curiosity',
  'Empathy',
  'Critical Thinking',
  'Communication',
  'Adaptability',
  'Collaboration',
]

const skills = [
  { name: 'Listening', examples: 'f.ex.: Active listening, empathetic understanding, ...' },
  { name: 'Statistical Analysis', examples: 'f.ex.: Multivariate analysis, Factor Analysis, ...' },
  { name: 'Methodological Design', examples: 'f.ex.: RCT, experimental protocols, ...' },
  { name: 'Machine Learning', examples: 'f.ex.: NLP, Neural networks, Reinforcement Learning, ...' },
  { name: 'Data Science', examples: 'f.ex.: Data visualization, feature engineering, model evaluation, ...' },
  { name: 'Ethical Considerations in AI for Mental Health', examples: 'f.ex.: RLAIF, Constitutional AI, Ethical AI, ...' },
]

const skillBuckets = [
  {
    label: 'Human Languages I speak',
    items: ['German (native)', 'English (fluent)', 'Swedish (intermediate)'],
  },
  {
    label: 'Computer Languages I use',
    items: ['Python', 'R',],
  },
  {
    label: 'Tools of my everyday work',
    items: ['R Studio', 'GitHub', 'Jupyter Notebook', 'VS Code', 'SPSS', 'Figma', 'Azure'],
  },
  {
    label: 'Fields of interest',
    items: ['Sport Psychology','Psychology & AI', 'Science Communication'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Expertise</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          SKILLS
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h3 className="text-sm text-gray-500 tracking-widest uppercase mb-6">Human Traits</h3>
            <div className="border-t border-gray-800">
              {humanTraits.map((trait, index) => (
                <motion.div
                  key={trait}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-gray-800 py-4"
                >
                  <span className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light">
                    {trait}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm text-gray-500 tracking-widest uppercase mb-6">Skills</h3>
            <div className="border-t border-gray-800">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-b border-gray-800 py-4"
                >
                  <span className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light">
                    {skill.name}
                  </span>
                  <p className="text-xs text-gray-600 mt-2 min-h-5">
                    {skill.examples}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-28">
          <Carousel 
            opts={{ align: 'start', loop: true }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              {skillBuckets.map((bucket) => (
                <CarouselItem key={bucket.label} className="md:basis-1/3">
                  <div className="border-t border-gray-800 pt-5 pb-8">
                    <h3 className="text-lg md:text-xl text-white font-light mb-5">
                      {bucket.label}
                    </h3>
                    <div className="space-y-2">
                      {bucket.items.map((item) => (
                        <p key={item} className="text-sm text-gray-500">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-gray-700 bg-transparent text-gray-300 hover:bg-gray-800" />
            <CarouselNext className="border-gray-700 bg-transparent text-gray-300 hover:bg-gray-800" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
