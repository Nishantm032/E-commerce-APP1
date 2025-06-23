import React from 'react';

const testimonials = [
  {
    name: 'Ritika Sharma',
    feedback: 'A-EVENTS made my son’s birthday unforgettable! The decoration was vibrant and perfectly themed.',
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Shalini',
    feedback: 'Excellent service, very professional team! Highly recommended for any kind of celebration.',
    image: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Laksh',
    feedback: 'We hired them for our anniversary party and it was beyond expectations. Loved their work!!',
    image: 'https://i.pravatar.cc/150?img=15',
  },
];

const HappyCustomers = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-12">Happy Customers</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((customer, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={customer.image}
                alt={customer.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">{customer.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">"{customer.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
