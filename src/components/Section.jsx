import { motion } from 'framer-motion';

export const Section = ({ children, className = '', id = '' }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center items-center relative overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
};
