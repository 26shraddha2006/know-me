import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="certifications" className="py-24 px-6 bg-[hsl(210,30%,8%)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-left mb-1">
            Certificates
          </h2>
          <div className="w-16 h-1 bg-emerald-400 rounded-full mb-10" />
        </motion.div>

        <div className="relative">
          {/* Prev button */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-[hsl(210,20%,18%)] border border-[hsl(210,20%,25%)] flex items-center justify-center text-white hover:bg-[hsl(210,20%,25%)] transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {certs.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.333%-14px)] min-w-0"
                >
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="bg-[hsl(210,20%,14%)] rounded-xl border border-[hsl(210,20%,20%)] overflow-hidden hover:border-[hsl(210,20%,30%)] transition-all hover:shadow-lg hover:shadow-black/20">
                      {/* Certificate image */}
                      <div className="p-4 pb-3">
                        <div className="rounded-lg overflow-hidden bg-[hsl(210,20%,18%)] aspect-[4/3]">
                          <img
                            src={c.image}
                            alt={c.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="px-4 pb-4">
                        <h4 className="font-display font-semibold text-white text-sm leading-tight mb-3 group-hover:text-emerald-300 transition-colors">
                          {c.title}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-xs font-medium px-3 py-1 rounded-full ${c.color}`}
                          >
                            {c.issuer}
                          </span>
                          <span className="text-xs text-gray-400">
                            {c.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-[hsl(210,20%,18%)] border border-[hsl(210,20%,25%)] flex items-center justify-center text-white hover:bg-[hsl(210,20%,25%)] transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
