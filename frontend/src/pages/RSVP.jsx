import React, { useState } from 'react';

const RSVP = () => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('yes');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      attending,
      message,
    };

    console.log('RSVP Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-pink-700 text-center mb-6">🎉 RSVP</h1>

        {submitted ? (
          <div className="text-center">
            <p className="text-xl text-green-600 font-semibold">Thank you for your response!</p>
            <p className="mt-2">We're excited to see you at the celebration! 🎊</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Will you be attending?</label>
              <select
                className="w-full border border-gray-300 rounded p-2 mt-1"
                value={attending}
                onChange={(e) => setAttending(e.target.value)}
              >
                <option value="yes">Yes, I'll be there!</option>
                <option value="no">Sorry, I can't make it</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">Message or Wishes (optional)</label>
              <textarea
                className="w-full border border-gray-300 rounded p-2 mt-1"
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white font-bold py-2 rounded hover:bg-pink-700 transition"
            >
              Submit RSVP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RSVP;
