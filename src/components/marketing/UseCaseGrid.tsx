import { ArrowRight } from "lucide-react";
import { useCases } from "@/content/site";

const sceneCopy = {
  "branded-ecommerce": { label: "BRANDED CHECKOUT", title: "A final step that feels like your store.", action: "Continue securely" },
  "complex-delivery": { label: "DELIVERY", title: "How should your order reach you?", action: "Review delivery" },
  "mixed-commerce": { label: "ORDER PATH", title: "Buy now or request a quotation?", action: "Choose a path" },
  "wholesale-quotes": { label: "QUOTATION", title: "Review and submit your request.", action: "Request quotation" },
} as const;

export const UseCaseGrid = ({ linkLabel = "Read the use case" }: { linkLabel?: string }) => (
  <div className="mkt-usecase-grid">
    {useCases.map((useCase) => (
      <article className="mkt-usecase-card" key={useCase.slug}>
        <small>{useCase.eyebrow}</small>
        <div className={`mkt-usecase-checkout is-${useCase.accent}`} aria-hidden="true">
          <div className="mkt-usecase-checkout__top"><strong>YOUR LOGO</strong><span>SECURE CHECKOUT</span></div>
          <div className="mkt-usecase-checkout__steps"><span>Details</span><span className="is-active">Delivery</span><span>Review</span></div>
          <div className="mkt-usecase-checkout__body">
            <div><small>{sceneCopy[useCase.slug].label}</small><strong>{sceneCopy[useCase.slug].title}</strong><i>Customer and order context</i><b>{sceneCopy[useCase.slug].action} <ArrowRight /></b></div>
            <aside><small>ORDER</small><span>2 items</span><strong>R1,840</strong></aside>
          </div>
        </div>
        <h3>{useCase.title}</h3>
        <p>{useCase.summary}</p>
        <a href={`/use-cases/${useCase.slug}`}>{linkLabel} <ArrowRight aria-hidden="true" /></a>
      </article>
    ))}
  </div>
);
