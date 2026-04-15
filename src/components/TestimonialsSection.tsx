import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "This CLI saved me hours on my last three projects. The JWT setup alone would've taken me half a day.",
    author: "Sarah Chen",
    role: "Full Stack Developer",
    avatar: "SC",
  },
  {
    quote: "Finally, a boilerplate generator that doesn't feel bloated. Clean code, modern stack, zero fluff.",
    author: "Marcus Rodriguez",
    role: "Backend Engineer",
    avatar: "MR",
  },
  {
    quote: "I used to dread starting new projects. Now I actually look forward to it. Game changer.",
    author: "Aisha Patel",
    role: "Startup Founder",
    avatar: "AP",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Loved by developers
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
          >
            <Card className="h-full hover:border-glow transition-all duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="" alt={t.author} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                      {t.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
