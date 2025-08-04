import React from "react";
export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-10 sm:pt-16 lg:pt-8 xl:pt-16">
            <div className="sm:text-center lg:text-left px-4 sm:px-8 xl:pl-0">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Estimate your app cost in 60 sec</span>
                <span className="block text-[#3B82F6]">— before you overshoot</span>
                <span className="block">your budget</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Select platforms, screens, features — get a transparent cost breakdown.
              </p>
              
              {/* New styled input field */}
              <div className="mt-6 sm:mt-8">
                <div className="relative max-w-lg sm:mx-auto lg:mx-0">
                  <input
                    type="text"
                    placeholder="I want to build an app like Airbnb for pets..."
                    className="block w-full px-4 py-4 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-xl shadow-lg">
                  <a
                    href="https://appcostestimator.com/"
                    className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl md:text-lg md:px-10"
                  >
                    Show me my cost →
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#how-it-works"
                    className="w-full flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 md:text-lg md:px-10"
                  >
                    How It Works
                  </a>
                </div>
              </div>
              
              {/* Estimate Output Preview */}
              <div className="mt-8 sm:mt-10">
                <div className="text-xs text-gray-500 mb-3 text-center lg:text-left">
                  See the detailed breakdown you'll get:
                </div>
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-md mx-auto lg:mx-0">
                  <img
                    className="w-full h-auto rounded-md"
                    src="/Screenshot_2025-07-26_at_1.17.51_PM.png"
                    alt="Example cost estimate output showing feature breakdown"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-l-2xl shadow-2xl"
          src="/Screenshot_2025-07-26_at_1.16.32_PM.png"
          alt="Dashboard with project estimates"
        />
      </div>
    </div>
  );
};
