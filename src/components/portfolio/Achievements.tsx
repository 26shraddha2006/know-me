import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Trophy, Medal, Star, Zap } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "200+ DSA Problems on LeetCode", desc: "Solved 200+ Data Structures and Algorithms problems", year: "2025" },
  { icon: Medal, title: "Top 4% on TryHackMe", desc: "Global performer in cybersecurity challenges", year: "2025" },
  { icon: Star, title: "GSSoC '25 Contributor", desc: "Selected as a Contributor in GirlScript Summer of Code 2025", year: "2025" },
  { icon: Zap, title: "TryHackMe & LeetCode Challenges", desc: "Completed 30-day, 90-day, and 180-day challenges and earned all badges", year: "2025" },
];

const Achievements = () => (
  <section id="achievements" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Achievements" subtitle="Milestones I'm proud of" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card-gradient rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <a.icon size={18} />
              </div>
              <span className="text-xs text-muted-foreground font-medium">{a.year}</span>
            </div>
            <h4 className="font-display font-semibold text-foreground text-sm mb-1">{a.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
