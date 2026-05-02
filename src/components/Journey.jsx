import { Section } from './Section';
import { CONTENT } from '../data/content';
import { motion } from 'framer-motion';

export const Timeline = () => (
  <Section className="bg-white text-[#0F172A]">
    <div className="w-full max-w-4xl">
      <h2 className="text-h2 font-bold text-center mb-20">The Roadmap</h2>
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border-light hidden md:block" />
        
        <div className="space-y-12">
          {CONTENT.timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 text-center md:text-left">
                <div className={`p-8 rounded-2xl ${
                  i < 3 ? 'bg-bg-struggle text-white' : 'bg-bg-mid text-[#0F172A]'
                }`}>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="opacity-70">{item.desc}</p>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full bg-primary relative z-10 shadow-glow-teal hidden md:block" />
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export const FunnyMoments = () => (
  <Section className="bg-bg-struggle text-white">
    <div className="w-full max-w-5xl">
      <h2 className="text-h2 font-bold text-center mb-16">Debug Logs & Late Nights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CONTENT.funnyMoments.map((moment, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
            className="p-8 rounded-xl bg-card-dark border border-border-dark font-mono text-primary-soft shadow-xl"
          >
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-error-red" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <p className="text-lg">"{moment}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);
