import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-700 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold text-white">Kelly Work OS</span>
            </div>
            <p className="text-gray-400 max-w-md mb-4">
              An all-in-one business operating system for invoices, inventory, finance, teams, projects, and analytics — built for growing companies.
            </p>
            <div className="text-sm text-gray-500">
              <p className="mb-1">
                <span className="text-gray-400 font-semibold">Founded by:</span> Zachary Ndegwa
              </p>
              <p className="mb-1">
                <a href="mailto:kellyworkos00@gmail.com" className="hover:text-blue-400 transition-colors">
                  kellyworkos00@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+254798293831" className="hover:text-blue-400 transition-colors">
                  +254 798 293 831
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#what-is-kelly" className="hover:text-blue-400 transition-colors">
                  What is Kelly OS
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-blue-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#modules" className="hover:text-blue-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-blue-400 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <a href="#get-started" className="hover:text-blue-400 transition-colors">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#get-started" className="hover:text-blue-400 transition-colors">
                  Request Demo
                </a>
              </li>
              <li>
                <a href="#get-started" className="hover:text-blue-400 transition-colors">
                  Talk to Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kelly Work OS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
