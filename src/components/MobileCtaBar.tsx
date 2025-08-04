import React from "react";
import { ArrowRightIcon } from "lucide-react";
export const MobileCtaBar = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 md:hidden z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="p-2 rounded-lg bg-[#3B82F6] shadow-lg sm:p-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-[#1D4ED8]">
                <ArrowRightIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">Generate Your First Estimate</span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="https://appcostestimator.com/"
                className="flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#3B82F6] bg-white hover:bg-gray-50 w-full min-h-[44px]"
              >
                Show me my cost →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
