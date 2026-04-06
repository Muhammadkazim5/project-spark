import { motion } from "framer-motion";

const comparisons = [
  { task: "Project structure", manual: "10 min", cli: "instant" },
  { task: "Auth setup (JWT)", manual: "20 min", cli: "instant" },
  { task: "Database & ORM config", manual: "15 min", cli: "instant" },
  { task: "Frontend scaffolding", manual: "10 min", cli: "instant" },
  { task: "Environment variables", manual: "5 min", cli: "instant" },
  { task: "Linting & config files", manual: "5 min", cli: "instant" },
];

const ComparisonSection = () => (
  <section className="py-24 px-4 border-t border-border">
    <div className="max-w-3xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Time Saved</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          60 minutes → <span className="gradient-text">under 1</span>
        </h2>
      </motion.div>

      <motion.div
        className="rounded-lg border border-border overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="grid grid-cols-3 bg-muted/50 text-xs font-mono uppercase tracking-wider text-muted-foreground px-5 py-3 border-b border-border">
          <span>Task</span>
          <span className="text-center">Manual</span>
          <span className="text-center text-primary">create-myapp</span>
        </div>

        {/* Rows */}
        {comparisons.map((row, i) => (
          <motion.div
            key={row.task}
            className="grid grid-cols-3 items-center px-5 py-3.5 border-b border-border last:border-b-0 bg-card hover:bg-muted/30 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <span className="text-sm text-foreground">{row.task}</span>
            <span className="text-center text-sm text-muted-foreground line-through decoration-destructive/50">{row.manual}</span>
            <span className="text-center text-sm text-primary font-mono font-semibold">{row.cli}</span>
          </motion.div>
        ))}

        {/* Total row */}
        <div className="grid grid-cols-3 items-center px-5 py-4 bg-primary/5 border-t border-primary/20">
          <span className="text-sm font-semibold text-foreground">Total</span>
          <span className="text-center text-sm text-muted-foreground line-through decoration-destructive/50">~65 min</span>
          <span className="text-center text-sm text-primary font-mono font-bold glow-text">&lt; 1 min</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ComparisonSection;
