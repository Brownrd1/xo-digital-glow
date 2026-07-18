export type CtaMode = "early_access" | "free_download";

export interface SiteRoute {
  label: string;
  href: string;
  description?: string;
}

export interface ProductClaim {
  title: string;
  body: string;
  proof: string;
}

export interface CheckoutFamily {
  key: string;
  name: string;
  character: string;
  note: string;
  principles: [string, string, string];
}

export interface CommerceScenario {
  id: string;
  label: string;
  cart: string;
  location: string;
  cartValue: string;
  signals: string[];
  route: string[];
  outcome: string;
  explanation: string;
  businessOutcome: string;
  businessValue: string;
  accent: "green" | "blue" | "lilac" | "steel";
}

export interface TierCapability {
  name: "Free" | "Pro" | "Enterprise";
  job: string;
  summary: string;
  featured?: boolean;
  features: string[];
}

export interface UseCase {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  problem: string;
  detects: string[];
  journey: string[];
  outcome: string;
  tier: string;
}

export const CTA_MODE: CtaMode = "early_access";

export const ctaCopy = {
  early_access: { label: "Request early access", href: "/early-access" },
  free_download: { label: "Install XO Free", href: "/download" },
} satisfies Record<CtaMode, { label: string; href: string }>;

export const productNavigation: SiteRoute[] = [
  { label: "Overview", href: "/xo-wp", description: "The complete XO for WooCommerce story" },
  { label: "Checkout", href: "/xo-wp/checkout", description: "Seven branded buying experiences" },
  { label: "Commerce rules", href: "/xo-wp/commerce-rules", description: "The right path for each order" },
  { label: "Quotes & portal", href: "/xo-wp/quotes-and-portal", description: "From request to acceptance and payment" },
  { label: "Intelligence", href: "/xo-wp/intelligence", description: "Visibility, recovery and customer signals" },
];

export const productClaims: ProductClaim[] = [
  {
    title: "Know your customer",
    body: "Capture who the customer is, where they are and the details needed to keep checkout moving.",
    proof: "Customer details, consent and destination context stay connected to the journey.",
  },
  {
    title: "Understands the order",
    body: "Let destination, cart value, product type and fulfilment conditions shape what the customer sees next.",
    proof: "XO reads the conditions around the cart before choosing the next customer path.",
  },
  {
    title: "Your optimal outcome",
    body: "Choose the customer’s path based on what is best for your business.",
    proof: "Create a customer flow that you actually control.",
  },
];

export const checkoutFamilies: CheckoutFamily[] = [
  { key: "standard", name: "Standard", character: "Quiet, familiar and intentionally invisible", note: "For merchants who want customers to complete the purchase without noticing the interface. It stays close to familiar ecommerce patterns and removes unnecessary visual friction.", principles: ["Familiar patterns", "Low distraction", "Fast orientation"] },
  { key: "clean-corporate", name: "Clean Corporate", character: "Structured, credible and businesslike", note: "For established businesses that want the checkout to feel ordered, dependable and unmistakably professional—without becoming decorative or cold.", principles: ["Clear hierarchy", "Measured colour", "Business confidence"] },
  { key: "soft-premium", name: "Soft Premium", character: "Warm, refined and more individual", note: "For lifestyle and design-led brands that need something gentler than corporate UI. Softer surfaces, spacing and tone create distinction without sacrificing clarity.", principles: ["Soft geometry", "Warm palette", "Considered space"] },
  { key: "dark-luxury", name: "Dark Luxury", character: "Dark-mode first, focused and premium", note: "For brands whose identity begins with black, contrast and atmosphere. It keeps the purchase journey legible while making dark presentation feel intentional.", principles: ["Dark-first contrast", "Premium restraint", "Focused attention"] },
  { key: "bold-modern", name: "Bold Modern", character: "Confident, graphic and energetic", note: "For brands built on strong typography and unapologetic colour. The hierarchy is direct and important actions are deliberately difficult to miss.", principles: ["Graphic type", "High contrast", "Decisive action"] },
  { key: "artdeco-gatsby", name: "Art Deco Gatsby", character: "Decorative, geometric and crafted", note: "For brands where ceremony and detail are part of the value. Geometry and ornament add character while the buying path remains disciplined.", principles: ["Geometric rhythm", "Crafted detail", "Formal elegance"] },
  { key: "meridian", name: "Meridian", character: "Editorial, spacious and composed", note: "For design-conscious stores that want checkout to feel calm and considered. Content breathes, choices feel deliberate and the experience avoids visual noise.", principles: ["Editorial pacing", "Generous space", "Calm composition"] },
];

export const commerceScenarios: CommerceScenario[] = [
  {
    id: "metro",
    label: "Everyday delivery",
    cart: "Standard product cart",
    location: "Metro area · postal group 2***",
    cartValue: "R1,840 example cart",
    signals: ["Known destination", "Standard product class", "Delivery rate available"],
    route: ["Branded checkout", "Calculated delivery", "Direct payment"],
    outcome: "A clear payable order",
    explanation: "Nothing about the order needs intervention, so the customer receives a straightforward ecommerce journey.",
    businessOutcome: "Your client can purchase",
    businessValue: "Let a straightforward order proceed to payment without creating extra work for your team.",
    accent: "green",
  },
  {
    id: "value",
    label: "Higher-value cart",
    cart: "Qualifying product collection",
    location: "Eligible delivery area · postal group 7***",
    cartValue: "R4,620 example cart",
    signals: ["Value band reached", "Eligible destination", "Incentive available"],
    route: ["Branded checkout", "Incentive applied", "Adjusted delivery"],
    outcome: "The right offer, automatically",
    explanation: "The customer sees the benefit when the fictional merchant conditions are met—without hunting for a coupon.",
    businessOutcome: "A higher cart value could trigger your free shipping",
    businessValue: "Turn a qualifying basket into a deliberate incentive instead of offering free shipping to every order.",
    accent: "blue",
  },
  {
    id: "remote",
    label: "Complex freight",
    cart: "Mixed and bulky product cart",
    location: "Remote area · postal group 9***",
    cartValue: "R7,980 example cart",
    signals: ["Mixed shipping classes", "Remote destination", "Freight needs confirmation"],
    route: ["Branded checkout", "Delivery held for review", "Formal quotation"],
    outcome: "The sale continues without a bad total",
    explanation: "XO preserves the buying journey while the merchant confirms freight instead of confidently charging the wrong amount.",
    businessOutcome: "We need to give you a personal quotation",
    businessValue: "Keep the sale alive while your team confirms complex freight safely and personally.",
    accent: "lilac",
  },
  {
    id: "collection",
    label: "Customer collection",
    cart: "Collection-ready cart",
    location: "Customer selects a collection point",
    cartValue: "R2,360 example cart",
    signals: ["Collection selected", "Pickup location available", "Collection benefit eligible"],
    route: ["Branded checkout", "Collection point", "Direct order"],
    outcome: "A simpler fulfilment path",
    explanation: "The customer can choose a practical alternative and immediately understand any fictional collection benefit.",
    businessOutcome: "Your order should be collected—we cannot assist with delivery",
    businessValue: "Set an honest fulfilment path when delivery is not commercially or operationally suitable.",
    accent: "steel",
  },
];

export const tiers: TierCapability[] = [
  {
    name: "Free",
    job: "Branded ecommerce foundation",
    summary: "A credible working checkout and quotation foundation—not a time-limited demonstration.",
    features: [
      "Selected branded checkout designs",
      "Quick and guided checkout modes",
      "WooCommerce-native orders",
      "Customer quotation requests",
      "Basic shipping and customer documents",
      "Marketing consent capture",
      "Test and sandbox payment capability",
    ],
  },
  {
    name: "Pro",
    job: "Connected commerce operations",
    summary: "For stores ready to manage the full commercial journey around checkout.",
    featured: true,
    features: [
      "All seven checkout families",
      "Managed quote and invoice dashboard",
      "Customer self-service portal",
      "Live payment mode",
      "Advanced shipping and routing",
      "Automatic discount rules",
      "Pipeline analytics and data controls",
      "Digital products and subscriptions",
    ],
  },
  {
    name: "Enterprise",
    job: "Recovery and intelligence",
    summary: "For teams using connected activity to protect opportunities and understand customer relationships.",
    features: [
      "Dropped-checkout recovery",
      "Quote follow-up automation",
      "Customer opportunity signals",
      "Expanded marketing intelligence",
      "Web traffic and SEO insight",
      "Client 360 workspace",
      "Deeper customer and pipeline visibility",
    ],
  },
];

export const useCases: UseCase[] = [
  {
    slug: "branded-ecommerce",
    eyebrow: "Brand-led ecommerce",
    title: "The store feels premium until the customer reaches checkout.",
    summary: "Replace the generic final step with a responsive buying experience that belongs to the same brand.",
    problem: "The default WooCommerce checkout completes a transaction, but often loses the quality and character that earned the customer’s trust.",
    detects: ["Chosen checkout family", "Quick or guided mode", "Store branding and content"],
    journey: ["Product discovery", "Branded checkout", "Delivery choice", "Order or payment"],
    outcome: "A more coherent customer experience without replacing WooCommerce.",
    tier: "Start with Free; all seven design families are available with Pro.",
  },
  {
    slug: "complex-delivery",
    eyebrow: "Complex delivery",
    title: "Delivery is not one flat number for every cart and destination.",
    summary: "Give known orders a clean delivery path and hold uncertain freight for confirmation without abandoning the customer.",
    problem: "Bulky items, mixed product classes and remote destinations can turn a convenient flat rate into lost margin or failed fulfilment.",
    detects: ["Destination and postcode group", "Cart value band", "Product and shipping class conditions"],
    journey: ["Customer address", "Eligible method", "Calculated, collection or quoted route", "Safe next action"],
    outcome: "Straightforward orders remain straightforward; risky freight stops pretending to be certain.",
    tier: "Basic shipping starts with Free; advanced methods and routing are Pro.",
  },
  {
    slug: "mixed-commerce",
    eyebrow: "Retail and B2B together",
    title: "One store can serve direct buyers and customers who need approval.",
    summary: "Keep ordinary ecommerce fast while formal orders continue through quotation and customer action.",
    problem: "Forcing every customer into a B2B process creates friction, while forcing every order through retail checkout ignores how larger purchases are approved.",
    detects: ["Customer-selected document path", "Delivery certainty", "Order conditions"],
    journey: ["Shared branded checkout", "Direct order or quote request", "Merchant review", "Acceptance and payment"],
    outcome: "The complexity appears only when the sale actually requires it.",
    tier: "Quotation requests begin with Free; managed quote-to-payment operations are Pro.",
  },
  {
    slug: "wholesale-quotes",
    eyebrow: "Wholesale and formal quotations",
    title: "A quotation should be the beginning of a managed sale—not an email dead end.",
    summary: "Move requests through review, documents, acceptance and payment in a journey the merchant and customer can both follow.",
    problem: "Manual documents and inbox follow-ups make it difficult to see which opportunities are active, accepted, stalled or paid.",
    detects: ["Quote request", "Merchant adjustments", "Customer acceptance and payment state"],
    journey: ["Request", "Review", "Quotation", "Acceptance", "Payment and fulfilment"],
    outcome: "A visible commercial pipeline with a clear next action for both sides.",
    tier: "The managed dashboard and client portal are Pro; recovery and deeper intelligence are Enterprise.",
  },
];

export const publicFaqs = [
  ["Does XO replace WooCommerce?", "No. WooCommerce remains the catalogue, inventory and core order foundation. XO improves the buyer and merchant workflows around checkout and more demanding commercial journeys."],
  ["Is Free only a product demo?", "No. Free is intended to be a credible working checkout and quotation foundation. Paid plans add operational depth rather than making Free legitimate retroactively."],
  ["What is available today?", "XO for WooCommerce is the first and only current XO Commerce product. It is in active development, already operating in a live business environment and being opened gradually for structured testing."],
  ["Can an ordinary ecommerce store use XO?", "Yes. A store can begin with a better branded checkout and keep ordinary orders simple. Quotation, routing, portal and intelligence capabilities become valuable as the operation demands more."],
] as const;
