import LegalView from '../../components/LegalView.jsx';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How West Estimating collects, uses, and protects information submitted through this website.',
  alternates: { canonical: '/privacy' }
};

export default function PrivacyPage() {
  return (
    <LegalView title="Privacy Policy" updated="July 2026">
      <h2>Overview</h2>
      <p>
        West Estimating ("we", "us", "our") respects your privacy. This policy explains what
        information we collect through westestimating.com, how we use it, and the choices you
        have.
      </p>

      <h2>Information We Collect</h2>
      <p>
        When you submit our contact form, we collect the details you provide — your name, email
        address, phone number, company name, service of interest, and message. We do not collect
        payment information through this website.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to your estimate request or inquiry</li>
        <li>To prepare and deliver quotes, proposals, and takeoffs you request</li>
        <li>To send project-related updates about work you've asked us to perform</li>
      </ul>
      <p>
        We do not sell or rent your personal information to third parties. Project plans and
        drawings you share with us are treated as confidential and used solely to prepare your
        estimate.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain contact form submissions and project files for as long as reasonably necessary
        to provide our services and maintain business records, after which they are deleted or
        anonymized.
      </p>

      <h2>Your Choices</h2>
      <p>
        You can request access to, correction of, or deletion of your personal information at any
        time by emailing{' '}
        <a href="mailto:sales@westestimating.com">sales@westestimating.com</a>.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be directed to sales@westestimating.com or (737) 770-7167.
      </p>
    </LegalView>
  );
}
