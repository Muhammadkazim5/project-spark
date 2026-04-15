import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TerminalDemo from "./TerminalDemo";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-30" />
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

    <motion.div
      className="relative z-10 text-center max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-glow bg-primary/5 text-primary text-xs font-mono mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
        v1.0 — Now Available
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
        <span className="text-foreground">Ship projects in </span>
        <span className="gradient-text">seconds,</span>
        <br />
        <span className="text-foreground">not hours.</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
        A CLI tool that generates production-ready project setups with NestJS, React, authentication, and database — all pre-configured.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-card border border-glow font-mono text-sm text-primary glow-primary cursor-pointer hover:bg-primary/5 transition-colors">
          <span>$</span>
          <span>npx create-myapp</span>
          <button
            onClick={() => navigator.clipboard.writeText("npx create-myapp")}
            className="ml-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Copy command"
          >
            📋
          </button>
        </div>
        <Link to="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          See features →
        </Link>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
    >
      <TerminalDemo />
    </motion.div>
  </section>
);

export default HeroSection;
