import React from "react";
import { CheckIcon } from "lucide-react";

export const Pricing = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Beta Pricing (Coming Soon)
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Join our beta and help shape the future pricing while locking in exclusive discounts
          </p>
          <div className="mt-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              🚀 Early Access SaaS
            </span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Free Tier */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">Free</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">$0</span>
                <span className="text-lg text-gray-600">/month</span>
              </div>
              <p className="mt-4 text-gray-600">Perfect for trying out the platform</p>
            </div>
            
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Up to 3 proposals</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Basic feature templates</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">PDF export</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Community support</span>
              </li>
            </ul>

            <div className="mt-8">
              <button className="w-full bg-gray-100 text-gray-800 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200">
                Coming Soon
              </button>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-500 transform hover:scale-105 transition-transform duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">$29</span>
                <span className="text-lg text-gray-600">/month</span>
              </div>
              <p className="mt-4 text-gray-600">For growing freelancers and agencies</p>
            </div>
            
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Unlimited proposals</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Custom branding</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Advanced templates</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Priority support</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Analytics dashboard</span>
              </li>
            </ul>

            <div className="mt-8">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200">
                Coming Soon
              </button>
            </div>
          </div>

          {/* Pro+ Tier */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">Pro+</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">$99</span>
                <span className="text-lg text-gray-600">/month</span>
              </div>
              <p className="mt-4 text-gray-600">For agencies and enterprise users</p>
            </div>
            
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Everything in Pro</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">API integrations</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Team collaboration</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">White-label solutions</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                <span className="text-gray-700">Dedicated support</span>
              </li>
            </ul>

            <div className="mt-8">
              <button className="w-full bg-gray-100 text-gray-800 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200">
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Join our beta program to lock in future discounts and help shape our pricing
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Join Beta & Help Shape Pricing
          </button>
        </div>
      </div>
    </section>
  );
};