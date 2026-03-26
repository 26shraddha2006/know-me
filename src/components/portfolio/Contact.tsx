import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, MapPin, Copy, Check, Github, Linkedin, Send, Download } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const email = "shraddhayadavxa@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast({ title: "Email copied!", description: email });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_rom7xg8",
        "template_yll0ymi",
        {
          name: form.name,
          email: form.email,
          title: form.message,
        },
        "jr8QbssAFr4FK9W5a"
      );

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon."
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: "Please try again later or email me directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Get in Touch" subtitle="Let's connect and build something great" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <button
                onClick={copyEmail}
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group w-full text-left"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">{email}</p>
                  <p className="text-xs text-muted-foreground">Click to copy</p>
                </div>
                {copied ? <Check size={14} className="ml-auto text-primary" /> : <Copy size={14} className="ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />}
              </button>

              {[
                { icon: Phone, text: "+91 9793652612", sub: "Available Mon-Fri" },
                { icon: MapPin, text: "Phagwara, Punjab", sub: "Open to relocation" },
              ].map(({ icon: Icon, text, sub }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{text}</p>
                    <p className="text-xs text-muted-foreground">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-4">
              {[
                { icon: Github, href: "https://github.com/26shraddha2006", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shraddhayadav2006/", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Download CV */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-primary-foreground bg-primary hover:opacity-90 transition-opacity shadow-card"
            >
              <Download size={16} /> Download CV
            </a>
            <p className="text-xs text-muted-foreground">Last updated: March 2026</p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card-gradient rounded-2xl p-6 shadow-card border border-border space-y-4"
          >
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-primary-foreground bg-primary hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
