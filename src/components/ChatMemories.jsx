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
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const cards = containerRef.current.querySelectorAll(".chat-card");

    if (isMobile) {
      // Pinning and Stacking logic for Mobile
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return; // First card is already visible
        tl.fromTo(card, 
          { y: "120vh", rotation: i % 2 === 0 ? 5 : -5 },
          { y: i * 5, rotation: i % 2 === 0 ? 2 : -2, duration: 1 },
          "-=0.5" // Overlap animations slightly
        );
      });
    } else {
      // Data-speed parallax for Desktop
      const images = containerRef.current.querySelectorAll("[data-speed]");
      images.forEach((img) => {
        const speed = parseFloat(img.getAttribute("data-speed")) || 1;
        gsap.fromTo(img,
          { y: 50 * speed },
          {
            y: -150 * speed,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Section id="chat" className="bg-[#0B1020] overflow-hidden min-h-screen" ref={sectionRef}>
      <div className="text-center mb-12 relative z-20 pt-10">
        <h2 className="text-h2 font-bold text-white mb-2">Behind the Scenes</h2>
        <p className="text-primary font-bold uppercase tracking-widest text-xs">
          Late Nights & Group Chat Chaos
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full max-w-4xl mx-auto h-[70vh] flex items-center justify-center"
      >
        {/* Desktop View (Grid) - Hidden on mobile by GSAP logic or CSS */}
        <div className="hidden md:columns-2 lg:columns-3 gap-8 space-y-8 w-full">
          {SCREENSHOTS.map((src, i) => {
            const speeds = [0.4, 1.2, 0.8, 1.5, 0.6, 2.0, 1.1, 0.7, 1.3, 0.9];
            return (
              <div key={i} data-speed={speeds[i % speeds.length]} className="break-inside-avoid bg-white/5 rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-8">
                <img src={src} className="w-full h-auto grayscale-[30%]" alt="" />
              </div>
            );
          })}
        </div>

        {/* Mobile View (Stacking Cards) */}
        <div className="md:hidden relative w-full h-full flex items-center justify-center px-6">
          {SCREENSHOTS.map((src, i) => (
            <div
              key={i}
              className="chat-card absolute w-[85vw] bg-white/5 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
              style={{ zIndex: i }}
            >
              <img
                src={src}
                alt={`Chat memory ${i}`}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent opacity-40" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background text */}
      <div className="absolute top-1/2 left-0 w-full text-[20vw] font-black text-white/[0.02] -translate-y-1/2 pointer-events-none select-none whitespace-nowrap overflow-hidden">
        GROUP 11 CHAOS
      </div>
    </Section>
  );
};
