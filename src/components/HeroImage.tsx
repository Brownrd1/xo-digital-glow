import heroImage from "@/assets/hero-image.png";

const HeroImage = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div className="relative max-w-4xl w-full">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />

            {/* Centered hero image */}
            <img
              src={heroImage}
              alt="XO Digital Systems - AI-powered ecommerce platform"
              className="relative z-10 w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
