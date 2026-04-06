const steps = [
  { num: "01", title: "Run the CLI", desc: "Execute npx create-myapp in your terminal." },
  { num: "02", title: "Choose your stack", desc: "Select framework, database, and features interactively." },
  { num: "03", title: "Get your project", desc: "A fully configured, ready-to-run project is generated." },
  { num: "04", title: "Start building", desc: "Focus on features — the boilerplate is handled." },
];

const HowItWorksSection = () => (
  <section className="py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">How It Works</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Four steps to launch</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {steps.map((s) => (
          <div key={s.num} className="flex gap-4 p-5 rounded-lg bg-card border border-border">
            <span className="text-2xl font-bold gradient-text font-mono">{s.num}</span>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
