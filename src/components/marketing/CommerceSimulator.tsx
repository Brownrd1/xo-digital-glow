import { useState } from "react";
import { ArrowRight, Check, MapPin, PackageOpen, Route, Store, WalletCards } from "lucide-react";
import { commerceScenarios } from "@/content/site";

export const CommerceSimulator = ({ compact = false }: { compact?: boolean }) => {
  const [activeId, setActiveId] = useState(commerceScenarios[0].id);
  const active = commerceScenarios.find((scenario) => scenario.id === activeId) ?? commerceScenarios[0];

  return (
    <div className={`mkt-simulator${compact ? " is-compact" : ""}`}>
      <div className="mkt-simulator__tabs" role="tablist" aria-label="Example commerce journeys">
        {commerceScenarios.map((scenario) => (
          <button key={scenario.id} id={`scenario-tab-${scenario.id}`} type="button" role="tab" aria-selected={scenario.id === active.id} aria-controls="scenario-result" onClick={() => setActiveId(scenario.id)}>
            <span>{scenario.label}</span><small>{scenario.cart}</small>
          </button>
        ))}
      </div>
      <div id="scenario-result" className={`mkt-simulator__result is-${active.accent}`} role="tabpanel" aria-labelledby={`scenario-tab-${active.id}`} aria-live="polite">
        <div className="mkt-simulator__cart">
          <div><PackageOpen aria-hidden="true" /><span><small>Cart</small><strong>{active.cart}</strong></span></div>
          <div><MapPin aria-hidden="true" /><span><small>Destination</small><strong>{active.location}</strong></span></div>
          <div><WalletCards aria-hidden="true" /><span><small>Example value</small><strong>{active.cartValue}</strong></span></div>
        </div>
        <div className="mkt-simulator__signals">
          <small>WHAT XO CAN RESPOND TO</small>
          <ul>{active.signals.map((signal) => <li key={signal}><Check aria-hidden="true" />{signal}</li>)}</ul>
        </div>
        <div className="mkt-simulator__route">
          <div className="mkt-simulator__route-label"><Route aria-hidden="true" /><span><small>Customer path</small><strong>{active.outcome}</strong></span></div>
          <ol>{active.route.map((step, index) => <li key={step}><span>{index + 1}</span>{step}{index < active.route.length - 1 && <ArrowRight aria-hidden="true" />}</li>)}</ol>
          <p>{active.explanation}</p>
        </div>
        <div className="mkt-simulator__business">
          <Store aria-hidden="true" />
          <div><small>Business point of view</small><strong>{active.businessOutcome}</strong></div>
          <p>{active.businessValue}</p>
        </div>
        <p className="mkt-simulator__notice">Illustrative “Your Company” scenario. These presets demonstrate customer outcomes, not a merchant’s private rules or live prices.</p>
      </div>
    </div>
  );
};
