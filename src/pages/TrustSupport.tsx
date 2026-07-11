import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PublicInfoPage, { InfoSection } from "@/components/PublicInfoPage";

const TrustSupport = () => (
  <>
    <Helmet>
      <title>Trust & Support | XO Digital Systems</title>
      <meta name="description" content="Current product status, support boundaries, data and payment responsibilities, compatibility, and responsible disclosure for XO for WooCommerce." />
      <link rel="canonical" href="https://xodigital.systems/trust" />
      <meta name="robots" content="index, follow" />
    </Helmet>

    <PublicInfoPage
      eyebrow="Trust & support"
      title="Clear boundaries before broad access."
      intro="XO for WooCommerce is still in controlled early access. This page states what exists, what support currently means, and which claims we deliberately do not make."
      updated="11 July 2026"
    >
      <InfoSection title="Product status">
        <p><strong>XO for WooCommerce is the only current XO Commerce product.</strong> It is in active development, is already used in a live business environment, and is being opened gradually for structured real-world testing.</p>
        <p>Early access is not the same as broad production availability. Features shown on this website are still verified against the build and plan offered to each participant.</p>
      </InfoSection>

      <InfoSection title="Commerce continuity">
        <p>XO for WooCommerce works with an existing WordPress and WooCommerce store. WooCommerce remains the catalogue, inventory, and core order foundation.</p>
        <p>Some paid-plan workflows connect the store to XO-managed services to support managed quotations, customer action, documents, payments, analytics, and automation. Detailed product data terms will be supplied before those services are activated for a participant.</p>
      </InfoSection>

      <InfoSection title="Payments">
        <p>Payment details are entered into and handled through the payment provider configured for the merchant&apos;s deployment. Gateway availability depends on the verified build, plan, country, provider account, and implementation.</p>
        <p>We do not present XO as independently PCI certified and do not use certification language as a substitute for explaining the actual payment flow.</p>
      </InfoSection>

      <InfoSection title="Security statements">
        <p>Security is treated as an ongoing engineering and operational responsibility. Public descriptions focus on customer-visible safeguards and responsibilities without exposing defensive implementation details.</p>
        <p>Unless a specific certification or audit is named with current supporting evidence, none should be inferred from this website. No online system can guarantee that an incident will never occur.</p>
      </InfoSection>

      <InfoSection title="Compatibility">
        <p>Current access requires WordPress with WooCommerce. Compatibility can also depend on WordPress, WooCommerce and PHP versions, the active theme, payment and shipping extensions, caching, and store-specific customisations.</p>
        <p>A definitive launch compatibility matrix will be published after representative installation and conflict testing. Early-access evaluation includes a review of the store and workflow rather than an assumption that every configuration is supported.</p>
      </InfoSection>

      <InfoSection title="Early-access support">
        <p>Early-access enquiries and active test deployments are reviewed personally. Support currently focuses on fit assessment, setup, troubleshooting, and structured feedback for participating stores.</p>
        <p><strong>No public response-time or uptime SLA is offered at this stage.</strong> Commercial support levels, service hours, escalation paths, and availability commitments will be published before general release.</p>
        <p>For help or an access discussion, email <a href="mailto:admin@xo.systems.com">admin@xo.systems.com</a> or <Link to="/#contact">send an early-access enquiry</Link>.</p>
      </InfoSection>

      <InfoSection title="Responsible disclosure">
        <p>If you believe you have found a security issue affecting the website or product, email <a href="mailto:admin@xo.systems.com?subject=Security%20report">admin@xo.systems.com</a> with the subject “Security report”. Include enough detail for us to understand and reproduce the concern.</p>
        <p>Do not access data that is not yours, disrupt a live store or service, perform destructive testing, or publish sensitive details before we have had a reasonable opportunity to investigate.</p>
      </InfoSection>

      <InfoSection title="How claims are handled">
        <p>Availability and tier claims are checked against current shipped behaviour. Planned adapters, unverified gateway support, future automation, private architecture, and internal security controls are not presented as public product capability.</p>
        <p>When the evidence changes, the website should change with it.</p>
      </InfoSection>
    </PublicInfoPage>
  </>
);

export default TrustSupport;
