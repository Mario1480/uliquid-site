import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – uLiquid Market Maker",
  description:
    "Terms governing use of uliquid.vip and the uLiquid Market Maker marketing site.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <Section className="pt-20">
      <Card>
        <h1 className="text-3xl font-semibold text-text">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted">Effective date: January 24, 2026</p>
        <p className="mt-6 text-sm text-muted">
          These Terms govern your use of uliquid.vip (the “Website”). The Website provides marketing
          information about uLiquid Market Maker. Customer licensing, VPS management, and subscriptions are
          handled in the Customer Portal / License Manager at license-server.uliquid.vip and may be subject to
          additional terms.
        </p>

        <div className="mt-6 space-y-4 text-sm text-muted">
          <div>
            <h2 className="text-base font-semibold text-text">Use of the Website</h2>
            <p className="mt-2">
              You may use the Website for lawful purposes only. You agree not to misuse the Website, attempt to
              disrupt it, or access it using automated scraping or unauthorized methods.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">No investment advice</h2>
            <p className="mt-2">
              The Website does not provide investment, legal, or tax advice. Any information provided is for
              general informational purposes only.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">Licenses and managed VPS</h2>
            <p className="mt-2">
              uLiquid Market Maker is offered via a license model. The subscription includes a dedicated VPS
              provisioned and maintained by uLiquid. License limits are enforced by the Market Maker runtime.
              Pricing, features, and limits may change and are confirmed in the License Manager.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">Account and portal terms</h2>
            <p className="mt-2">
              Access to the Customer Portal / License Manager may require additional agreements. Your use of
              the portal is subject to the terms presented there.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">Intellectual property</h2>
            <p className="mt-2">
              All content, trademarks, and materials on the Website are owned by uLiquid or its licensors and
              are protected by applicable laws. You may not use our branding without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">Disclaimer</h2>
            <p className="mt-2">
              The Website is provided “as is” and “as available.” We do not guarantee that it will be
              error-free or uninterrupted.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">Limitation of liability</h2>
            <p className="mt-2">
              To the maximum extent permitted by law, uLiquid will not be liable for any indirect, incidental,
              special, or consequential damages arising from use of the Website.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">Changes</h2>
            <p className="mt-2">
              We may update these Terms from time to time. The effective date above reflects the latest version.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-text">Contact</h2>
            <p className="mt-2">
              Questions about these Terms can be sent to <span className="text-text">legal@uliquid.vip</span>.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
