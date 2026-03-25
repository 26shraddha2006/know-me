import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Trophy, Medal, Star, Zap } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Smart India Hackathon Finalist", desc: "Reached national finals with a healthcare management solution", year: "2024" },
  { icon: Medal, title: "LeetCode 1800+ Rating", desc: "Top 5% globally, solved 500+ problems across platforms", year: "2024" },
  { icon: Star, title: "Dean's List — 3 Semesters", desc: "Maintained 9.0+ CGPA consistently", year: "2022–24" },
  { icon: Zap, title: "1st Place — College Code Sprint", desc: "Won annual competitive programming contest among 200+ participants", year: "2023" },
  { icon: Trophy, title: "Open Source Contributor", desc: "Contributed to 5+ popular GitHub repositories with merged PRs", year: "2023–24" },
  { icon: Medal, title: "Technical Lead — Coding Club", desc: "Led a team of 30+ members, organized workshops and contests", year: "2023–24" },
];

const Achievements = () => (
  <section id="achievements" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Achievements" subtitle="Milestones I'm proud of" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
