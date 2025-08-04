import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How accurate are the estimates?",
    answer: "Our estimates are based on industry standards and real project data from thousands of apps. While every project is unique, most estimates are within 10-20% of final costs when requirements are clearly defined."
  },
  {
    question: "Will I be contacted after using the tool?",
    answer: "No, we don't contact you unless you specifically request it. The tool is completely self-service and your information is only used to generate your estimate."
  },
  {
    question: "Is my information private and secure?",
    answer: "Absolutely. We don't share your information with third parties, and all data is encrypted. You can use the tool anonymously if you prefer."
  },
  {
    question: "Can I customize the estimates for my clients?",
    answer: "Yes! The tool allows you to adjust hourly rates, add custom features, and include your own branding in the generated PDF proposals."
  }
];

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                onClick={() => toggleItem(index)}
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};