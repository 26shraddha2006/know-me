import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BTech in Computer Science & Engineering",
    institution: "XYZ University of Technology",
    period: "2022 – 2026 (Expected)",
    grade: "CGPA: 9.1 / 10",
    highlight: "3rd Year · Dean's List",
    coursework: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "Machine Learning", "Software Engineering"],
  },
  {
    degree: "Senior Secondary (12th) — PCM + CS",
    institution: "ABC Senior Secondary School",
    period: "2020 – 2022",
    grade: "95.4%",
    highlight: "School topper in Computer Science",
    coursework: [],
  },
  {
    degree: "Secondary (10th) — CBSE",
    institution: "ABC Senior Secondary School",
    period: "2020",
    grade: "96.2%",
    highlight: "District top 10",
    coursework: [],
  },
];

const Education = () => (
  <section id="education" className="py-24 px-6 bg-muted/30">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Education" subtitle="Academic background" />

      <div className="relative">
        {/* Timeline line */}
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
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 items-center justify-center z-10 border-2 border-background">
                <GraduationCap size={18} className="text-primary" />
              </div>

              <div className="bg-card-gradient rounded-2xl p-6 shadow-card border border-border flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h4 className="font-display font-bold text-foreground">{e.degree}</h4>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                    {e.highlight}
                  </span>
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
