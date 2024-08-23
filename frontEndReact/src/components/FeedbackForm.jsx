import React from 'react';

const FeedbackForm = () => {
  return (
    <section id="feedback" className="py-16 bg-gray-100">
      <form className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h1 className="text-center text-4xl font-bold mb-8">Feedback Form</h1>

        <input type="text" className="w-full mb-4 px-4 py-2 border rounded-lg" placeholder="Name" required />
        <input type="email" className="w-full mb-4 px-4 py-2 border rounded-lg" placeholder="Email" required />
        <input type="tel" className="w-full mb-4 px-4 py-2 border rounded-lg" placeholder="Contact Number" />
        <textarea rows="4" className="w-full px-4 py-2 border rounded-lg" placeholder="Feedback" required />
        <button type="submit" className="w-full bg-gray-700 text-white px-4 py-2 mt-4 rounded-lg">Submit Feedback</button>
      </form>
    </section>
  );
};

export default FeedbackForm;
