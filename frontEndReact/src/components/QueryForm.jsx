// import React from 'react';

// const QueryForm = () => {
//   return (
//     <section id="query" className="py-16">
//       <h2 className="text-center text-4xl font-bold mb-8">Submit Your Query</h2>
//       <form className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
//         <label className="block mb-4">Name:</label>
//         <input type="text" id="name" className="w-full mb-4 px-4 py-2 border rounded-lg" placeholder="Enter your name" required />
//         <label className="block mb-4">Email:</label>
//         <input type="email" id="email" className="w-full mb-4 px-4 py-2 border rounded-lg" placeholder="Enter your email" required />
//         <label className="block mb-4">Your Query:</label>
//         <textarea id="query" rows="4" className="w-full px-4 py-2 border rounded-lg" placeholder="Enter your query here..." required />
//         <button type="submit" className="w-full bg-gray-700 text-white px-4 py-2 mt-4 rounded-lg">Submit Query</button>
//       </form>
//     </section>
//   );
// };

// export default QueryForm;


import React, { useState } from 'react';

const QueryForm = () => {
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ dropdown1, dropdown2, query });
    // Add your form submission logic here
  };

  return (
<section id="feedback" className="py-16 bg-gray-100 ">
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">

      <h1 className="text-4xl font-bold mb-4 text-center" >Submit Your Query</h1>
      <form onSubmit={handleSubmit}>
        {/* Dropdown 1 */}
        <div className="mb-4">
          <label htmlFor="dropdown1" className="text-xl text-center block font-medium text-gray-700">
            Select Option 1
          </label>
          <select
            id="dropdown1"
            value={dropdown1}
            onChange={(e) => setDropdown1(e.target.value)}
            className="mt-1 block w-full p-2 border text-center border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Choose an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        {/* Dropdown 2 */}
        <div className="mb-4">
          <label htmlFor="dropdown2" className="block text-center text-xl font-medium text-gray-700">
            Select Option 2
          </label>
          <select
            id="dropdown2"
            value={dropdown2}
            onChange={(e) => setDropdown2(e.target.value)}
            className="mt-1 block w-full p-2 border text-center border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Choose an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        {/* Query Submission Area */}
        <div className="mb-6">
          <label htmlFor="query" className="text-center block text-xl font-medium text-gray-700">
            Your Query
          </label>
          <textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
            placeholder="Type your query here..."
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Query
          </button>
        </div>
      </form>
    </div>
    </section>
  );
};

export default QueryForm;

