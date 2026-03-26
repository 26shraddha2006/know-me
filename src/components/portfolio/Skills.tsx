import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface Skill {
  name: string;
  level: number;
}

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C / C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Nmap / Nessus", level: 80 },
      { name: "Metasploit / Burp Suite", level: 75 },
      { name: "Kali Linux", level: 80 },
      { name: "Wireshark", level: 70 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML / CSS", level: 85 },
      { name: "Spring Boot / REST APIs", level: 70 },
      { name: "DOM Manipulation", level: 75 },
    ],
  },
];

const softSkills = ["Creative", "Problem-Solving", "Leadership", "Adaptability"];

const SkillBar = ({ name, level, delay }: Skill & { delay: number }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between text-sm">
      <span className="text-foreground font-medium">{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="h-full rounded-full"
        style={{ background: "var(--gradient-primary)" }}
      />
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-24 px-6 bg-muted/30">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Skills" subtitle="Technologies I work with" />

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className="bg-card-gradient rounded-2xl p-6 shadow-card border border-border"
          >
            <h3 className="font-display font-semibold text-foreground mb-5">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} delay={ci * 0.1 + si * 0.05} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3"
      >
        {softSkills.map((s) => (
          <span
            key={s}
            className="px-4 py-2 rounded-full text-sm font-medium border border-primary/20 text-primary bg-primary/5"
          >
            {s}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
