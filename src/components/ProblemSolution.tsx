import React from "react";
import { DollarSignIcon, ClockIcon, FileTextIcon } from "lucide-react";
export const ProblemSolution = () => {
  return (
    <section id="problemSolution" className="py-12 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Freelance Devs Deserve Better Tools
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Stop losing money and time with outdated estimation methods.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-[#3B82F6] rounded-md shadow-lg">
                      <DollarSignIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Stop Undercharging
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Most freelancers underestimate project complexity and leave
                    money on the table. MyAppCostEstimator ensures you charge
                    what you're worth.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-[#3B82F6] rounded-md shadow-lg">
                      <ClockIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Prevent Scope Creep
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Detailed feature breakdowns create clear boundaries that
                    protect you from endless revisions and feature requests.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-[#3B82F6] rounded-md shadow-lg">
                      <FileTextIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    Save Hours on Proposals
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Stop wasting evenings crafting proposals. Generate
                    professional client-ready PDFs in minutes, not hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
