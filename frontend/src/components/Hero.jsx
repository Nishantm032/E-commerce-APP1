import bgImage from '../assets/p1.jpg';


const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-white text-center"
     style={{
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}

    >
      
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0">
        <img className="h-screen w-full"
 src={bgImage} alt="test" />

      </div>

    
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-white-300">
          Celebrate Every Moment With WOW!
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto ">
          Premium balloon decor & event styling to make your day unforgettable
        </p>
        <a
          href="/contact"
          className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full text-lg hover:bg-yellow-300 transition"
        >
          Book Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
