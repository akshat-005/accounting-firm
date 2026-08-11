import type { Metadata } from "next";
import { LegalPage, LegalSection, LegalNote } from "@/components/legal/legal-page";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Regulatory Disclosures",
  description:
    "Important disclosures and risk information relating to the services and content of Ledger & Legacy.",
};

const { contact, name } = siteConfig;

export default function RegulatoryDisclosuresPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Regulatory Disclosures"
      updated="12 August 2026"
      intro="The information below is provided for general awareness. For advice specific to your situation, please speak with us directly."
    >
      <LegalNote>
        Regulatory wording must be verified and completed by the firm&apos;s compliance
        professional before launch — in particular, the exact registration details in
        section 3 and the specific risk statements applicable to the services actually
        offered.
      </LegalNote>

      <LegalSection title="1. General information only">
        <p>
          The content on this website — including articles, guides, resources and
          tools — is provided for general information only. It does not constitute
          legal, tax, accounting, investment or financial advice, and should not be
          relied upon as a substitute for professional advice tailored to your
          circumstances. Please consult a qualified professional before acting.
        </p>
      </LegalSection>

      <LegalSection title="2. Our services">
        <p>
          {name} offers <strong>tax &amp; compliance</strong> services and{" "}
          <strong>investment &amp; wealth</strong> services. Tax, accounting, audit and
          related professional services are carried out in accordance with applicable
          laws and the standards of the Institute of Chartered Accountants of India
          (ICAI). All services are provided under a separate, formal written engagement.
        </p>
      </LegalSection>

      <LegalSection title="3. Regulatory registrations">
        <p>
          Our investment and wealth services are provided in the applicable capacity
          for which the firm is registered. The relevant registration details are set
          out below.
        </p>
        <LegalNote>
          The firm to insert its exact, verified registrations here — for example a
          SEBI Registered Investment Adviser (RIA) number and/or an AMFI Registration
          Number (ARN) as a mutual fund distributor — together with the corresponding
          disclosures each registration requires. Do not publish this page until these
          are confirmed by the compliance adviser.
        </LegalNote>
      </LegalSection>

      <LegalSection title="4. Investment risk disclosures">
        <ul>
          <li>All investments are subject to risk, including the possible loss of capital.</li>
          <li>Returns are not guaranteed and can vary.</li>
          <li>
            Market values fluctuate; the value of investments can go down as well as up.
          </li>
          <li>Past performance is not necessarily indicative of future performance.</li>
          <li>Different investments suit different risk profiles and time horizons.</li>
        </ul>
        <p>
          <strong>
            Mutual fund investments are subject to market risks. Read all scheme-related
            documents carefully before investing.
          </strong>
        </p>
      </LegalSection>

      <LegalSection title="5. No guaranteed outcomes">
        <p>
          Any figures, illustrations or calculators on this website (for example,
          compounding illustrations) are hypothetical, use assumed rates, and are shown
          only to explain concepts. They are not projections, recommendations, or a
          promise of any particular return or outcome.
        </p>
      </LegalSection>

      <LegalSection title="6. Third-party content & links">
        <p>
          This website may reference or link to third-party articles, videos and
          portals. Such content is the responsibility of its authors, and a link does
          not constitute our endorsement or verification of its accuracy.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitation of liability">
        <p>
          {name} accepts no liability for any loss or damage arising from reliance on
          the information or tools provided on this website. Please obtain professional
          advice before making any financial, tax or investment decision.
        </p>
      </LegalSection>

      <LegalSection title="8. Grievances & contact">
        <p>
          For any disclosure-related query or grievance, please contact us at{" "}
          <a href={contact.emailHref}>{contact.email}</a> or{" "}
          <a href={contact.phoneHref}>{contact.phone}</a>. We will respond within the
          applicable regulatory timelines.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
