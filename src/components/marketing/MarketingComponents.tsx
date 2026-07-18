import type { ReactNode } from "react";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { CtaLink } from "./MarketingShell";

export const Eyebrow = ({ children }: { children: ReactNode }) => <p className="mkt-eyebrow">{children}</p>;

export const SectionIntro = ({ eyebrow, title, body, inverse = false }: { eyebrow: string; title: string; body?: string; inverse?: boolean }) => (
  <div className={`mkt-section-intro${inverse ? " is-inverse" : ""}`}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2>{title}</h2>
    {body && <p>{body}</p>}
  </div>
);

export const Hero = ({
  eyebrow,
  title,
  body,
  secondary,
  children,
  compact = false,
  variant = "default",
}: {
  eyebrow: string;
  title: string;
  body: string;
  secondary?: { label: string; href: string };
  children?: ReactNode;
  compact?: boolean;
  variant?: "default" | "trust";
}) => (
  <section className={`mkt-hero${compact ? " mkt-hero--compact" : ""}${variant === "trust" ? " mkt-hero--trust" : ""}`}>
    <div className="mkt-hero__copy">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p>{body}</p>
      <div className="mkt-actions">
        <CtaLink className="mkt-button mkt-button--power" />
        {secondary && <a className="mkt-text-link" href={secondary.href}>{secondary.label}<ArrowRight aria-hidden="true" /></a>}
      </div>
    </div>
    {children && <div className="mkt-hero__visual">{children}</div>}
  </section>
);

export const CheckoutMock = ({ tone = "paper", step = "Delivery" }: { tone?: string; step?: string }) => (
  <div className={`mkt-checkout-mock is-${tone}`} aria-label={`Fictional Your Company checkout showing the ${step} step`}>
    <div className="mkt-checkout-mock__top"><span className="mkt-sample-logo">YOUR LOGO</span><span>Secure checkout</span></div>
    <div className="mkt-checkout-mock__steps"><span>Details</span><span className="is-active">{step}</span><span>Review</span><span>Confirm</span></div>
    <div className="mkt-checkout-mock__body">
      <div className="mkt-checkout-mock__form">
        <small>YOUR COMPANY</small>
        <h3>{step === "Delivery" ? "How should your order reach you?" : "Complete your order"}</h3>
        <div className="mkt-option is-selected"><span><i />Standard delivery</span><strong>Calculated</strong></div>
        <div className="mkt-option"><span><i />Collect from store</span><strong>Available</strong></div>
        <button type="button">Continue securely <ArrowRight aria-hidden="true" /></button>
      </div>
      <aside><small>ORDER SUMMARY</small><div><span>Studio desk lamp × 1</span><strong>R1,240</strong></div><div><span>Workspace organiser × 2</span><strong>R600</strong></div><div className="is-total"><span>Total</span><strong>R1,840</strong></div></aside>
    </div>
  </div>
);

export const JourneyStrip = ({ steps }: { steps: string[] }) => (
  <ol className="mkt-journey-strip">
    {steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < steps.length - 1 && <ChevronRight aria-hidden="true" />}</li>)}
  </ol>
);

export const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="mkt-feature-list">{items.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
);

export const FinalCta = ({ title, body }: { title: string; body: string }) => (
  <section className="mkt-final-cta">
    <div><Eyebrow>Controlled early access</Eyebrow><h2>{title}</h2></div>
    <div><p>{body}</p><CtaLink className="mkt-button mkt-button--power" /></div>
  </section>
);
