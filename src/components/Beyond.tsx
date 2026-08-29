import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Beyond() {
  return (
    <motion.section
      id="beyond-work"
      className="relative overflow-hidden py-20 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_30px_rgba(148,163,184,0.12)] backdrop-blur-sm md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-300/80">
              Beyond work
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">
              Curiosity, creativity, and a life outside the screen.
            </h2>
            <p className="max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
              I enjoy most of my free time outdoors, exploring nature by cycling, hiking or running. 
              I already completed a few long-distance cycling tours, including 2 month from Munich to the North Cape in Norway, 
              and a 2 month trip from Belgium, via the GB-Divide to the Shetland Islands. 
              When the weather is not ideal, I love to knit or play some good board games with friends.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
