import React from 'react';
import bgImg from "../assets/package.jpg";

const ContactUs = () => {
  return (
    <>

     <div className="px-4 py-12 max-w-8xl mx-auto bg-gray-50">
      <header
        className="text-center mb-12"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-5xl font-bold text-yellow-800">CONTACT US</h1>
        <p className="text-gray-600 text-3xl">Customizable, Simple and Adorable</p>
        <a
          href="https://wa.me/8619107503"
          className="mt-4 mb-8 inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Book Now
        </a>
      </header>

  

 


    </div>
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Have questions, suggestions, or want to book your event? We'd love to hear from you.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info / Location */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Get in Touch</h3>
          <p className="text-gray-700 mb-4">We usually respond within a few hours.</p>
          <div className="space-y-4 text-gray-800">
            <p><strong>Phone:</strong> +91 8619107503</p>
            <p><strong>Email:</strong> contact@AEVENT.in</p>
            <p><strong>Location:</strong> Jaipur, Rajasnthan India</p>
            <p><strong>Working Hours:</strong> 9:00 AM – 9:00 PM (All Days)</p>
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default ContactUs;
