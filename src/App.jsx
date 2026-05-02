import { Hero } from "./components/Hero";
import { GroupStory, MembersWall } from "./components/StoryAndMembers";
import { Timeline, FunnyMoments } from "./components/Journey";
import { ChatMemories } from "./components/ChatMemories";
import { Awards, FinalMessage } from "./components/Showcase";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex gap-4 md:gap-8 text-[10px] md:text-xs font-black uppercase tracking-widest text-primary shadow-2xl">
        <a href="#" className="hover:text-white transition-colors">
          Start
        </a>
        <a href="#story" className="hover:text-white transition-colors">
          Journey
        </a>
        <a href="#members" className="hover:text-white transition-colors">
          Cohort
        </a>
        <a href="#chat" className="hover:text-white transition-colors">
          Chat
        </a>
      </nav>

      {/* Sections */}
      <Hero />
      <GroupStory />

      <div id="members">
        <MembersWall />
      </div>

      <Timeline />
      <FunnyMoments />
      <ChatMemories />

      <Awards />
      <FinalMessage />

      <footer className="py-12 text-center text-[#475569] text-sm bg-bg-end border-t border-border-light">
        <p>
          © 2026 Group 11 TS Academy Novara Cohort • Built with errors and
          pride.
        </p>
      </footer>
    </main>
  );
}

export default App;
