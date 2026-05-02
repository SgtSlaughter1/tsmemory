import { Section } from './Section';
import { CONTENT, PROJECTS } from '../data/content';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const ProjectShowcase = () => (
  <Section className="bg-bg-end text-text-dark">
    <div className="w-full max-w-6xl">
      <h2 className="text-h2 font-bold text-center mb-16">The Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-card border border-border-light"
          >
            <div className="h-64 overflow-hidden relative">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <span className="text-xs font-bold px-3 py-1 bg-primary-soft text-primary rounded-full uppercase tracking-tighter">
                  {project.builder}
                </span>
              </div>
              <p className="text-text-muted mb-8">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded uppercase text-gray-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export const Awards = () => (
  <Section className="bg-white text-text-dark">
    <div className="w-full max-w-5xl">
      <h2 className="text-h2 font-bold text-center mb-16 italic text-[#0F172A]">Hall of Fame</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {CONTENT.awards.map((award, i) => {
          const Icon = Icons[award.icon] || Icons.Award;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-mid p-8 rounded-2xl text-center border border-border-light shadow-sm"
            >
              <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                <Icon size={24} />
              </div>
              <h4 className="font-bold text-[#0F172A]">{award.name}</h4>
              {award.recipient && (
                <p className="text-xs text-primary font-bold mt-2 uppercase tracking-widest">
                  {award.recipient}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  </Section>
);

export const FinalMessage = () => (
  <Section className="bg-bg-end text-text-dark text-center">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="relative z-10"
      >
        <h2 className="text-h2 font-bold mb-8 leading-tight text-[#0F172A]">
          {CONTENT.finalMessage.title}
        </h2>
        <p className="text-body text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
          {CONTENT.finalMessage.body}
        </p>
        <div className="flex justify-center gap-4">
          <div className="w-12 h-1 bg-primary rounded-full" />
          <div className="w-12 h-1 bg-accent rounded-full" />
          <div className="w-12 h-1 bg-primary-dark rounded-full" />
        </div>
      </motion.div>
    </div>
    
    {/* Closing Decorative Elements */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary-dark" />
  </Section>
);
