import { motion } from "framer-motion";

const stacks = [
  { category: "CLI Tool", items: ["Node.js", "TypeScript", "Commander", "Inquirer"] },
  { category: "Backend", items: ["NestJS", "Prisma ORM", "PostgreSQL", "JWT Auth"] },
  { category: "Frontend", items: ["React", "Tailwind CSS", "Vite", "TypeScript"] },
];

const TechStackSection = () => (
  <section className="py-24 px-4 pt-28 border-t border-border">
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Tech Stack</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Built with modern tools</h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stacks.map((s, i) => (
          <motion.div
            key={s.category}
            className="p-5 rounded-lg bg-card border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
          >
            <h3 className="font-mono text-sm text-primary mb-4">{s.category}</h3>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
