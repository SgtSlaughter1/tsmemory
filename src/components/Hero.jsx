import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../data/content';
import gsap from 'gsap';

export const Hero = () => {
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.2
      });
      gsap.from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative bg-bg-start overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary opacity-10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary opacity-5 blur-[100px] rounded-full" />

      <div className="relative z-10">
        <h1 
          ref={headlineRef}
          className="text-hero font-bold mb-6 tracking-tight"
        >
          From <span className="text-gradient-teal">Bugs</span> to <span className="text-white">Builds</span>
        </h1>
        <p 
          ref={subtitleRef}
          className="text-[var(--fs-body)] text-text-soft max-w-2xl mx-auto mb-12 opacity-80"
        >
          {CONTENT.hero.subtitle}
        </p>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-glow-teal transition-all hover:bg-primary-dark"
          onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {CONTENT.hero.cta}
        </motion.button>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-bg-struggle to-transparent opacity-50" />
    </section>
  );
};
