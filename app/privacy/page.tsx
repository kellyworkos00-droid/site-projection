'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: December 31, 2025</p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
              <p>
                Kelly Work OS (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                use our website and service.
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Name and email address</li>
                <li>Phone number</li>
                <li>Company name and address</li>
                <li>Payment information (processed securely via Stripe/M-Pesa)</li>
                <li>Account username and password (encrypted)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Business Data</h3>
              <p>When you use Kelly Work OS, you provide:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Invoice and sales data</li>
                <li>Inventory and product information</li>
                <li>Customer and client details</li>
                <li>Financial records and transactions</li>
                <li>Employee and team information</li>
                <li>Project and task management data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatic Information</h3>
              <p>We automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>IP address and device information</li>
                <li>Browser type and operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referral source and clickstream data</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>To provide and improve Kelly Work OS service</li>
                <li>To process transactions and send confirmation emails</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To respond to inquiries and provide customer support</li>
                <li>To generate aggregate analytics and insights</li>
                <li>To detect and prevent fraud and abuse</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            {/* 3. Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
              <p>
                We implement comprehensive security measures to protect your information:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>256-bit SSL/TLS encryption for data in transit</li>
                <li>AES-256 encryption for data at rest</li>
                <li>Secure password hashing with bcrypt</li>
                <li>Daily automated backups in multiple geographic locations</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and role-based permissions</li>
                <li>GDPR and data protection compliance</li>
              </ul>
            </section>

            {/* 4. Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Retention</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Business data is retained as long as your account is active</li>
                <li>You may request data deletion at any time</li>
                <li>Upon account termination, we retain data for 30 days before deletion</li>
                <li>Backups may persist for up to 90 days</li>
                <li>Legal obligations may require us to retain data longer</li>
              </ul>
            </section>

            {/* 5. Sharing Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Sharing Your Information</h2>
              <p>
                We do not sell, trade, or rent your personal information. We may share information:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>With service providers (payment processors, cloud hosts) under strict agreements</li>
                <li>With your team members as permitted by your account settings</li>
                <li>When required by law or legal process</li>
                <li>To prevent fraud, abuse, or security issues</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            {/* 6. Your Privacy Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Privacy Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your data in a portable format</li>
                <li>Opt-out of marketing communications</li>
                <li>Restrict processing of your data</li>
                <li>Lodge a complaint with data protection authorities</li>
              </ul>
            </section>

            {/* 7. Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Cookies</h2>
              <p>
                We use cookies to enhance your experience. Cookies help us:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Remember your login preferences</li>
                <li>Understand site usage patterns</li>
                <li>Provide personalized content</li>
                <li>Prevent fraud and security issues</li>
              </ul>
              <p className="mt-4">
                You can control cookie settings in your browser. Disabling cookies may affect service functionality.
              </p>
            </section>

            {/* 8. Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Third-Party Links</h2>
              <p>
                Kelly Work OS may contain links to third-party websites. We are not responsible for their privacy practices. 
                We encourage you to review their privacy policies before providing personal information.
              </p>
            </section>

            {/* 9. Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Children&apos;s Privacy</h2>
              <p>
                Kelly Work OS is not intended for children under 13 years old. We do not knowingly collect information from 
                children. If we become aware of such collection, we will take steps to delete such information immediately.
              </p>
            </section>

            {/* 10. GDPR Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. GDPR & Data Protection</h2>
              <p>
                We comply with the General Data Protection Regulation (GDPR) and Kenya&apos;s Data Protection Act:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>We have a legal basis for all data processing</li>
                <li>We conduct data protection impact assessments</li>
                <li>We have Data Processing Agreements with vendors</li>
                <li>We appoint a Data Protection Officer</li>
                <li>We report data breaches within 72 hours</li>
              </ul>
            </section>

            {/* 11. Policy Updates */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Policy Updates</h2>
              <p>
                We may update this Privacy Policy periodically. Material changes will be communicated via email or 
                through the service. Your continued use implies acceptance of updated policies.
              </p>
            </section>

            {/* 12. Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
              <p>
                For privacy concerns or to exercise your rights, contact us at:
              </p>
              <ul className="list-none mt-4 space-y-2">
                <li><strong>Email:</strong> kellyworkos00@gmail.com</li>
                <li><strong>Phone:</strong> +254 798 293 831</li>
                <li><strong>Data Protection Officer:</strong> privacy@kellyworkos.com</li>
                <li><strong>Address:</strong> Nairobi, Kenya</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
