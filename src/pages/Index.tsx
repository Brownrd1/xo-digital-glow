import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import Process from "@/components/Process";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>XO Digital Systems | Intelligent Ecommerce Solutions</title>
        <meta 
          name="description" 
          content="We build and optimise ecommerce platforms using software, marketing, data, and applied AI. Premium digital systems designed to grow your business." 
        />
        <meta name="keywords" content="ecommerce, digital marketing, SEO, web development, AI, conversion optimization" />
        <link rel="canonical" href="https://xodigital.systems" />
        
        {/* Open Graph */}
        <meta property="og:title" content="XO Digital Systems | Intelligent Ecommerce Solutions" />
        <meta property="og:description" content="We build and optimise ecommerce platforms using software, marketing, data, and applied AI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xodigital.systems" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="XO Digital Systems | Intelligent Ecommerce Solutions" />
        <meta name="twitter:description" content="Premium ecommerce systems built to perform and designed to grow." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <FeatureCards />
          <Process />
          <Results />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
