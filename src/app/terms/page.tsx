import React from 'react';
import { textPrimary, textMuted } from '@/components/ui/Colors';

export default function TermsPage() {
  return (
    <main className={`min-h-screen ${textPrimary} bg-white dark:bg-slate-900`}>
      <div className="container-custom py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className={`${textPrimary} text-4xl font-semibold mb-6`}>Terms &amp; Conditions</h1>
          <p className={`${textMuted} mb-6 leading-relaxed`}>These Terms and Conditions govern your use of our website and services.</p>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>Acceptance of Terms</h2>
            <p className={`${textMuted} leading-relaxed`}>By accessing or using our site you agree to these terms. If you disagree, please do not use the site.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>Services</h2>
            <p className={`${textMuted} leading-relaxed`}>We provide hospitality and booking services. Descriptions on the site do not constitute a contractual offer; confirmations occur through our booking process.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>User Obligations</h2>
            <p className={`${textMuted} leading-relaxed`}>You agree to provide accurate information and comply with applicable laws. You may not use the site for unlawful purposes.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>Intellectual Property</h2>
            <p className={`${textMuted} leading-relaxed`}>All content on this site is owned or licensed by us. You may not reproduce materials without permission.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>Disclaimers &amp; Liability</h2>
            <p className={`${textMuted} leading-relaxed`}>Services are provided "as is". We disclaim warranties to the fullest extent permitted by law. Liability is limited as allowed by applicable law.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>Governing Law</h2>
            <p className={`${textMuted} leading-relaxed`}>These terms are governed by the laws of the jurisdiction in which we operate.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>Changes</h2>
            <p className={`${textMuted} leading-relaxed`}>We may update these terms; changes will be posted on this page with a revised effective date.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${textPrimary} text-2xl font-medium mb-3`}>Contact</h2>
            <p className={`${textMuted} leading-relaxed`}>Questions about these terms: info@syangjasundar.com</p>
          </section>

        </div>
      </div>
    </main>
  );
}
