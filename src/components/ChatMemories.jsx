import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Section } from "./Section";

gsap.registerPlugin(ScrollTrigger);

const SCREENSHOTS = [
  "/screenshots/WhatsApp Image 2026-05-02 at 10.02.20 AM.jpeg",
  "/screenshots/WhatsApp Image 2026-05-02 at 10.02.21 AM (1).jpeg",
  "/screenshots/WhatsApp Image 2026-05-02 at 10.02.21 AM (2).jpeg",
  "/screenshots/WhatsApp Image 2026-05-02 at 10.02.21 AM (3).jpeg",
  "/screenshots/WhatsApp Image 2026-05-02 at 10.02.21 AM.jpeg",
  "/screenshots/WhatsApp Image 2026-05-02 at 10.02.22 AM.jpeg",
  "/screenshots/WhatsApp Image 2026-05-02 at 9.45.03 AM.jpeg",
  "/screenshots/WhatsApp Image 2026-05-02 at 9.46.31 AM.jpeg",
  "/screenshots/WhatsApp Image 2026-05-02 at 9.48.22 AM.jpeg",
  "/screenshots/WhatsApp Image 2026-05-02 at 9.50.22 AM.jpeg",
];

export const ChatMemories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    // Desktop only parallax
    mm.add("(min-width: 768px)", () => {
      const elements = gsap.utils.toArray(".parallax-item");
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed")) || 1;
        gsap.fromTo(el,
          { y: 50 * speed },
          {
            y: -150 * speed,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <Section id="chat" className="bg-[#0B1020] overflow-hidden py-32">
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-h2 font-bold text-white mb-4">Behind the Scenes</h2>
        <p className="text-primary font-bold uppercase tracking-widest text-sm">Late Nights & Group Chat Chaos</p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full max-w-7xl mx-auto px-6"
      >
        {/* Mobile View */}
        <div className="md:hidden flex flex-col gap-12">
          {SCREENSHOTS.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img src={src} alt="" className="w-full h-auto" />
              <div className="p-4 bg-white/[0.02]">
                <span className="text-white/20 text-[8px] font-black tracking-widest uppercase">Novara 11 // Memory</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View: Fixed Visibility */}
        <div className="hidden md:block">
          <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
            {SCREENSHOTS.map((src, i) => {
              const speeds = [0.4, 1.2, 0.8, 1.5, 0.6, 2.0, 1.1, 0.7, 1.3, 0.9];
              return (
                <div 
                  key={i} 
                  data-speed={speeds[i % speeds.length]} 
                  className="parallax-item break-inside-avoid bg-white/5 rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-8"
                >
                  <img 
                    src={src} 
                    className="w-full h-auto grayscale-[30%] hover:grayscale-0 transition-all duration-700" 
                    alt="" 
                  />
                  <div className="p-4 bg-white/[0.02]">
                    <span className="text-white/20 text-[8px] font-black tracking-widest uppercase">Novara 11 // Memory</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative background text */}
      <div className="absolute top-1/2 left-0 w-full text-[20vw] font-black text-white/[0.02] -translate-y-1/2 pointer-events-none select-none whitespace-nowrap overflow-hidden">
        GROUP 11 CHAOS
      </div>
    </Section>
  );
};
