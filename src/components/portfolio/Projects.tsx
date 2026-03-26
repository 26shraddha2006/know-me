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
    title: "Smart Route Optimizer",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop",
    challenge: "Build a real-time shortest path and minimum-stop route optimization system across a network of US cities.",
    action: "Implemented BFS (O(V+E)) and Dijkstra's Algorithm (O((V+E) log V)) in Java. Built a full-stack app using Spring Boot with an interactive HTML/CSS/JS frontend for dynamic route visualization.",
    result: "Scalable and efficient path computation using Adjacency List graphs, Priority Queue, HashMap, and HashSet.",
    tags: ["Java", "Spring Boot", "REST APIs", "Graph Algorithms", "BFS", "Dijkstra"],
    github: "https://github.com/26shraddha2006",
  },
  {
    title: "Real-Time Memory Allocation Tracker",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    challenge: "Build an OS-level memory simulation system supporting Contiguous Allocation, Paging, and Segmentation.",
    action: "Developed a DOM-driven visualization interface for reliable real-time memory updates. Integrated utilization and fragmentation metrics.",
    result: "Achieved 95% accuracy in memory simulation and improved comparison efficiency by 75%.",
    tags: ["HTML", "CSS", "JavaScript", "DOM", "OS Simulation"],
    github: "https://github.com/26shraddha2006",
  },
  {
    title: "Student Performance Predictor",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    challenge: "Forecast student performance by building a prediction model using scores, attendance, and variance.",
    action: "Streamlined data processing with custom structures and QuickSort indexing. Designed a Chart.js-powered analytics dashboard with full data controls.",
    result: "Reached 85% prediction accuracy, reduced computation time by 40%, and improved reporting efficiency by 90%.",
    tags: ["HTML", "CSS", "JavaScript", "DOM", "Chart.js", "QuickSort", "Data Modeling"],
    github: "https://github.com/26shraddha2006/Student-Performance-Predictor--1-",
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
