import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  image: string;
  challenge: string;
  action: string;
  result: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    challenge: "Build a scalable online marketplace with real-time inventory management and secure payment processing.",
    action: "Developed using React, Node.js, MongoDB with Stripe integration. Implemented JWT auth and Redis caching.",
    result: "Handled 1000+ concurrent users, 99.9% uptime, 40% faster load times through optimization.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "AI Chatbot Assistant",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    challenge: "Create an intelligent chatbot that can answer domain-specific questions with high accuracy.",
    action: "Used Python, FastAPI, and OpenAI API with RAG architecture. Implemented vector search with Pinecone.",
    result: "Achieved 92% accuracy on test queries. Reduced customer support tickets by 35%.",
    tags: ["Python", "FastAPI", "OpenAI", "Pinecone", "RAG"],
    github: "https://github.com",
  },
  {
    title: "Task Management App",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    challenge: "Design a collaborative task manager with real-time updates and team workflow support.",
    action: "Built with Next.js, PostgreSQL, and Socket.io. Used Prisma ORM and deployed on Vercel.",
    result: "Used by 50+ students for group projects. 4.8/5 average user rating.",
    tags: ["Next.js", "PostgreSQL", "Socket.io", "Prisma"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    challenge: "Build a visually rich weather dashboard with 7-day forecasts and location-based alerts.",
    action: "Created with React, Chart.js, and OpenWeatherMap API. PWA with offline support.",
    result: "Featured in college tech fest. 200+ downloads as PWA.",
    tags: ["React", "Chart.js", "PWA", "REST API"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-card-gradient rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-shadow group"
  >
    <div className="relative overflow-hidden h-48">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
    </div>

    <div className="p-6 space-y-3">
      <h3 className="font-display font-bold text-lg text-foreground">{project.title}</h3>

      <div className="space-y-2 text-sm text-muted-foreground">
        <p><span className="text-primary font-medium">Challenge:</span> {project.challenge}</p>
        <p><span className="text-primary font-medium">Action:</span> {project.action}</p>
        <p><span className="text-primary font-medium">Result:</span> {project.result}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary font-medium">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-3 border-t border-border">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Github size={14} /> Code
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink size={14} /> Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Projects" subtitle="Challenge → Action → Result" />
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
