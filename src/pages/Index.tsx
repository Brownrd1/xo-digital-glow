import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroAlt from "@/components/HeroAlt";
import FeatureCards from "@/components/FeatureCards";
import Process from "@/components/Process";
import Results from "@/components/Results";
import HeroImage from "@/components/HeroImage";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>XO Digital Systems | Connected Commerce Software</title>
        <meta 
          name="description" 
          content="XO Digital Systems is building XO Commerce, connected software for complex buying journeys. Available first through XO for WooCommerce." 
        />
        <meta name="keywords" content="WooCommerce checkout, B2B ecommerce, WooCommerce quotes, ecommerce software, XO-WP" />
        <link rel="canonical" href="https://xodigital.systems" />
        
        {/* Open Graph */}
        <meta property="og:title" content="XO Digital Systems | Connected Commerce Software" />
        <meta property="og:description" content="Connected ecommerce software for businesses that have outgrown basic checkout." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xodigital.systems" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="XO Digital Systems | Connected Commerce Software" />
        <meta name="twitter:description" content="Connected ecommerce software for businesses that have outgrown basic checkout." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroAlt />
          <FeatureCards />
          <Process />
          <Results />
          <HeroImage />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
