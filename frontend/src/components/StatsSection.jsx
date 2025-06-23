import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '1000+', label: 'Happy Customers' },
    { value: '5+', label: 'Years in Business' },
    { value: '10+', label: 'Cities Covered' },
    { value: '24x7', label: 'Service Availability' },
  ];

  return (
    <section className="bg-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition duration-300">
              <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
              <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
