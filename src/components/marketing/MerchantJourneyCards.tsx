import { ArrowRight, Check, MapPin, PackageOpen, UserRound } from "lucide-react";
import { productClaims } from "@/content/site";

const JourneyVisual = ({ index }: { index: number }) => {
  if (index === 0) {
    return (
      <div className="mkt-claim-visual is-customer" aria-hidden="true">
        <div className="mkt-claim-visual__bar"><strong>YOUR LOGO</strong><span>Customer details</span></div>
        <div className="mkt-claim-visual__body">
          <small>CUSTOMER PROFILE</small>
          <div className="mkt-claim-visual__headline"><UserRound /><strong>Who are we helping today?</strong></div>
          <div className="mkt-claim-customer"><span><small>Email address</small><strong>buyer@company.test</strong></span><span><small>Location</small><strong>Cape Town · 7***</strong></span></div>
          <span className="mkt-claim-visual__action">Continue to delivery <ArrowRight /></span>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="mkt-claim-visual is-order" aria-hidden="true">
        <div className="mkt-claim-visual__bar"><strong>YOUR LOGO</strong><span>Delivery</span></div>
        <div className="mkt-claim-visual__body">
          <small>DELIVERY DETAILS</small>
          <div className="mkt-claim-visual__headline"><MapPin /><strong>Where should it go?</strong></div>
          <div className="mkt-claim-field"><small>Postal code</small><strong>2***</strong></div>
          <div className="mkt-claim-signals"><span><PackageOpen /> Standard cart</span><span>Metro area</span></div>
        </div>
      </div>
    );
  }

  return (
    <div className="mkt-claim-visual is-outcome" aria-hidden="true">
      <div className="mkt-claim-visual__bar"><strong>YOUR LOGO</strong><span>Review</span></div>
      <div className="mkt-claim-visual__body">
        <small>ORDER REVIEW</small>
        <div className="mkt-claim-visual__headline"><Check /><strong>The right outcome, clearly shown.</strong></div>
        <div className="mkt-claim-review"><span>Products <strong>R1,840</strong></span><span>Shipping <strong className="is-free">FREE</strong></span></div>
        <div className="mkt-claim-success"><Check /> Free shipping applied</div>
      </div>
    </div>
  );
};

export const MerchantJourneyCards = () => (
  <div className="mkt-card-grid mkt-card-grid--visual">
    {productClaims.map((claim, index) => (
      <article className="mkt-card" key={claim.title}>
        <span>0{index + 1}</span>
        <JourneyVisual index={index} />
        <h3>{claim.title}</h3>
        <p>{claim.body}</p>
        <small>{claim.proof}</small>
      </article>
    ))}
  </div>
);
