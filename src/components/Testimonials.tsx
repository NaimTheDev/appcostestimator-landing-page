import React from "react";

export const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Trusted by developers and agencies
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-sm">
                SC
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">Sarah Chen</div>
                <div className="text-sm text-gray-500">React Developer</div>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              "Finally stopped undercharging! This tool helped me justify my rates with clear breakdowns. Clients love the transparency."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-sm">
                MR
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">Mike Rodriguez</div>
                <div className="text-sm text-gray-500">Agency Owner</div>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              "Saves me 3+ hours per estimate. The professional PDFs make my small agency look enterprise-level."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                DK
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">David Kim</div>
                <div className="text-sm text-gray-500">Full-Stack Developer</div>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              "No more guessing or spreadsheet nightmares. Quick, accurate estimates that actually close deals."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};