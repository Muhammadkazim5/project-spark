import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonSection from "@/components/ComparisonSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Features = () => (
  <>
    <Helmet>
      <title>Features — create-myapp CLI</title>
      <meta name="description" content="Explore the features of create-myapp: interactive CLI, instant auth setup, database configuration, frontend scaffolding, and production-ready config." />
      <link rel="canonical" href="https://create-myapp.dev/features" />
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <FeaturesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <CTASection />
      <Footer />
    </div>
  </>
);

export default Features;
