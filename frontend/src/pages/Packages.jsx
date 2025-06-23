import React from "react";
import Package from "../components/Package";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import bgImg from "../assets/package.jpg";
import bday from "../assets/bday.jpg";
import M1 from "../assets/marriages.jpg";

const Packages = () => {
  return (
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
        <h1 className="text-5xl font-bold text-yellow-800">Our Packages</h1>
        <p className="text-gray-600 text-3xl">Customizable, Simple and Adorable</p>
        <a
          href="https://wa.me/8619107503"
          className="mt-4 mb-8 inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Book Now
        </a>
      </header>

      <section className="mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          What do we offer?
        </h2>
        <p className="text-gray-700">
          We are offering you the best balloon decoration in Delhi, Birthday
          decoration in Delhi, Hotel decoration in Delhi, Baby shower decoration
          in Delhi , Home decoration in Delhi, Anniversary decoration in Delhi,
          valentine decoration In delhi Which starts from Just Rs. 820 onwards.
          All these services are also available in Gurgaon , Ghazibad , Noida ,
          Faridabad .
        </p>
      </section>

      <ServicesSection />

      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Popular Packages
        </h2>

        <Package
          title="baby Birthday "
          features={["100 balloons", "Ribbons", "Two colors of your choice"]}
          price="₹799 only"
          extra="Happy birthday foil (₹350), custom alphabets (₹70 each), fairy lights, curtains, bottle foils, stars etc."
          how={[
            "100 balloon decorations",
            "Inclusive of decorator charges",
            "Balloon colors of your choice",
          ]}
          cancellation="Cancellations 2 days prior are eligible for a full refund. Same-day cancellations are non-refundable."
        />

        <div className="flex flex-col md:flex-row items-start gap-8 p-6">
          {/* Left: Package content */}
          <div className="md:w-2/3 w-full">
            <Package
              title="Function Party Special"
              features={[
                "200 colorful balloons (ceiling and wall)",
                "Happy Birthday foil banner",
                "Custom name foil balloons",
                "Star and heart-shaped foil balloons",
                "Fairy lights and ribbons",
                "Birthday cap and mask set (10 pcs)",
                "Balloon arch or ring setup",
              ]}
              price="₹1599 only"
              extra="Cake table decoration, LED numbers (₹200 each), flower bouquets, selfie stand, personalized welcome board."
              how={[
                "Balloon arch at backdrop or ring setup",
                "Foil balloons arranged with the birthday name",
                "Ceiling and wall covered with colorful balloons",
                "Lights and stars to enhance ambiance",
                "Decorator visits your location and completes setup in 1–1.5 hours",
              ]}
              cancellation="Free cancellation up to 24 hours before the event. Same-day cancellations are non-refundable."
            />
          </div>

          {/* Right: Image */}
          <div className="md:w-1/3 w-full">
            <img
              src={M1}
              alt="Birthday Decoration"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 p-6">
          {/* Left: Package content */}
          <div className="md:w-2/3 w-full">
            <Package
              title="Birthday Party Special"
              features={[
                "200 colorful balloons (ceiling and wall)",
                "Happy Birthday foil banner",
                "Custom name foil balloons",
                "Star and heart-shaped foil balloons",
                "Fairy lights and ribbons",
                "Birthday cap and mask set (10 pcs)",
                "Balloon arch or ring setup",
              ]}
              price="₹1999 only"
              extra="Cake table decoration, LED numbers (₹200 each), flower bouquets, selfie stand, personalized welcome board."
              how={[
                "Balloon arch at backdrop or ring setup",
                "Foil balloons arranged with the birthday name",
                "Ceiling and wall covered with colorful balloons",
                "Lights and stars to enhance ambiance",
                "Decorator visits your location and completes setup in 1–1.5 hours",
              ]}
              cancellation="Free cancellation up to 24 hours before the event. Same-day cancellations are non-refundable."
            />
          </div>

          {/* Right: Image */}
          <div className="md:w-1/3 w-full">
            <img
              src={bday}
              alt="Birthday Decoration"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* You can add more <PackageCard /> here for Package 2, 3, etc. */}
      </section>

      <footer className="text-center mt-12">
        <p className="text-gray-700 mb-4">
          Get your decoration done in just 1 hour. Call us to get started!
        </p>
        <a
          href="https://wa.me/8619107503"
          className="inline-block bg-blue-600 text-white px-6 py-4 mb-2 rounded-lg hover:bg-blue-700 transition"
        >
          Call Now
        </a>
      </footer>

      <Footer />
    </div>
  );
};

export default Packages;
