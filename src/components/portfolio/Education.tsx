import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BTech in Computer Science & Engineering",
    institution: "Lovely Professional University, Phagwara, Punjab",
    period: "Aug 2023 – Present",
    grade: "CGPA: 7.98",
    highlight: "Current",
    coursework: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks"],
  },
  {
    degree: "Intermediate (12th) — PCM",
    institution: "Delhi Public School, Saharanpur, UP",
    period: "Mar 2022 – Mar 2023",
    grade: "84.8%",
    highlight: "",
    coursework: [],
  },
  {
    degree: "Matriculation (10th)",
    institution: "Delhi Public School, Saharanpur, UP",
    period: "Mar 2021 – Mar 2022",
    grade: "88.4%",
    highlight: "",
    coursework: [],
  },
];

const Education = () => (
  <section id="education" className="py-24 px-6 bg-muted/30">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Education" subtitle="Academic background" />

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

        <div className="space-y-8">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 relative"
            >
              <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 items-center justify-center z-10 border-2 border-background">
                <GraduationCap size={18} className="text-primary" />
              </div>

              <div className="bg-card-gradient rounded-2xl p-6 shadow-card border border-border flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h4 className="font-display font-bold text-foreground">{e.degree}</h4>
                  {e.highlight && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                      {e.highlight}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{e.institution}</p>
                <p className="text-sm text-muted-foreground">{e.period} · {e.grade}</p>

                {e.coursework.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {e.coursework.map((c) => (
                      <span key={c} className="px-2 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground">
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
