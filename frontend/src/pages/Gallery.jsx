import React from 'react';

const images = [
  // Add image URLs here (use online links or local images from /public folder)
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  '/images/photo5.jpg',
  '/images/photo6.jpg',
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-4xl font-bold text-center text-pink-800 mb-8">📸 Anniversary Memories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition duration-300">
            <img
              src={src}
              alt={`Anniversary Memory ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
