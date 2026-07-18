import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export const EarlyAccessForm = () => {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company_website") || "").trim()) {
      setState("success");
      form.reset();
      return;
    }

    setState("submitting");
    setErrorMessage("");
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim().toLowerCase(),
      company: String(data.get("company") || "").trim() || null,
      website: String(data.get("website") || "").trim() || null,
      interest: String(data.get("interest") || "early_access") as "early_access" | "free" | "pro" | "enterprise" | "agency" | "other",
      message: String(data.get("message") || "").trim(),
      source_path: window.location.pathname,
      consent_at: new Date().toISOString(),
    };

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    let response: Response | null = null;
    try {
      response = await fetch(`${supabaseUrl}/rest/v1/website_enquiries`, {
        method: "POST",
        headers: { apikey: publishableKey, Authorization: `Bearer ${publishableKey}`, "Content-Type": "application/json", Prefer: "return=minimal" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Website enquiry request failed", error);
    }

    if (!response?.ok) {
      setErrorMessage("Your enquiry could not be delivered. Nothing was submitted. Please try again or email us directly.");
      setState("error");
      return;
    }

    form.reset();
    setState("success");
  };

  if (state === "success") {
    return (
      <div className="mkt-form-status" role="status">
        <div><CheckCircle2 aria-hidden="true" /><h2>Your enquiry has been received.</h2><p>Thank you. We will review the store and workflow, then respond personally where there is a strong fit for the current programme.</p><button className="mkt-button" type="button" onClick={() => setState("idle")}>Send another enquiry</button></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={state === "submitting"}>
      <div style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }} aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label><input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="mkt-form-grid">
        <div className="mkt-field"><label htmlFor="name">Name *</label><input id="name" name="name" required minLength={2} maxLength={120} autoComplete="name" placeholder="Your name" /></div>
        <div className="mkt-field"><label htmlFor="email">Work email *</label><input id="email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@company.com" /></div>
        <div className="mkt-field"><label htmlFor="company">Company</label><input id="company" name="company" maxLength={160} autoComplete="organization" placeholder="Your Company" /></div>
        <div className="mkt-field"><label htmlFor="website">WooCommerce store</label><input id="website" name="website" type="url" maxLength={500} autoComplete="url" placeholder="https://yourstore.com" /></div>
        <div className="mkt-field is-wide"><label htmlFor="interest">What are you interested in? *</label><select id="interest" name="interest" required defaultValue="early_access"><option value="early_access">Early access / product evaluation</option><option value="free">Free plan</option><option value="pro">Pro plan</option><option value="enterprise">Enterprise plan</option><option value="agency">Agency or implementation partnership</option><option value="other">Something else</option></select></div>
        <div className="mkt-field is-wide"><label htmlFor="message">Tell us how the store sells *</label><textarea id="message" name="message" required minLength={20} maxLength={4000} placeholder="What do you sell, how do customers buy, and where does the current WooCommerce journey become difficult?" /></div>
      </div>
      <label className="mkt-consent"><input name="consent" type="checkbox" required /><span>I agree that XO Digital Systems may use these details to review my enquiry and contact me about XO. We will not add you to marketing without separate permission. See the <a href="/privacy"><u>website privacy notice</u></a>.</span></label>
      {state === "error" && <div className="mkt-form-error" role="alert">{errorMessage} <a href="mailto:admin@xo.systems.com"><u>Email admin@xo.systems.com</u></a></div>}
      <button className="mkt-button mkt-button--power" type="submit" disabled={state === "submitting"}>{state === "submitting" ? "Sending…" : <>Request early access <ArrowRight aria-hidden="true" /></>}</button>
    </form>
  );
};
