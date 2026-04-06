import { Terminal } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
    <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
        <Terminal className="w-4 h-4 text-primary" />
        create-myapp
      </div>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
