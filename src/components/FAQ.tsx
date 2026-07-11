import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/content/faqs";

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
