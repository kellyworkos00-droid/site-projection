import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelly Work OS - All-in-One Business Operating System",
  description: "Kelly Work OS is the complete business operating system for Kenya. Manage invoices, inventory, finances, teams, projects, and analytics in one platform. Perfect for small and growing businesses.",
  keywords: "business management software Kenya, invoicing system, inventory management, business operating system, financial accounting, team management, project management, Kelly Work OS",
  authors: [{ name: "Zachary Ndegwa", url: "https://kellyworkos.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kellyworkos.com",
    siteName: "Kelly Work OS",
    title: "Kelly Work OS - All-in-One Business Operating System",
    description: "Complete business management solution. Invoices, inventory, finance, teams, projects, and AI-powered analytics.",
    images: [
      {
        url: "https://kellyworkos.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kelly Work OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelly Work OS - Business Operating System",
    description: "All-in-one platform for managing your business - invoices, inventory, finances, and more.",
    creator: "@ZacharyNdegwa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="google-site-verification" content="cMHnLLpXcbCWdIlsHVpS-4LzlKNpPauOw9c8_wrs2rM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href="https://kellyworkos.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kelly Work OS",
              description: "All-in-one business operating system",
              url: "https://kellyworkos.com",
              logo: "https://kellyworkos.com/logo.png",
              sameAs: [
                "https://www.instagram.com/kellyworkos",
                "https://www.facebook.com/kellyworkos",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+254-798-293-831",
                contactType: "Customer Support",
                email: "kellyworkos00@gmail.com",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE",
                addressLocality: "Nairobi",
              },
            }),
          }}
        />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
