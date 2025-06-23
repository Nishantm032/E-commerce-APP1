import React from 'react'

const RSVPform = () => {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 bg-pink-200 shadow-md">
        <h1 className="text-5xl font-bold text-pink-800">💍 Happy Anniversary!</h1>
        <p className="mt-4 text-lg">You're invited to celebrate the love of</p>
        <h2 className="text-3xl font-semibold mt-2 text-pink-900">Amit & Akashita</h2>
        <p className="mt-4 text-gray-700">Join us for an evening of joy, memories, and celebration.</p>
      </section>

      {/* Event Details Section */}
      <section className="py-10 px-4 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">📅 Event Details</h3>
        <ul className="space-y-2 text-lg">
          <li><strong>Date:</strong> 15th July 2025</li>
          <li><strong>Time:</strong> 6:00 PM Onwards</li>
          <li><strong>Venue:</strong> Royal Garden Banquet Hall, Patna, Bihar</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center py-10 bg-pink-100">
        <p className="mb-4 text-xl">We'd love to know if you’re joining us!</p>
        <a href="/rsvp">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg transition">
            RSVP Now
          </button>
        </a>
      </section>
    </div> 

  )
}

export default RSVPform