import React from "react";
import { SearchIcon, FileTextIcon, BriefcaseIcon } from "lucide-react";
export const ProblemSolution = () => {
  return (
    <section id="problemSolution" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Our Estimator?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Everything you need to create professional app cost estimates in minutes
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <SearchIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🔍 Quick & Realistic Estimates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get accurate project estimates in minutes, not hours. Our AI-powered system 
                  analyzes your requirements and provides realistic cost breakdowns.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <FileTextIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  📄 Auto-Generated Proposal PDFs
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional, branded proposals ready to send to clients. Complete with 
                  detailed feature breakdowns, timelines, and cost justifications.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <BriefcaseIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  💼 Built for Freelancers & PMs
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Designed specifically for independent developers and project managers. 
                  Stop undercharging and start winning more profitable projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
