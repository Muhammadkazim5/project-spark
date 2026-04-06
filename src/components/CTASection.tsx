const CTASection = () => (
  <section className="py-24 px-4">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        Stop configuring. <span className="gradient-text">Start building.</span>
      </h2>
      <p className="text-muted-foreground mb-8">
        Join developers who save hours on every new project.
      </p>
      <div className="inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-card border border-glow font-mono text-primary glow-primary">
        <span className="text-muted-foreground">$</span>
        <span>npx create-myapp</span>
      </div>
    </div>
  </section>
);

export default CTASection;
