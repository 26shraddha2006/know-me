import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Lightbulb, Users, Coffee } from "lucide-react";

const highlights = [
  { icon: Code2, label: "500+ Problems Solved", desc: "On coding platforms" },
  { icon: Lightbulb, label: "10+ Projects", desc: "Built & deployed" },
  { icon: Users, label: "Team Player", desc: "Hackathons & group projects" },
  { icon: Coffee, label: "Always Learning", desc: "New tech every week" },
];

const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="About Me" subtitle="A little about who I am and what drives me" />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm a <span className="text-foreground font-medium">3rd-year BTech Computer Science</span> student
            with a deep passion for building software that makes a difference. From full-stack web apps to
            system design, I love turning ideas into functional, elegant products.
          </p>
          <p>
            Currently, I'm exploring <span className="text-foreground font-medium">cloud-native development</span>,
            <span className="text-foreground font-medium"> machine learning</span>, and
            <span className="text-foreground font-medium"> competitive programming</span>. I believe in
            writing clean, maintainable code and contributing to the open-source community.
          </p>
          <p>
            When I'm not coding, you'll find me reading tech blogs, playing chess, or exploring
            new coffee shops. I'm always open to collaborating on interesting projects!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map(({ icon: Icon, label, desc }, i) => (
            <div
              key={label}
              className="bg-card-gradient rounded-xl p-5 shadow-card border border-border hover:shadow-elevated transition-shadow"
            >
              <Icon size={24} className="text-primary mb-3" />
              <p className="font-display font-semibold text-foreground text-sm">{label}</p>
              <p className="text-xs text-muted-foreground mt-1">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
