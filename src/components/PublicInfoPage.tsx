import { useEffect, type ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type PublicInfoPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
};

const PublicInfoPage = ({ eyebrow, title, intro, updated, children }: PublicInfoPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <header className="relative overflow-hidden border-b border-border/60 pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(243_76%_59%/0.18),transparent_55%)]" aria-hidden="true" />
          <div className="container relative mx-auto max-w-5xl px-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
            <h1 className="max-w-4xl text-balance text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">{intro}</p>
            <p className="mt-6 text-sm text-muted-foreground">Last updated {updated}</p>
          </div>
        </header>

        <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="space-y-12">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const InfoSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="grid gap-5 border-b border-border/60 pb-12 md:grid-cols-[0.34fr_0.66fr] md:gap-12">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <div className="space-y-4 leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:text-foreground">
      {children}
    </div>
  </section>
);

export default PublicInfoPage;
