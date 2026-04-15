import { Terminal, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Features", path: "/features" },
  { label: "Docs", path: "/docs" },
  { label: "FAQ", path: "/faq" },
  { label: "GitHub", path: "https://github.com", external: true },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
          <Terminal className="w-4 h-4 text-primary" />
          create-myapp
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          {navItems.map((item) =>
            item.external ? (
              <a key={item.label} href={item.path} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "transition-colors",
                  pathname === item.path ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button className="sm:hidden text-muted-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-border bg-background px-4 py-3 space-y-3">
          {navItems.map((item) =>
            item.external ? (
              <a key={item.label} href={item.path} target="_blank" rel="noreferrer" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setOpen(false)}
                className={cn(
                  "block text-sm transition-colors",
                  pathname === item.path ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
