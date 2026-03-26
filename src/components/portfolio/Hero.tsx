import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

const Hero = () => (
  <section className="min-h-screen bg-hero flex items-center justify-center relative overflow-hidden pt-20">
    {/* Decorative blobs */}
    <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center md:text-left"
      >
        <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Hello, I'm</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground leading-tight mb-4">
          Shraddha Yadav
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-lg">
          BTech CSE Student · Full-Stack Developer · Cybersecurity Enthusiast
        </p>
        <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
          Passionate about building efficient software and exploring cybersecurity. Currently contributing to open-source and solving DSA problems on LeetCode.
        </p>

        <div className="flex items-center gap-4 justify-center md:justify-start mb-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground bg-primary hover:opacity-90 transition-opacity shadow-elevated text-sm"
          >
            <Mail size={16} /> Get in Touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-foreground border border-border hover:border-primary/30 hover:bg-primary/5 transition-all text-sm"
          >
            View Projects
          </a>
        </div>

        <div className="flex items-center gap-4 justify-center md:justify-start">
          {[
            { icon: Github, href: "https://github.com/26shraddha2006", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/shraddhayadav2006/", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Headshot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex-shrink-0"
      >
        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-primary/10 animate-float" />
          <img
            src={headshot}
            alt="Profile headshot"
            className="w-56 h-56 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-background shadow-elevated relative z-10"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>

    {/* Scroll hint */}
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
    >
      <ArrowDown size={20} className="animate-bounce" />
    </motion.a>
  </section>
);

export default Hero;
