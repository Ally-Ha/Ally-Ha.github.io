import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Alina</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src='me.JPG'
              alt="for me productivity correlates with coffe consumption."
              className="w-full h-auto img-editorial"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              On a single person study, conducted by myself on my self (no bias detected), 
              I can say that productivity correlates positive with coffee consumption.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Hi there! I&apos;m Alina, a psychologist working to bridge psychology, sport, and AI.
            </p>

            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I completed my B.Sc. and M.Sc. in Psychology at the University of Graz, Austria, under
              the supervision of Prof. Dr. Guilherme Wood. Motivated by the growing impact of AI, I
              went on to complete a second, two-year M.Sc. in Artificial Intelligence for Health at
              Stockholm University, Sweden, supervised by Zack Hui (Cambridge University) and Prof.
              Isak Samsten (Stockholm University). Both theses focused on the intersection of
              psychology and AI, giving me the opportunity to collaborate with leading researchers in
              the field.
            </p>

            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Today, I&apos;m on a mission to connect psychology, sport, and AI while making
              scientific knowledge accessible to the public. I&apos;m particularly interested in the
              ethical implications of AI and its potential to support mental health and well-being.
            </p>

            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I&apos;m currently self-employed, working on two ventures: the{" "}
              <em>Athlete&apos;s Development Journal</em> and the <em>Ps[ai]chology Project</em>. I
              plan to begin a PhD in AI, Psychology and Mental Health in summer 2027.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
