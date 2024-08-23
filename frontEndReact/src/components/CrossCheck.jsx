import React, { useState } from "react";

export const CrossCheck = () => {
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ dropdown1, dropdown2, query });
    // Add your form submission logic here
  };

  return (
    <section id="crosscheck" className="py-16 bg-gray-100">
    <div className="p-4 max-w-2xl mx-auto mt-10  bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-4">Progress Report</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="dropdown1" className="block text-lg font-medium text-gray-700">Select Option 1</label>
          <select
            id="dropdown1"
            value={dropdown1}
            onChange={(e) => setDropdown1(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div>
          <label htmlFor="dropdown2" className="block text-lg font-medium text-gray-700">Select Option 2</label>
          <select
            id="dropdown2"
            value={dropdown2}
            onChange={(e) => setDropdown2(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div>
          <label htmlFor="query" className="block text-lg font-medium text-gray-700">Submit Your Query</label>
          <textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Write your query here..."
          ></textarea>
        </div>

        <div className="text-center text-4xl">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </section>
  );
};
