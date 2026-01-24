import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export default function PrivacyPage() {
  return (
    <Section className="pt-20">
      <Card>
        <h1 className="text-3xl font-semibold text-text">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted">Effective date: January 24, 2026</p>
        <p className="mt-6 text-sm text-muted">
          This Privacy Policy explains how uLiquid (“we,” “us,” “our”) collects and uses information on
          uliquid.vip (the “Website”). The Website is a marketing site. Customer account actions, licensing,
          and VPS details are managed in the Customer Portal / License Manager at license-server.uliquid.vip.
        </p>

        <div className="mt-6 space-y-4 text-sm text-muted">
          <div>
            <h2 className="text-base font-semibold text-text">Information we collect</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Contact information you submit (e.g., name, email, company) via forms or email.</li>
              <li>Basic usage data (e.g., pages viewed, referrer, device/browser type).</li>
              <li>Communications you send to us (e.g., support requests or inquiries).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">How we use information</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Respond to inquiries and provide information about uLiquid Market Maker.</li>
              <li>Improve Website performance, content, and user experience.</li>
              <li>Provide security, prevent abuse, and maintain operational integrity.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">License Manager and service data</h2>
            <p className="mt-2">
              Licensing, VPS provisioning, and customer management occur in the Customer Portal / License Manager
              at license-server.uliquid.vip and may be subject to additional privacy terms. The Website does not
              host or store exchange API keys, trading activity, or bot configurations.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">Cookies and analytics</h2>
            <p className="mt-2">
              We may use cookies or similar technologies to operate the Website and understand usage patterns.
              You can manage cookies in your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">Sharing</h2>
            <p className="mt-2">
              We do not sell personal information. We may share data with service providers who help us operate
              the Website, or when required by law.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">Data retention</h2>
            <p className="mt-2">
              We retain information only as long as needed for the purposes described above, unless longer
              retention is required by law.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">Security</h2>
            <p className="mt-2">
              We take reasonable measures to protect information, but no system is fully secure. Do not send
              sensitive data through public forms on the Website.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">Your choices</h2>
            <p className="mt-2">
              You may request access, updates, or deletion of your contact information by emailing us.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">Contact</h2>
            <p className="mt-2">
              For privacy questions, contact <span className="text-text">privacy@uliquid.vip</span>.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">Changes</h2>
            <p className="mt-2">
              We may update this policy from time to time. The effective date above reflects the latest version.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
