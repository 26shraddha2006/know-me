import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Shield, Users, Coffee } from "lucide-react";

const highlights = [
  { icon: Code2, label: "200+ Problems Solved", desc: "On LeetCode" },
  { icon: Shield, label: "Cybersecurity", desc: "Top 4% on TryHackMe" },
  { icon: Users, label: "Open Source", desc: "GSSoC '25 Contributor" },
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
            I'm a <span className="text-foreground font-medium">BTech Computer Science & Engineering</span> student
            at Lovely Professional University with a deep passion for building software and exploring cybersecurity.
            From full-stack web apps to security analysis, I love turning ideas into functional, elegant products.
          </p>
          <p>
            Currently, I'm exploring <span className="text-foreground font-medium">cybersecurity tools</span> like
            Nmap, Metasploit, and Burp Suite, while strengthening my
            <span className="text-foreground font-medium"> Data Structures & Algorithms</span> skills. I'm also
            an active <span className="text-foreground font-medium">open-source contributor</span> in GirlScript Summer of Code 2025.
          </p>
          <p>
            I believe in writing clean, maintainable code and continuously pushing my boundaries through
            hackathons, coding challenges, and hands-on projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map(({ icon: Icon, label, desc }) => (
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
