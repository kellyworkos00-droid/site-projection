import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelly Work OS - Run Your Entire Business From One System",
  description: "Kelly Work OS is an all-in-one business operating system for invoices, inventory, finance, teams, projects, and analytics — built for growing companies.",
  keywords: "business management, inventory management, invoicing, business operating system, Kelly Work OS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
