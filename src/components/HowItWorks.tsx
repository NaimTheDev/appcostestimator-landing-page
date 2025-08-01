import React from "react";
import { CheckSquareIcon, DollarSignIcon, FileTextIcon } from "lucide-react";
export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How MyAppCostEstimator Works
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Three simple steps to professional project estimates.
          </p>
        </div>
        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#3B82F6] text-white mx-auto">
                <CheckSquareIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                1. Select Project Type
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Choose your project type and get a pre-configured template with
                recommended features.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#3B82F6] text-white mx-auto">
                <DollarSignIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                2. Customize Features & Budget
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Add features, set your hourly rate, and adjust the budget to
                match client requirements.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#3B82F6] text-white mx-auto">
                <FileTextIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">
                3. Generate Professional Proposal
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Download a professional, branded PDF proposal with detailed
                feature breakdown and costs.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://appcostestimator.com/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#3B82F6] hover:bg-[#1D4ED8]"
          >
            Try It Now
          </a>
        </div>
      </div>
    </section>
  );
};
