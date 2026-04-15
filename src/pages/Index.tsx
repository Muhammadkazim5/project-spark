import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Helmet>
      <title>create-myapp — Full-Stack Project Generator CLI</title>
      <meta name="description" content="Generate production-ready NestJS + React projects in under 60 seconds. Auth, database, and frontend — all pre-configured." />
      <link rel="canonical" href="https://create-myapp.dev/" />
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  </>
);

export default Index;
