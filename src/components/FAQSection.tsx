import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is create-myapp free to use?",
    answer: "Yes, create-myapp is completely free and open-source. You can use it for personal projects, commercial applications, or anything in between.",
  },
  {
    question: "What frameworks and technologies are supported?",
    answer: "Currently, create-myapp generates projects with NestJS backend, React frontend, PostgreSQL database, Prisma ORM, and JWT authentication. We're actively working on adding support for more stacks.",
  },
  {
    question: "Can I customize the generated project?",
    answer: "Absolutely! The generated code is clean, well-organized, and fully yours to modify. We provide a solid foundation, but you have complete control over customization.",
  },
  {
    question: "Do I need to install anything before using create-myapp?",
    answer: "Just Node.js (v16 or higher). The CLI uses npx, so you don't need to install the package globally. Simply run 'npx create-myapp' and follow the prompts.",
  },
  {
    question: "Is the generated code production-ready?",
    answer: "Yes! The boilerplate includes best practices, proper error handling, environment configuration, and security measures. However, you should still review and test thoroughly before deploying to production.",
  },
  {
    question: "How do I get support or report issues?",
    answer: "You can open an issue on our GitHub repository, join our Discord community, or check the documentation. We're always happy to help!",
  },
];

const FAQSection = () => (
  <section className="py-24 px-4 border-t border-border">
    <div className="max-w-3xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">FAQ</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          Frequently asked questions
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-lg px-5 bg-card hover:border-glow transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
