import { motion } from 'framer-motion';




import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Beyond() {
  return (
    <section id="beyond-work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Beyond Work</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src='beyond.jpeg'
              alt="for me productivity correlates with coffe consumption."
              className="w-full h-auto img-editorial"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              Happy Place: Outside, on my bicycle. This was me after Vätternrundan, a 300km cycling event in Sweden.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I enjoy most of my free time outdoors, exploring nature by cycling, hiking or running. 
              I already completed a few long-distance cycling tours, including 2 month from Munich to the North Cape in Norway, 
              and a 2 month trip from Belgium, via the GB-Divide to the Shetland Islands. On the more competitive side, I have finished the Three Peakes Bike Race in 2024. It is a ultra-cycling roadcycling race from Vienna to Nizza (2.500 km, 44.000 moe, in 10 days).
              When the weather is not ideal, I love to knit or play some good board games with friends.
             
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
