import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const legacyFaqs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We specialise in ecommerce businesses of all sizes—from growing DTC brands to established retailers looking to scale. If you sell online and want to grow smarter, we can help.",
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on scope. A website rebuild might take 8–12 weeks, while ongoing optimisation is continuous. We'll give you a clear timeline upfront after our discovery call.",
  },
  {
    question: "Do you offer ongoing support or just one-off projects?",
    answer: "Both. Many clients start with a project and move into a retainer for ongoing marketing, optimisation, and support. We're flexible based on your needs.",
  },
  {
    question: "What platforms do you work with?",
    answer: "We're platform-agnostic but have deep expertise in Shopify, WooCommerce, and headless commerce solutions. We'll recommend the best fit for your business.",
  },
  {
    question: "How do you measure success?",
    answer: "Everything we do ties back to revenue and growth metrics—conversion rate, customer acquisition cost, lifetime value, and organic visibility. We set KPIs together and report on them regularly.",
  },
  {
    question: "What makes XO Digital Systems different?",
    answer: "We combine deep technical expertise with marketing strategy and AI capabilities. We don't just build—we build to grow. Our systems thinking approach means everything connects.",
  },
];

const faqs = [
  {
    question: "What is XO Digital Systems?",
    answer: "XO Digital Systems is the company building XO Commerce: connected software for businesses with more complex buying and operational journeys.",
  },
  {
    question: "What is available today?",
    answer: "Our first product is XO for WooCommerce, currently in development and opening through limited early access. It brings the XO Commerce direction to WooCommerce stores.",
  },
  {
    question: "Does XO replace WooCommerce?",
    answer: "No. XO works with WooCommerce and extends the customer and merchant journey around checkout, quoting, payment, customer self-service, and commercial visibility.",
  },
  {
    question: "Who is XO for WooCommerce designed for?",
    answer: "It is designed for businesses that have outgrown a basic retail checkout, particularly B2B merchants managing formal quotes, complex delivery, repeat customers, or multi-stage order decisions.",
  },
  {
    question: "Is XO a service agency?",
    answer: "XO is a product company. We can support implementation and commerce engineering where adoption requires it, but services exist to help businesses use the platform successfully.",
  },
  {
    question: "How can I evaluate the product?",
    answer: "Join the early-access conversation. We are working with a limited number of suitable WooCommerce businesses while development and real-world testing continue.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32 relative bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't see what you're looking for, get in touch.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glow-card border-border data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-6 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
