import { useState, useEffect } from "react";

const lines = [
  { text: "$ npx create-myapp", type: "command" as const, delay: 0 },
  { text: "", type: "blank" as const, delay: 800 },
  { text: "? Select your backend framework:", type: "prompt" as const, delay: 1000 },
  { text: "  ❯ NestJS", type: "selected" as const, delay: 1400 },
  { text: "? Select database:", type: "prompt" as const, delay: 2000 },
  { text: "  ❯ PostgreSQL + Prisma", type: "selected" as const, delay: 2400 },
  { text: "? Enable JWT authentication?", type: "prompt" as const, delay: 3000 },
  { text: "  ❯ Yes", type: "selected" as const, delay: 3400 },
  { text: "", type: "blank" as const, delay: 3800 },
  { text: "⚡ Generating project structure...", type: "info" as const, delay: 4000 },
  { text: "📦 Installing dependencies...", type: "info" as const, delay: 4600 },
  { text: "🔐 Configuring authentication...", type: "info" as const, delay: 5200 },
  { text: "🗄️  Setting up database...", type: "info" as const, delay: 5800 },
  { text: "", type: "blank" as const, delay: 6200 },
  { text: "✅ Project ready! cd my-app && npm run dev", type: "success" as const, delay: 6400 },
];

const TerminalDemo = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const getLineColor = (type: string) => {
    switch (type) {
      case "command": return "text-primary glow-text";
      case "prompt": return "text-foreground";
      case "selected": return "text-primary";
      case "info": return "text-muted-foreground";
      case "success": return "text-primary font-semibold";
      default: return "";
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-lg border border-glow bg-card overflow-hidden glow-primary">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-accent/60" />
          <div className="w-3 h-3 rounded-full bg-primary/60" />
          <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
        </div>
        {/* Content */}
        <div className="p-5 font-mono text-sm leading-relaxed min-h-[340px]">
          {lines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className={`${getLineColor(line.type)} ${line.type === "blank" ? "h-4" : ""}`}>
              {line.text}
            </div>
          ))}
          {visibleLines < lines.length && (
            <span className="inline-block w-2 h-4 bg-primary animate-terminal-blink" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalDemo;
