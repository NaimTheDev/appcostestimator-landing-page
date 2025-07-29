import React from 'react';
export const SocialProof = () => {
  return <section className="py-12 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Freelancers Are Saying
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Join hundreds of freelancers and agencies who've improved their
            estimation process.
          </p>
        </div>
        <div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="h-full flex flex-col justify-between bg-white p-8 rounded-lg shadow-lg">
              <blockquote className="mt-8">
                <div className="relative text-lg font-medium text-gray-700">
                  <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Finally, a quoting tool that doesn't suck. I was tired of
                    spreadsheets and guessing. MyAppCostEstimator has saved me
                    countless hours and helped me win bigger projects.
                  </p>
                </div>
                <footer className="mt-4">
                  <p className="text-base font-semibold text-[#3B82F6]">
                    Sarah K., Freelance React Developer
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="h-full flex flex-col justify-between bg-white p-8 rounded-lg shadow-lg">
              <blockquote className="mt-8">
                <div className="relative text-lg font-medium text-gray-700">
                  <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    I used to undercharge by at least 30%. With
                    MyAppCostEstimator, I'm finally charging what I'm worth and
                    clients appreciate the detailed breakdown.
                  </p>
                </div>
                <footer className="mt-4">
                  <p className="text-base font-semibold text-[#3B82F6]">
                    Michael T., Agency Owner
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="h-full flex flex-col justify-between bg-white p-8 rounded-lg shadow-lg">
              <blockquote className="mt-8">
                <div className="relative text-lg font-medium text-gray-700">
                  <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    The professional PDFs have completely changed how clients
                    perceive my business. I look more professional and can focus
                    on coding instead of paperwork.
                  </p>
                </div>
                <footer className="mt-4">
                  <p className="text-base font-semibold text-[#3B82F6]">
                    Alex J., Full-Stack Developer
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>;
};