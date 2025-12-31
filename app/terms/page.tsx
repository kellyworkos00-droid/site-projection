'use client';

import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: December 31, 2025</p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            {/* 1. Agreement to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using Kelly Work OS (the &quot;Service&quot;), you agree to be bound by these Terms of Service. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* 2. Use License */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) 
                on Kelly Work OS for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on Kelly Work OS</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or &quot;mirroring&quot; the materials on any other server</li>
                <li>Violating any applicable laws or regulations related to access to or use of the Service</li>
              </ul>
            </section>

            {/* 3. User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and password and for restricting 
                access to your computer. You agree to accept responsibility for all activities that occur under your account 
                or password. You must notify us immediately of any unauthorized uses of your account.
              </p>
            </section>

            {/* 4. Data and Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data and Information</h2>
              <p>
                All data you input into Kelly Work OS remains your property. We provide secure storage and backup of your data. 
                You grant us the right to use your data solely for the purpose of providing the Service and to create aggregate, 
                anonymized analytics.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Kelly OS encrypts data in transit and at rest</li>
                <li>Daily automated backups are maintained</li>
                <li>You may export or delete your data at any time</li>
                <li>We do not sell your business data to third parties</li>
              </ul>
            </section>

            {/* 5. Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Plans are billed monthly or annually based on your selection</li>
                <li>Subscriptions renew automatically unless canceled</li>
                <li>Refunds may be issued within 14 days of purchase</li>
                <li>Prices may change with 30 days notice</li>
                <li>All fees are exclusive of applicable taxes</li>
              </ul>
            </section>

            {/* 6. Acceptable Use Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Acceptable Use Policy</h2>
              <p>
                You agree not to use Kelly Work OS for any of the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Violating any applicable laws or regulations</li>
                <li>Infringing on intellectual property rights</li>
                <li>Harassing, abusing, or threatening other users</li>
                <li>Distributing malware, viruses, or malicious code</li>
                <li>Attempting to gain unauthorized access to systems</li>
                <li>Scraping or automated access without permission</li>
                <li>Spamming or phishing activities</li>
              </ul>
            </section>

            {/* 7. Disclaimer of Warranties */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Disclaimer of Warranties</h2>
              <p>
                Kelly Work OS and all materials are provided on an &quot;as is&quot; basis without any warranties. 
                We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties 
                including, without limitation, implied warranties or conditions of merchantability, fitness for a 
                particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            {/* 8. Limitations of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Limitations of Liability</h2>
              <p>
                In no event shall Kelly Work OS or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
                use the materials on Kelly Work OS, even if we or our authorized representative has been notified orally or 
                in writing of the possibility of such damage.
              </p>
            </section>

            {/* 9. Accuracy of Materials */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Accuracy of Materials</h2>
              <p>
                The materials appearing on Kelly Work OS could include technical, typographical, or photographic errors. 
                We do not warrant that any of the materials on Kelly Work OS are accurate, complete, or current. 
                We may make changes to the materials contained on Kelly Work OS at any time without notice.
              </p>
            </section>

            {/* 10. Links */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Links</h2>
              <p>
                We have not reviewed all of the sites linked to our website and are not responsible for the contents of any 
                such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked 
                website is at the user&apos;s own risk.
              </p>
            </section>

            {/* 11. Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Modifications</h2>
              <p>
                We may revise these terms of service for Kelly Work OS at any time without notice. By using this website, 
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            {/* 12. Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Kenya, 
                and you irrevocably submit to the exclusive jurisdiction of the courts in Nairobi, Kenya.
              </p>
            </section>

            {/* 13. Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <ul className="list-none mt-4 space-y-2">
                <li><strong>Email:</strong> kellyworkos00@gmail.com</li>
                <li><strong>Phone:</strong> +254 798 293 831</li>
                <li><strong>Address:</strong> Nairobi, Kenya</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
