import React from "react";

const Package = ({ title, features, price, extra, how, cancellation }) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 shadow-md bg-white mb-8">
      <h3 className="text-xl font-semibold mb-4 text-blue-700">{title}</h3>
      <ul className="list-disc list-inside mb-3 text-gray-700">
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="text-lg font-bold text-green-600 mb-2">{price}</p>
      {extra && (
        <>
          <h4 className="font-semibold text-gray-800">Additional Items:</h4>
          <p className="text-gray-700 mb-2">{extra}</p>
        </>
      )}
      {how && (
        <>
          <h4 className="font-semibold text-gray-800">How it will be done?</h4>
          <ul className="list-disc list-inside mb-2 text-gray-700">
            {how.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </>
      )}
      {cancellation && (
        <>
          <h4 className="font-semibold text-gray-800">Cancellation Policy</h4>
          <p className="text-gray-700 mb-2">{cancellation}</p>
        </>
      )}
      <a
        href="https://wa.me/7988870280"
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Book Now
      </a>
    </div>
  );
};

export default Package;
