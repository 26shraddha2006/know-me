import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="text-center mb-14"
  >
    <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-md mx-auto">{subtitle}</p>
    )}
    <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
  </motion.div>
);

export default SectionHeading;
