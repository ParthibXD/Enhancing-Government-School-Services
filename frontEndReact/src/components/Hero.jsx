// import React from 'react';

// const Hero = () => {
//   return (
//     <section id="home" className="bg-[url('image/pexels-pixabay-159632.jpg')] bg-cover bg-center h-[500px] flex flex-col justify-center items-center text-white text-center">
//       <h2 className="text-4xl font-bold">Welcome to the Government School Services Portal</h2>
//       <p className="text-lg mt-4">Your source for information on school facilities and services.</p>
//       <button
//         onClick={() => document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' })}
//         className="mt-8 bg-gray-700 px-6 py-2 rounded-full text-white hover:bg-black transition"
//       >
//         Provide Feedback
//       </button>
//     </section>
//   );
// };

// export default Hero;
import React from "react";

const Hero = () => {
  return (
    <section className="h-screen relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('./m1.jpg')" }}>
      <div className="absolute inset-0 bg-opacity-0 bg-black">
        <div className="container mx-auto h-full flex items-center justify-center text-white">
          

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                    Welcome to the Government School Services Portal
                  </h1>
                  <p className="text-2xl md:text-3xl mt-4">
                    Your source for information on school facilities and services.
                  </p>
                </div>
                </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

