import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { title: "OCI AI Foundations Associate", issuer: "Oracle", date: "Sept 2025", link: "/certs/AI_Foundations_Associate.pdf" },
  { title: "OCI Generative AI Professional", issuer: "Oracle", date: "Sept 2025", link: "/certs/Generative_AI_Professional.pdf" },
  { title: "Cybersecurity Analyst Job Simulation", issuer: "Forage", date: "Sept 2025", link: "/certs/Cybersecurity_Analyst_Job_Simulation.pdf" },
  { title: "Solutions Architecture Job Simulation", issuer: "Forage", date: "2025", link: "/certs/Solutions_Architecture_Job_Simulation.pdf" },
  { title: "Data Structures and Algorithms", issuer: "LPU", date: "July 2025", link: "/certs/Basics_of_DSA.pdf" },
  { title: "Cloud Computing", issuer: "NPTEL", date: "2025", link: "/certs/Cloud_Computing.pdf" },
];

const trainings = [
  { title: "Basics of DSA — Summer Training", org: "Lovely Professional University", duration: "June–July 2025" },
];

const Certifications = () => (
  <section id="certifications" className="py-24 px-6 bg-muted/30">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Training & Certifications" subtitle="Continuous learning journey" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card-gradient rounded-xl p-5 shadow-card border border-border flex items-start gap-4 hover:shadow-elevated transition-shadow"
          >
            <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
              <Award size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-display font-semibold text-foreground text-sm leading-tight">{c.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{c.issuer} · {c.date}</p>
              {c.link && (
                <a href={c.link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary mt-2 hover:underline">
                  View Certificate <ExternalLink size={10} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="font-display font-semibold text-foreground text-lg mb-4 text-center">Summer Training</h3>
      <div className="max-w-2xl mx-auto space-y-3">
        {trainings.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center gap-4 bg-card-gradient rounded-xl p-4 shadow-card border border-border"
          >
            <div className="w-1 h-10 rounded-full bg-primary flex-shrink-0" />
            <div>
              <p className="font-display font-semibold text-foreground text-sm">{t.title}</p>
              <p className="text-xs text-muted-foreground">{t.org} · {t.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
