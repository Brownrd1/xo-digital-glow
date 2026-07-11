import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  ["What is XO Commerce?", "XO Commerce is the platform direction being built by XO Digital Systems. It connects the parts of a complex buying journey that normally become fragmented after checkout—including quotation, order decisions, customer action, payment, and commercial visibility."],
  ["What can I use today?", "XO for WooCommerce is our first and only current XO Commerce product. It is in active development and already running in a live business environment. We are opening access gradually while broader real-world testing continues."],
  ["Does XO replace WooCommerce?", "No. WooCommerce remains your catalogue, inventory, and core commerce foundation. XO improves and extends the experience around checkout and complex order workflows, allowing you to keep the store and processes you already depend on."],
  ["What does the Free plan include?", "Free is a genuinely useful WooCommerce checkout and quotation system—not a time-limited demo. It includes selected branded checkout designs, quick and guided modes, WooCommerce-based orders, customer quotation requests, basic shipping, customer documents, marketing consent capture, and test payment capability."],
  ["Why would I upgrade to Pro?", "Pro is for businesses ready to manage the complete B2B journey through XO. It adds all seven checkout designs, the managed quote and invoice dashboard, client self-service, live payments, advanced shipping and routing, pipeline analytics, digital products, subscriptions, and deeper operational controls."],
  ["What is Enterprise for?", "Enterprise is designed for teams that want to recover and grow more revenue from activity already moving through the platform. It adds deeper customer visibility, recovery workflows, automation, expanded marketing intelligence, and a more complete view of each client relationship."],
  ["Who is XO for WooCommerce best suited to?", "XO is especially valuable for manufacturers, wholesalers, distributors, contractors, and other B2B or mixed-commerce businesses handling formal quotes, variable delivery, repeat accounts, customer approval, or multi-stage order decisions."],
  ["Will customers need to learn a complicated new system?", "No. The customer experience is designed to feel like a natural extension of your store. Buyers receive a clear branded journey, while the more advanced management capabilities remain on the merchant side."],
  ["Can the checkout match my brand?", "Yes. XO for WooCommerce currently includes seven checkout design families with responsive quick and guided experiences. Available designs and customisation options depend on the selected plan."],
  ["How do I join early access?", "Start a conversation with us and tell us about your WooCommerce store, current workflow, and the problems you are trying to solve. We are prioritising businesses that are a strong fit for structured testing and direct implementation support."],
] as const;

const FAQ = () => (
  <section id="faq" className="relative bg-gradient-to-b from-background via-muted/30 to-background py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="mb-16 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Clear answers</p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Before you bring XO into your store</h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">What exists today, how the plans differ, and what adopting XO means for your WooCommerce business.</p>
      </div>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map(([question, answer], index) => (
            <AccordionItem key={question} value={`item-${index}`} className="glow-card border-border data-[state=open]:border-primary/50">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium hover:text-primary hover:no-underline">{question}</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 leading-relaxed text-muted-foreground">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
