import { Section } from "./Section";
import { CONTENT, MEMBERS } from "../data/content";
import { motion } from "framer-motion";

export const GroupStory = () => (
  <Section id="story" className="bg-bg-struggle text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-h2 mb-8 font-bold text-white">
        {CONTENT.groupStory.title}
      </h2>
      <p className="text-body text-text-soft leading-relaxed opacity-70 italic">
        "{CONTENT.groupStory.body}"
      </p>
    </div>
  </Section>
);

export const MembersWall = () => (
  <Section className="bg-bg-mid text-text-dark">
    <div className="w-full max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-h2 font-bold mb-4 text-[#0F172A]">
          Group 11 • Novara Cohort of TS Academy
        </h2>
        <p className="text-[#64748B] italic opacity-70">
          "The faces behind the commits"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {MEMBERS.map((member, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-xl shadow-card border border-border-light relative overflow-hidden group"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 mx-auto border-4 border-primary-soft shadow-sm">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-center mb-1 text-[#0F172A]">
              {member.name}
            </h3>
            <p className="text-primary font-medium text-center text-xs mb-4 uppercase tracking-wider">
              {member.title}
            </p>
            <div className="space-y-4 text-center">
              <p className="text-slate-500 text-sm italic leading-snug">
                "{member.memory}"
              </p>
              <div className="inline-block px-3 py-1 bg-accent-soft text-accent text-xs font-bold rounded-full">
                {member.strength}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);
