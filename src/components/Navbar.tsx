import React from "react";
import { MenuIcon } from "lucide-react";
export const Navbar = () => {
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
                href="https://scopecraft-hazel.vercel.app/"
                className="ml-3 px-4 py-2 rounded-md text-sm font-medium text-white bg-[#3B82F6] hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#3B82F6] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3B82F6]">
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
