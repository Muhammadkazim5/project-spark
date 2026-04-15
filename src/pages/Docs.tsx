import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import TechStackSection from "@/components/TechStackSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Docs = () => (
  <>
    <Helmet>
      <title>Tech Stack & Docs — create-myapp CLI</title>
      <meta name="description" content="Learn about the modern tech stack behind create-myapp: NestJS, React, Prisma ORM, PostgreSQL, JWT Auth, Tailwind CSS, and more." />
      <link rel="canonical" href="https://create-myapp.dev/docs" />
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <TechStackSection />
      <CTASection />
      <Footer />
    </div>
  </>
);

export default Docs;
