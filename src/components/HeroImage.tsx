import xoLogo from "@/assets/logo-mark.svg";

const HeroImage = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div className="relative max-w-md w-full aspect-square flex items-center justify-center">
            {/* Darker circular backdrop so the logo blends naturally */}
            <div className="absolute inset-0 rounded-full bg-[hsl(216_30%_3%)]" />

            {/* Soft indigo glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />

            {/* Centered XO logo */}
            <img
              src={xoLogo}
              alt="XO Digital Systems logo"
              className="relative z-10 w-2/3 h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
