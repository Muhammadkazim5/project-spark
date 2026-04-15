import { motion } from "framer-motion";
import { Zap, Shield, Database, Layout, Terminal, Settings } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  { icon: <Terminal className="w-5 h-5" />, title: "Interactive CLI", description: "Guided prompts to select your stack, database, and auth preferences." },
  { icon: <Zap className="w-5 h-5" />, title: "Instant Setup", description: "Go from zero to running project in under 60 seconds." },
  { icon: <Shield className="w-5 h-5" />, title: "JWT Auth Built-in", description: "Pre-configured guards, strategies, and login/register endpoints." },
  { icon: <Database className="w-5 h-5" />, title: "Database Ready", description: "PostgreSQL with Prisma ORM — migrations and models included." },
  { icon: <Layout className="w-5 h-5" />, title: "Frontend Included", description: "React + Tailwind CSS frontend with clean component structure." },
  { icon: <Settings className="w-5 h-5" />, title: "Production Config", description: "Environment variables, linting, and folder architecture out of the box." },
];

const FeaturesSection = () => (
  <section className="relative py-24 px-4 pt-28">
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Features</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Everything you need to start building
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <FeatureCard key={f.title} index={i} {...f} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
