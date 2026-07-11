import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "submitting" | "success" | "error";

const Contact = () => {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Quietly accept bot submissions without storing them.
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
        headers: {
          apikey: publishableKey,
          Authorization: `Bearer ${publishableKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Website enquiry request failed", error);
    }

    if (!response?.ok) {
      console.error("Website enquiry submission failed", response?.status);
      setErrorMessage("Your enquiry could not be delivered. Nothing was submitted. Please try again or email us directly.");
      setState("error");
      return;
    }

    form.reset();
    setState("success");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Early access</p>
            <h2 className="text-balance text-3xl font-bold leading-tight md:text-5xl">Tell us how your business sells.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We are working with a limited number of WooCommerce businesses while XO moves through structured real-world testing.
            </p>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p><span className="font-semibold text-foreground">A good fit:</span> formal quotations, variable delivery, repeat accounts, customer approvals, or order workflows that no longer fit a basic retail checkout.</p>
              <p><span className="font-semibold text-foreground">What happens next:</span> we review the store and workflow, then respond personally if XO is a suitable fit for the current programme.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm md:p-8">
            {state === "success" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status">
                <div className="mb-5 rounded-full border border-emerald-400/20 bg-emerald-400/10 p-4"><CheckCircle2 className="h-7 w-7 text-emerald-300" /></div>
                <h3 className="text-2xl font-semibold">Your enquiry has been received.</h3>
                <p className="mt-3 max-w-md text-muted-foreground">Thank you. We will review the information and respond personally where there is a strong fit.</p>
                <Button type="button" variant="hero-outline" className="mt-7" onClick={() => setState("idle")}>Send another enquiry</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="company_website">Leave this field empty</label>
                  <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div><label htmlFor="name" className="mb-2 block text-sm font-medium">Name *</label><Input id="name" name="name" required minLength={2} maxLength={120} autoComplete="name" placeholder="Your name" className="bg-background/60" /></div>
                  <div><label htmlFor="email" className="mb-2 block text-sm font-medium">Work email *</label><Input id="email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@company.com" className="bg-background/60" /></div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div><label htmlFor="company" className="mb-2 block text-sm font-medium">Company</label><Input id="company" name="company" maxLength={160} autoComplete="organization" placeholder="Business name" className="bg-background/60" /></div>
                  <div><label htmlFor="website" className="mb-2 block text-sm font-medium">WooCommerce store</label><Input id="website" name="website" type="url" maxLength={500} autoComplete="url" placeholder="https://yourstore.com" className="bg-background/60" /></div>
                </div>

                <div>
                  <label htmlFor="interest" className="mb-2 block text-sm font-medium">What are you interested in? *</label>
                  <select id="interest" name="interest" required defaultValue="early_access" className="flex h-10 w-full rounded-md border border-input bg-background/60 px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="early_access">Early access / product evaluation</option><option value="free">Free plan</option><option value="pro">Pro plan</option><option value="enterprise">Enterprise plan</option><option value="agency">Agency or implementation partnership</option><option value="other">Something else</option>
                  </select>
                </div>

                <div><label htmlFor="message" className="mb-2 block text-sm font-medium">Tell us about the workflow *</label><Textarea id="message" name="message" required minLength={20} maxLength={4000} rows={6} placeholder="What does your business sell, how do customers buy, and where does the current WooCommerce process become difficult?" className="resize-none bg-background/60" /></div>

                <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground"><input name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-input accent-primary" /><span>I agree that XO Digital Systems may use these details to review my enquiry and contact me about XO. We will not add you to marketing without separate permission. See the <a href="/privacy" className="font-medium text-foreground underline underline-offset-4">website privacy notice</a>.</span></label>

                {state === "error" && <div role="alert" className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive-foreground"><p>{errorMessage}</p><a href="mailto:admin@xo.systems.com" className="mt-2 inline-block font-semibold underline underline-offset-4">Email admin@xo.systems.com</a></div>}

                <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto" disabled={state === "submitting"}>
                  {state === "submitting" ? "Sending..." : <><span>Request early access</span><Send className="ml-2 h-4 w-4" /></>}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
