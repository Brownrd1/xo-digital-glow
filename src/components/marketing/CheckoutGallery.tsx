import { useState } from "react";
import { checkoutFamilies } from "@/content/site";

export const CheckoutDirectionBoard = () => (
  <div className="mkt-direction-board" aria-label="XO checkout design range">
    <div className="mkt-direction-board__head"><span>XO DESIGN RANGE</span><strong>7 families</strong></div>
    <div className="mkt-direction-board__axis"><small>Visual attention</small><div><span>Quiet</span><i /><strong>Expressive</strong></div></div>
    <div className="mkt-direction-board__axis"><small>Brand temperature</small><div><span>Corporate</span><i /><strong>Individual</strong></div></div>
    <div className="mkt-direction-board__axis"><small>Presentation</small><div><span>Light</span><i /><strong>Dark-first</strong></div></div>
    <p>Choose the character that belongs to the store—not the design with the most decoration.</p>
  </div>
);

export const CheckoutGallery = () => {
  const [activeKey, setActiveKey] = useState(checkoutFamilies[0].key);
  const active = checkoutFamilies.find((family) => family.key === activeKey) ?? checkoutFamilies[0];
  const activeIndex = checkoutFamilies.findIndex((family) => family.key === active.key);

  return (
    <div className="mkt-gallery">
      <div className="mkt-gallery__picker" role="tablist" aria-label="Checkout design families">
        {checkoutFamilies.map((family, index) => (
          <button key={family.key} id={`family-tab-${family.key}`} role="tab" aria-selected={family.key === active.key} aria-controls="family-panel" type="button" onClick={() => setActiveKey(family.key)}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{family.name}</strong><small>{family.character}</small>
          </button>
        ))}
      </div>
      <div id="family-panel" role="tabpanel" aria-labelledby={`family-tab-${active.key}`} className="mkt-gallery__stage" aria-live="polite">
        <article className={`mkt-family-profile is-${active.key}`}>
          <header><span>XO checkout design family</span><strong>{String(activeIndex + 1).padStart(2, "0")} / 07</strong></header>
          <div className="mkt-family-profile__copy"><small>{active.character}</small><h3>{active.name}</h3><p>{active.note}</p></div>
          <aside><span className="mkt-family-profile__type" aria-hidden="true">Aa</span><small>Signature principles</small><ul>{active.principles.map((principle) => <li key={principle}>{principle}</li>)}</ul><div className="mkt-family-profile__swatches" aria-hidden="true"><i /><i /><i /></div></aside>
          <footer><span>Public design direction</span><strong>The checkout itself remains private.</strong></footer>
        </article>
      </div>
    </div>
  );
};
