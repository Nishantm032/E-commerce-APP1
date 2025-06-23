import React from 'react';
import { Link } from 'react-router-dom';


const services = [
  {
    title: 'Marriage Anniversary',
    image: '/images/m1.jpg',
    description: 'We provide stunning balloon arches, backdrops, and custom balloon art.',
  },

  {
    title: 'Traditional Wedding Decor',
    image: '/images/marriages.jpg',
    description: 'Elegant traditional Indian wedding setups with vibrant drapes, lights, and floral themes.',
  },

  {
    title: 'Birthday',
    image: '/images/bday.jpg',
    description: 'Capture to be one of your next wishes',
  },

  {
    title: 'Theme Setup',
    image: '/images/theme.jpg',
    description: 'Decorations that perfectly match your event theme and mood.',
  },
  
  {
    title: 'Event Photography',
    image: '/images/p1.jpg',
    description: 'Capture your special moments with professional event photography.',
  },

  {
    title: 'Props & Rentals',
    image: '/images/party.jpg',
    description: 'Get unique decor props and party essentials on rent for your event.',
  },

  {
    title: 'Surprise Planning',
    image: '/images/babyfirst.jpg',
    description: 'Plan unforgettable surprises for birthdays, anniversaries, and proposals.',
  },

  {
    title: 'New Year Celebration',
    image: '/images/newyear.jpg',
    description: 'Plan unforgettable surprises for birthdays, anniversaries, and proposals.',
  },
  
  {
    title: 'Festival Party',
    image: '/images/partiii.jpg',
    description: 'Plan unforgettable festival event party with us.',
  },

];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">Our Services</h2>
        <p className="text-gray-600 mb-12">
          We bring your celebrations to life with premium decoration and event services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <img  src={service.image} alt={service.title}  className="w-full h-48 object-cover rounded-lg mb-4"
 />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-12">
  <Link
    to="/packages"
    className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full text-lg hover:bg-blue-700 transition"
  >
    Explore Event Packages
  </Link>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
