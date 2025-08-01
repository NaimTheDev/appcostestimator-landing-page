import React, { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-[#1D4ED8]">
              <span className="text-[#3B82F6]">MyApp</span>CostEstimator
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#features"
                className="px-3 py-2 text-sm font-medium hover:text-[#3B82F6]"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="px-3 py-2 text-sm font-medium hover:text-[#3B82F6]"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="px-3 py-2 text-sm font-medium hover:text-[#3B82F6]"
              >
                Pricing
              </a>
              <a
                href="#login"
                className="px-3 py-2 text-sm font-medium hover:text-[#3B82F6]"
              >
                Login
              </a>
              <a
                href="https://appcostestimator.com/"
                className="ml-3 px-4 py-2 rounded-md text-sm font-medium text-white bg-[#3B82F6] hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#3B82F6] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3B82F6]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB] shadow-sm px-4 pt-4 pb-6">
          <div className="flex flex-col space-y-2">
            <a
              href="#features"
              className="px-3 py-2 text-sm font-medium hover:text-[#3B82F6]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="px-3 py-2 text-sm font-medium hover:text-[#3B82F6]"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="https://appcostestimator.com/"
              className="mt-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-[#3B82F6] hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
