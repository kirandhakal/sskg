import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/terms-bg.svg')" }}>
      <div className="min-h-screen bg-white/90 dark:bg-black/70 backdrop-blur-sm">
        <div className="container-custom py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-black mb-6">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-6">These Terms and Conditions govern your use of our website and services.</p>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-3">Acceptance of Terms</h2>
              <p className="text-muted-foreground">By accessing or using our site you agree to these terms. If you disagree, please do not use the site.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-3">Services</h2>
              <p className="text-muted-foreground">We provide hospitality and booking services. Descriptions on the site do not constitute a contractual offer; confirmations occur through our booking process.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-3">User Obligations</h2>
              <p className="text-muted-foreground">You agree to provide accurate information and comply with applicable laws. You may not use the site for unlawful purposes.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-3">Intellectual Property</h2>
              <p className="text-muted-foreground">All content on this site is owned or licensed by us. You may not reproduce materials without permission.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-3">Disclaimers & Liability</h2>
              <p className="text-muted-foreground">Services are provided "as is". We disclaim warranties to the fullest extent permitted by law. Liability is limited as allowed by applicable law.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-3">Governing Law</h2>
              <p className="text-muted-foreground">These terms are governed by the laws of the jurisdiction in which we operate.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-3">Changes</h2>
              <p className="text-muted-foreground">We may update these terms; changes will be posted on this page with a revised effective date.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold mb-3">Contact</h2>
              <p className="text-muted-foreground">Questions about these terms: info@syangjasundar.com</p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
