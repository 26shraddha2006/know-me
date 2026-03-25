import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface Skill {
  name: string;
  level: number; // 0-100
}

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "C / C++", level: 80 },
      { name: "Java", level: 70 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Node.js / Express", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "MongoDB / Mongoose", level: 75 },
      { name: "Next.js", level: 70 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "AWS / GCP", level: 60 },
      { name: "Linux", level: 75 },
      { name: "Figma", level: 70 },
    ],
  },
];

const softSkills = ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability", "Leadership"];

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

      {/* Soft skills */}
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
