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
              className="w-full h-auto grayscale"
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
              Hi there! 
              I am Alina, a psychologist trying to figure out how to combine psychology, sport and AI.
              
              I studied Psychology (B.Sc. and M.Sc.) at the University of Graz in Austria.
              
              After the AI hype began, I became increasingly interested in AI 
              and decided to learn more about it.
              So that's why I started (and more importantly finished) a second 2-year master&apos;s degree 
              in Artificial Intelligence for Health at the Stockholm University in Sweden.

              Both my Master Thesis were already focused on the intersection of psychology and AI, 
              and I had the great opportunity to work with some amazing researchers in the field of AI and psychology.
              For my M.Sc. in Psychology, my supervisor was Prof. Dr. Guilherme Wood,
              and for my M.Sc. in AI for Health, my supervisors were Zack Hui (Cambridge University) and Prof. Isak Samsten (Stockholm University).

              Now, I am on a mission to build a bridge between 
              psychology, sport, and AI 
              while communicating scientific knowledge to the public.
              I am also interested in the ethical implications of AI 
              and how it can be used to improve mental health and well-being.
              Right now, I am self-employed working on my two projects (Athlete's Development Journal)
              and the Ps[ai]chology Project, but I am planning to start a PhD in the field of AI for Mental Health in summer 2027.

            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
