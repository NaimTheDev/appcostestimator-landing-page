import React from "react";
export const CallToAction = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Stop guessing.</span>
          <span className="block text-[#3B82F6]">
            Start quoting like a pro.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://scopecraft-hazel.vercel.app/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3B82F6] hover:bg-[#1D4ED8]"
            >
              Get Started Free
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#3B82F6] bg-white hover:bg-gray-50"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
