import React from "react";
export const VisualShowcase = () => {
  return (
    <section id="visualShowcase" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            From Feature Selection to Client Proposal
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            MyAppCostEstimator streamlines your entire estimation workflow in
            minutes.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      Project Type Selection
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Choose your project type and get tailored feature
                      recommendations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="/Screenshot_2025-07-26_at_1.17.51_PM.png"
                  alt="Project type selection screen"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      Estimate Builder
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Set budget, add features, and customize your project
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="/Screenshot_2025-07-26_at_1.18.15_PM.png"
                  alt="Budget and notes configuration screen"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      Professional Proposal
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      Generate detailed project estimates with feature breakdown
                      and costs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="/Screenshot_2025-07-26_at_1.19.13_PM.png"
                  alt="Project estimate with feature breakdown"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
