import React from 'react';
import { textPrimary, textMuted } from '@/components/ui/Colors';

export default function PrivacyPage() {
  return (
    <main className={`min-h-screen ${textPrimary} bg-white dark:bg-slate-900`}> 
      <div className="container-custom py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className={`${textPrimary} text-4xl font-semibold mb-6`}>Privacy Policy</h1>
          <p className={`${textMuted} mb-6 leading-relaxed`}>
            This Privacy Policy explains how Syangja Sundar Hotel & Khaja Ghar ("we", "our", "us") collects,
            uses, discloses, and protects information when you visit or interact with our website.
          </p>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>Information We Collect</h2>
            <ul className={`${textMuted} list-disc pl-6 space-y-2`}>
              <li>Contact information you provide (name, email, phone number).</li>
              <li>Booking and reservation details when you use our services.</li>
              <li>Usage data from cookies and analytics tools.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>How We Use Your Information</h2>
            <p className={`${textMuted} leading-relaxed`}>
              We use collected information to: respond to inquiries, provide and improve our services, process
              reservations, and comply with legal obligations. We may also use aggregated or anonymized data
              for analytics and business insights.
            </p>
          </section>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>Cookies &amp; Tracking</h2>
            <p className={`${textMuted} leading-relaxed`}>
              We use cookies and similar technologies to operate our site, remember preferences, and measure
              performance. You can control cookies through your browser settings; disabling cookies may
              affect site functionality.
            </p>
          </section>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>Third-Party Services</h2>
            <p className={`${textMuted} leading-relaxed`}>
              We may share data with trusted third parties (payment processors, analytics providers) only as
              necessary to provide the service and under confidentiality commitments.
            </p>
          </section>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>Your Rights</h2>
            <p className={`${textMuted} leading-relaxed`}>
              You may request access, correction, or deletion of personal data we hold about you. To exercise
              these rights, contact us using the details below.
            </p>
          </section>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>Security &amp; Retention</h2>
            <p className={`${textMuted} leading-relaxed`}>
              We take reasonable measures to protect personal information. We retain data only as long as
              necessary for the purposes described and to satisfy legal obligations.
            </p>
          </section>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>Contact</h2>
            <p className={`${textMuted} leading-relaxed`}>
              For questions about this policy or to exercise your rights, email: info@syangjasundar.com
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
