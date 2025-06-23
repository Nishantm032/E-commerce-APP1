import React from 'react';

import bgImg from "../assets/package.jpg";
import ami from "../assets/babyfirst.jpg";

const AboutUs = () => {
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
        <h1 className="text-5xl font-bold text-yellow-800">ABOUT US</h1>
        <p className="text-gray-600 text-3xl">Customizable, Simple and Adorable</p>
        <a
          href="https://wa.me/8619107503"
          className="mt-6 mb-8 inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Book Now
        </a>
      </header>

       <div className="md:w-1/3 w-full">
                  <img
                    src={ami}
                    alt="Birthday Decoration"
                    className="w-full rounded-xl shadow-lg object-cover"
                  />
                </div>

 

       <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <span className="font-semibold">A-EVENTS</span> — your trusted partner in turning dreams into unforgettable experiences. We are a full-service event management and decoration company passionate about bringing your ideas to life.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          From intimate birthday parties and vibrant baby showers to grand weddings and high-impact corporate events, our dedicated team specializes in planning, designing, and executing flawless events that leave lasting impressions.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our services include theme-based decorations, customized backdrops, balloon arrangements, floral setups, lighting, and complete event coordination. We believe every celebration should be unique — and we make it our mission to deliver magic tailored to your vision and budget.
        </p>
        <p className="text-lg text-gray-700">
          With creativity, commitment, and attention to detail at our core, Eventura is here to make your moments truly special. Let's celebrate, together.
        </p>
      </div>
    </section>

    

   


    
    </div>
    
    </>
  );
};

export default AboutUs;
