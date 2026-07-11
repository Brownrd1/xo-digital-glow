import { Helmet } from "react-helmet-async";
import PublicInfoPage, { InfoSection } from "@/components/PublicInfoPage";

const Privacy = () => (
  <>
    <Helmet>
      <title>Website Privacy Notice | XO Digital Systems</title>
      <meta name="description" content="How XO Digital Systems handles information submitted through this website and its early-access enquiry form." />
      <link rel="canonical" href="https://xodigital.systems/privacy" />
      <meta name="robots" content="index, follow" />
    </Helmet>

    <PublicInfoPage
      eyebrow="Privacy"
      title="A clear notice for this website."
      intro="This notice explains what happens to information you submit through the XO Digital Systems website, including an early-access enquiry. It is deliberately scoped to this public website."
      updated="11 July 2026"
    >
      <InfoSection title="Scope">
        <p>This notice covers the public website at <strong>xodigital.systems</strong> and information submitted through its enquiry form or by email.</p>
        <p>It is not the product privacy notice for merchants using XO for WooCommerce or for customers buying through a merchant&apos;s store. Product-specific data handling terms will be published and supplied before broader product access.</p>
      </InfoSection>

      <InfoSection title="Information we receive">
        <p>When you submit an enquiry, we receive the details you choose to provide:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>your name and work email address;</li>
          <li>your company and store URL, when supplied;</li>
          <li>the plan or relationship you are interested in;</li>
          <li>your description of the store or workflow;</li>
          <li>the page used to submit the enquiry and the time consent was given.</li>
        </ul>
        <p>Our hosting and security providers may also process ordinary technical request information needed to deliver and protect the website, such as an IP address, browser information, timestamps, and error or abuse signals.</p>
      </InfoSection>

      <InfoSection title="Why we use it">
        <ul className="list-disc space-y-2 pl-5">
          <li>to review whether XO is a suitable fit for your business;</li>
          <li>to respond to your enquiry and continue a conversation you requested;</li>
          <li>to protect the form and website from spam, misuse, and technical failure;</li>
          <li>to maintain an appropriate record of early-access discussions.</li>
        </ul>
        <p>Submitting an enquiry does not subscribe you to marketing. We will seek separate permission before adding you to a marketing list.</p>
      </InfoSection>

      <InfoSection title="Sharing and sale">
        <p>We do not sell information submitted through this website. Information may be handled by service providers that help us host, secure, store, or deliver the website and its communications. They receive only the access needed to provide those services.</p>
        <p>We may disclose information where required by law, or where reasonably necessary to protect the rights, safety, and integrity of XO Digital Systems, its users, or the public.</p>
      </InfoSection>

      <InfoSection title="Retention and security">
        <p>We keep enquiry information only while it is reasonably needed to evaluate and respond to the enquiry, maintain necessary business records, resolve disputes, or meet legal and security obligations. Records that are no longer needed should be deleted or de-identified.</p>
        <p>We use proportionate technical and organisational safeguards. No internet service can promise absolute security, and this notice does not claim a certification or guarantee that has not been independently established.</p>
      </InfoSection>

      <InfoSection title="Your choices and rights">
        <p>You may ask whether we hold information about you, request access or correction, object to particular processing, or ask us to delete information that is no longer required. We may need to verify your identity before acting on a request.</p>
        <p>Email <a href="mailto:admin@xo.systems.com">admin@xo.systems.com</a> with the subject “Privacy request”. South African data subjects may also contact the <a href="https://inforegulator.org.za/" target="_blank" rel="noreferrer">Information Regulator</a>.</p>
      </InfoSection>

      <InfoSection title="Changes">
        <p>We will update this notice as the website, product access, and data practices develop. Material changes will be reflected on this page with a revised date.</p>
      </InfoSection>
    </PublicInfoPage>
  </>
);

export default Privacy;
