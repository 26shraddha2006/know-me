import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border bg-muted/30">
    <div className="max-w-6xl mx-auto text-center">
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        Built with <Heart size={14} className="text-primary" /> by Your Name · © {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
