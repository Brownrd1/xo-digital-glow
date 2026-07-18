import { useEffect, type ReactNode } from "react";
import { MarketingShell } from "@/components/marketing/MarketingShell";

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
    <MarketingShell>
      <header className="mkt-legal-hero"><p className="mkt-eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p><small>Last updated {updated}</small></header>
      <div className="mkt-legal-content">{children}</div>
    </MarketingShell>
  );
};

export const InfoSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mkt-info-section">
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

export default PublicInfoPage;
