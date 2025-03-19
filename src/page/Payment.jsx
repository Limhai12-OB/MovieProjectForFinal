import React, { useState } from "react";

export default function PaymentSec() {
  const [selectedCard, setSelectedCard] = useState("");

  const cardOptions = [
    { value: "$4.99/month", label: "$4.99/month" },
    { value: "$14.99/month", label: "$14.99/month" },
    { value: "$24.99/month", label: "$24.99/month" },
  ];

  const getCardImage = () => {
    switch (selectedCard) {
      case "$4.99/month":
        return "https://i.imghippo.com/files/HKNq7000KQ.jpg";
      case "$14.99/month":
        return "https://i.imghippo.com/files/HKNq7000KQ.jpg";
      case "$24.99/month":
        return "https://i.imghippo.com/files/HKNq7000KQ.jpg";
      default:
        return "";
    }
  };

  return (
    <section className=" text-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2 gap-0">
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-blue-600/30 z-10"></div>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
            alt="Payment illustration"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white">Payment</h1>
            <p className="text-gray-400 mt-2">
              Complete your subscription purchase
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-sm text-gray-400">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="border border-gray-600 bg-gray-700/50 w-full px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-gray-400">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="border border-gray-600 bg-gray-700/50 w-full px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Email Address</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="border border-gray-600 bg-gray-700/50 w-full px-4 py-3 rounded-lg text-white "
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm ">Payment Method</label>
              <select
                value={selectedCard}
                onChange={(e) => setSelectedCard(e.target.value)}
                className="w-full   border border-gray-600 bg-gray-700/50 px-4 py-3 rounded-lg text-white "
              >
                <option value="">Select a plan</option>
                {cardOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {selectedCard && (
                <div className="mt-2">
                  <img
                    src={getCardImage()}
                    alt={`${selectedCard} logo`}
                    className="border rounded-md"
                  />
                </div>
              )}
            </div>

            {/* Card Display Area
            <div className="mt-6 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Selected Plan</p>
                  <h3 className="font-bold text-amber-500">Gold Plan</h3>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Monthly Price</p>
                  <p className="font-bold">$14.99</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors px-8 py-4 font-bold rounded-lg shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:ring-offset-gray-800">
              Complete Payment
            </button>
            <p className="text-center text-gray-400 text-sm mt-4">
              By proceeding, you agree to our Terms of Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
