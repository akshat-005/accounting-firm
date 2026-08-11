import type { Metadata } from "next";
import { LegalPage, LegalSection, LegalNote } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the Ledger & Legacy website, including disclaimers and governing law.",
};

const { contact, name, url } = siteConfig;

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="12 August 2026"
      intro={`These terms govern your use of the ${name} website. By using this website, you agree to them.`}
    >
      <LegalNote>
        This is a draft prepared in good faith and should be reviewed and finalised by
        the firm&apos;s legal adviser before the website goes live.
      </LegalNote>

      <LegalSection title="1. Acceptance of these terms">
        <p>
          By accessing or using <a href={url}>{url.replace(/^https?:\/\//, "")}</a>{" "}
          (the &ldquo;website&rdquo;), you agree to be bound by these Terms of Service.
          If you do not agree, please do not use the website.
        </p>
      </LegalSection>

      <LegalSection title="2. About this website">
        <p>
          This website provides general information about {name} and our services, along
          with articles and resources. Its content is provided for general information
          only and may be updated or changed at any time without notice.
        </p>
      </LegalSection>

      <LegalSection title="3. No professional relationship">
        <p>
          Visiting this website, reading its content, using its tools or submitting an
          enquiry does <strong>not</strong> create any client, advisory, fiduciary or
          other professional relationship between you and {name}. We provide
          professional services only under a separate, formal written engagement agreed
          with you.
        </p>
      </LegalSection>

      <LegalSection title="4. Not professional advice">
        <p>
          Nothing on this website constitutes legal, tax, accounting, investment,
          financial or other professional advice, and it should not be relied upon as a
          substitute for advice from a qualified professional who has reviewed your
          specific circumstances. Any tools or illustrations (for example, calculators)
          are for general guidance only and are not projections or guarantees.
        </p>
      </LegalSection>

      <LegalSection title="5. Investments carry risk">
        <p>
          Where the website refers to investments, please note that all investments
          carry risk and returns are not guaranteed. Please read our{" "}
          <a href="/regulatory-disclosures">Regulatory Disclosures</a> for important
          risk information before acting on anything you read here.
        </p>
      </LegalSection>

      <LegalSection title="6. Intellectual property">
        <p>
          The content, design, logo and materials on this website are owned by or
          licensed to {name} and are protected by applicable laws. You may not copy,
          reproduce, republish or distribute them without our prior written permission.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-party links">
        <p>
          This website may link to third-party websites and resources. We do not
          control and are not responsible for their content, accuracy or availability,
          and a link does not imply our endorsement.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of liability">
        <p>
          To the fullest extent permitted by law, {name} shall not be liable for any
          direct, indirect, incidental or consequential loss or damage arising from
          your use of, or reliance on, this website or its content. The website is
          provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
        </p>
      </LegalSection>

      <LegalSection title="9. Privacy">
        <p>
          Your use of the website is also governed by our{" "}
          <a href="/privacy-policy">Privacy Policy</a>, which explains how we handle
          your personal data.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing law & jurisdiction">
        <p>
          These terms are governed by and construed in accordance with the laws of
          India. The courts at Kolkata, West Bengal shall have exclusive jurisdiction
          over any dispute arising out of or relating to this website or these terms.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to these terms">
        <p>
          We may revise these terms from time to time. The &ldquo;last updated&rdquo;
          date above reflects the current version, and continued use of the website
          means you accept the revised terms.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact">
        <p>
          Questions about these terms? Email{" "}
          <a href={contact.emailHref}>{contact.email}</a> or call{" "}
          <a href={contact.phoneHref}>{contact.phone}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
