import { motion } from "framer-motion";

const certs = [
  {
    title: "OCI AI Foundations Associate",
    issuer: "Oracle",
    date: "Sept '25",
    link: "/certs/AI_Foundations_Associate.pdf",
    image: "/certs/AI_Foundations_Associate.jpg",
    color: "bg-red-500/90 text-white",
  },
  {
    title: "OCI Generative AI Professional",
    issuer: "Oracle",
    date: "Sept '25",
    link: "/certs/Generative_AI_Professional.pdf",
    image: "/certs/Generative_AI_Professional.jpg",
    color: "bg-red-500/90 text-white",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    date: "Sept '25",
    link: "/certs/Cybersecurity_Analyst_Job_Simulation.pdf",
    image: "/certs/Cybersecurity_Analyst_Job_Simulation.jpg",
    color: "bg-green-500/90 text-white",
  },
  {
    title: "Solutions Architecture Job Simulation",
    issuer: "Forage",
    date: "2025",
    link: "/certs/Solutions_Architecture_Job_Simulation.pdf",
    image: "/certs/Solutions_Architecture_Job_Simulation.jpg",
    color: "bg-green-500/90 text-white",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "LPU",
    date: "Jul '25",
    link: "/certs/Basics_of_DSA.pdf",
    image: "/certs/Basics_of_DSA.jpg",
    color: "bg-orange-500/90 text-white",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Apr '25",
    link: "/certs/Cloud_Computing.pdf",
    image: "/certs/Cloud_Computing.jpg",
    color: "bg-blue-500/90 text-white",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-left mb-1">
            Certificates
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all hover:shadow-elevated">
                  <div className="p-4 pb-3">
                    <div className="rounded-lg overflow-hidden bg-muted aspect-[4/3]">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <h4 className="font-display font-semibold text-foreground text-sm leading-tight mb-3 group-hover:text-primary transition-colors">
                      {c.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${c.color}`}>
                        {c.issuer}
                      </span>
                      <span className="text-xs text-muted-foreground">{c.date}</span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
