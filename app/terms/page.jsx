import LegalView from '../../components/LegalView.jsx';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms governing the use of West Estimating\u2019s website and estimating services.',
  alternates: { canonical: '/terms' }
};

export default function TermsPage() {
  return (
    <LegalView title="Terms of Service" updated="July 2026">
      <h2>Agreement to Terms</h2>
      <p>
        By using westestimating.com or engaging West Estimating for estimating, takeoff, or
        drafting services, you agree to these terms.
      </p>

      <h2>Services</h2>
      <p>
        West Estimating provides quantity takeoff, cost estimating, and architectural drafting
        services based on the plans, drawings, and specifications you provide. Estimates reflect
        our professional judgment at the time of preparation and are not a guarantee of final
        construction cost, bid outcome, or contract award.
      </p>

      <h2>Client Responsibilities</h2>
      <ul>
        <li>Provide accurate, current, and complete plans or scope documents</li>
        <li>Review deliverables and flag discrepancies promptly</li>
        <li>Use estimates as one input among your own professional judgment before bidding</li>
      </ul>

      <h2>Turnaround & Delivery</h2>
      <p>
        Turnaround times quoted are estimates based on project scope and current workload. Rush
        requests are accommodated where possible and may carry an additional fee, agreed in
        advance.
      </p>

      <h2>Confidentiality</h2>
      <p>
        Plans and project information you share with us are treated as confidential and used only
        to prepare the requested deliverable. We're happy to sign a project-specific NDA on
        request.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        West Estimating's liability for any estimate or deliverable is limited to the fees paid
        for that specific service. We are not liable for indirect, incidental, or consequential
        damages arising from use of our estimates.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. Continued use of our website or services
        after changes are posted constitutes acceptance of the revised terms.
      </p>

      <h2>Contact</h2>
      <p>Questions? Email sales@westestimating.com or call (737) 770-7167.</p>
    </LegalView>
  );
}
