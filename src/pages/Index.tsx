import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroAlt from "@/components/HeroAlt";
import FeatureCards from "@/components/FeatureCards";
import Process from "@/components/Process";
import Results from "@/components/Results";
import HeroImage from "@/components/HeroImage";
import FAQ from "@/components/FAQ";
import { faqs } from "@/content/faqs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://xodigital.systems/#organization",
        name: "XO Digital Systems",
        url: "https://xodigital.systems/",
        email: "admin@xo.systems.com",
        description: "A product company building branded checkout and connected commerce software, available first through XO for WooCommerce.",
      },
      {
        "@type": "WebSite",
        "@id": "https://xodigital.systems/#website",
        url: "https://xodigital.systems/",
        name: "XO Digital Systems",
        publisher: { "@id": "https://xodigital.systems/#organization" },
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": "https://xodigital.systems/#faq",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>XO Digital Systems | Connected Commerce Software</title>
        <meta 
          name="description" 
          content="XO Digital Systems builds branded checkout and connected commerce software. Try XO for WooCommerce across seven real checkout designs."
        />
        <meta name="keywords" content="branded WooCommerce checkout, WooCommerce checkout design, WooCommerce quotes, ecommerce software, XO for WooCommerce" />
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
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main id="main-content" tabIndex={-1}>
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
