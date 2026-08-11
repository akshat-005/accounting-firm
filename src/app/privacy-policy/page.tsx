import type { Metadata } from "next";
import { LegalPage, LegalSection, LegalNote } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ledger & Legacy collects, uses and protects your personal data, in line with India's Digital Personal Data Protection Act, 2023.",
};

const { contact, name } = siteConfig;

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="12 August 2026"
      intro={`${name} respects your privacy. This policy explains what personal data we collect through this website, why we collect it, and the choices and rights you have.`}
    >
      <LegalNote>
        This is a draft policy prepared in good faith and should be reviewed and
        finalised by the firm&apos;s legal / compliance adviser before the website
        goes live.
      </LegalNote>

      <LegalSection title="1. Who we are">
        <p>
          {name} is a Kolkata-based financial services firm offering tax &amp;
          compliance and investment &amp; wealth advisory. For the purposes of
          India&apos;s Digital Personal Data Protection Act, 2023 (&ldquo;DPDP
          Act&rdquo;), we act as the <strong>Data Fiduciary</strong> for the personal
          data you share with us through this website.
        </p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <p>We collect only what we need to respond to you and provide our services:</p>
        <ul>
          <li>
            <strong>Information you give us</strong> — such as your name, phone
            number, email address, the service you&apos;re interested in and any
            message you send us through our consultation, referral or contact
            options.
          </li>
          <li>
            <strong>Referral details</strong> — if you refer someone, the contact
            details you provide about them. Please share these only with that
            person&apos;s consent.
          </li>
          <li>
            <strong>Technical information</strong> — basic, non-identifying usage and
            device information collected automatically to keep the site secure and
            working well.
          </li>
        </ul>
        <p>
          We do <strong>not</strong> ask for or collect sensitive financial documents
          (such as PAN cards, bank statements or tax records) through this website.
          Those are handled separately, securely, only after you formally engage us.
        </p>
      </LegalSection>

      <LegalSection title="3. How we use your information">
        <ul>
          <li>To respond to your enquiries and schedule consultations.</li>
          <li>To provide and administer the services you ask for.</li>
          <li>To communicate with you about your request.</li>
          <li>To maintain, secure and improve this website.</li>
          <li>To meet our legal, regulatory and professional obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Your consent">
        <p>
          We process your personal data on the basis of your consent, which you give
          when you submit your details to us. You may withdraw your consent at any
          time by contacting us (see below); withdrawing consent will not affect
          processing already carried out, and may mean we can no longer provide a
          particular service.
        </p>
      </LegalSection>

      <LegalSection title="5. How we share information">
        <p>
          We do not sell your personal data. We may share it only with trusted
          service providers who help us operate this website or deliver our services,
          and only as needed, or where required by law, regulation or a competent
          authority.
        </p>
      </LegalSection>

      <LegalSection title="6. Data retention">
        <p>
          We keep your personal data only for as long as necessary to fulfil the
          purpose for which it was collected, to maintain our business records, and to
          comply with applicable legal and regulatory requirements — after which it is
          deleted or anonymised.
        </p>
      </LegalSection>

      <LegalSection title="7. Data security">
        <p>
          We take reasonable technical and organisational measures to protect your
          personal data against unauthorised access, alteration, disclosure or loss.
          No method of transmission over the internet is completely secure, however,
          and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="8. Cookies">
        <p>
          This website may use essential cookies needed for it to function and, where
          applicable, analytics to understand how the site is used. You can control
          cookies through your browser settings.
        </p>
      </LegalSection>

      <LegalSection title="9. Your rights under the DPDP Act">
        <p>Subject to the DPDP Act, you have the right to:</p>
        <ul>
          <li>Obtain a summary of the personal data we process about you;</li>
          <li>Request correction or completion of inaccurate or incomplete data;</li>
          <li>Request erasure of your data where it is no longer needed;</li>
          <li>
            Nominate another person to exercise your rights in the event of death or
            incapacity; and
          </li>
          <li>Raise a grievance about how your data is handled.</li>
        </ul>
        <p>To exercise any of these rights, please contact us using the details below.</p>
      </LegalSection>

      <LegalSection title="10. Children">
        <p>
          This website is intended for adults. We do not knowingly collect the
          personal data of children without verifiable parental consent as required by
          the DPDP Act.
        </p>
      </LegalSection>

      <LegalSection title="11. Third-party links">
        <p>
          Our website and resources may link to third-party sites (for example
          articles, videos or government portals). We are not responsible for the
          privacy practices or content of those sites; please review their policies.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes to this policy">
        <p>
          We may update this policy from time to time. The &ldquo;last updated&rdquo;
          date at the top reflects the latest version.
        </p>
      </LegalSection>

      <LegalSection title="13. Grievances & contact">
        <p>
          For any question, request or grievance regarding your personal data, please
          contact us. We aim to acknowledge and address grievances within the
          timelines prescribed under the DPDP Act (not exceeding 90 days).
        </p>
        <ul>
          <li>
            Email: <a href={contact.emailHref}>{contact.email}</a>
          </li>
          <li>
            Phone: <a href={contact.phoneHref}>{contact.phone}</a>
          </li>
          <li>
            Address: {contact.address.line1}, {contact.address.line2},{" "}
            {contact.address.city} — {contact.address.postalCode}
          </li>
        </ul>
        <LegalNote>
          Before launch, the firm should name a specific grievance / data protection
          contact person here, as expected under the DPDP Act.
        </LegalNote>
      </LegalSection>
    </LegalPage>
  );
}
