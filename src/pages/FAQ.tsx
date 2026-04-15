import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const FAQ = () => (
  <>
    <Helmet>
      <title>FAQ — create-myapp CLI</title>
      <meta name="description" content="Frequently asked questions about create-myapp: pricing, supported frameworks, customization, requirements, and community support." />
      <link rel="canonical" href="https://create-myapp.dev/faq" />
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  </>
);

export default FAQ;
