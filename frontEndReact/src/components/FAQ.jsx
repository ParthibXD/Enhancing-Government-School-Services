// import React from 'react';

// const FAQ = () => {
//   return (
//     <section id="FAQ" className="py-16">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
//         <p className="mt-4 text-gray-600">These are the most common questions asked....Check them out!!</p>
//       </div>
//       <div className="max-w-4xl mx-auto mt-12">
//         <div className="mb-6">
//           <input type="checkbox" id="faq1" className="hidden" />
//           <label htmlFor="faq1" className="flex justify-between items-center cursor-pointer bg-gray-200 p-4 rounded-lg">
//             <h3>Are these guidelines mandated by the Government of India?</h3>
//             <img src="image/arrow-down-3101.png" alt="Toggle" className="w-4 h-4 opacity-60" />
//           </label>
//           <div className="hidden pl-4 mt-2" id="faq1-content">
//             <p>Yes. The “Guidelines for Indian Government Websites” was formally released...</p>
//           </div>
//         </div>
//         {/* Add more FAQ items similarly */}
//       </div>
//     </section>
//   );
// };



// export default FAQ;


import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Mid-Day Meal Scheme?",
      answer: "The Mid-Day Meal Scheme provides free meals to school children in India to enhance enrollment, retention, and attendance while improving nutrition."
    },
    {
      question: "Who is eligible for the Inclusive Education for the Disabled at Secondary Stage (IEDSS)?",
      answer: "IEDSS provides inclusive education to children with disabilities at the secondary stage of schooling."
    },
    {
      question: "What services are available through the Government School Services Portal?",
      answer: "The portal offers information on school facilities, schemes, educational programs, and other government services for schools."
    }
    // Add more FAQs here as needed
  ];


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active state
  };

  return (
    <div className="max-w-2xl mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
      <p className="text-center text-gray-500 mb-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left px-6 py-4 text-lg font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-2xl">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <p className="text-gray-500">Can't find what you're looking for? <a href="/contact" className="text-blue-600">Contact our support</a></p>
      </div>
    </div>
  );
};
export default FAQ;
