import React from "react";
export const VisualShowcase = () => {
  return (
    <section id="visualShowcase" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            From Feature Selection to Client Proposal
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Our streamlined workflow gets you from idea to professional proposal in minutes
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mr-3">1</div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Project Type Selection
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Choose your project type and get tailored feature
                    recommendations instantly.
                  </p>
                </div>
                <div className="overflow-hidden">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    src="/Screenshot_2025-07-26_at_1.17.51_PM.png"
                    alt="Project type selection screen"
                  />
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-sm mr-3">2</div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Estimate Builder
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Set budget, add features, and customize your project
                    requirements with our intelligent builder.
                  </p>
                </div>
                <div className="overflow-hidden">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    src="/Screenshot_2025-07-26_at_1.18.15_PM.png"
                    alt="Budget and notes configuration screen"
                  />
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-sm mr-3">3</div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Professional Proposal
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Generate detailed project estimates with feature breakdown
                    and professional formatting.
                  </p>
                </div>
                <div className="overflow-hidden">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    src="/Screenshot_2025-07-26_at_1.19.13_PM.png"
                    alt="Project estimate with feature breakdown"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
