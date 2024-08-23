// // // // import React from 'react';

// // // // const Schemes = () => {
// // // //   const schemes = [
// // // //     {
// // // //       img: 'image/m6.jpg',
// // // //       title: 'Sarva Shiksha Abhiyan (SSA)',
// // // //       description: 'This scheme, launched in 2001, aims to provide universal access to elementary education...',
// // // //     },
// // // //     {
// // // //       img: 'image/m7.jpg',
// // // //       title: 'National Scheme of Incentive to Girls for Secondary Education (NSIGSE)',
// // // //       description: 'Launched in 2008, this scheme provides financial assistance to families of girl students...',
// // // //     },
// // // //     // Add other schemes here...
// // // //   ];

// // // //   return (
// // // //     <section id="facilities" className="py-16 bg-gray-100">
// // // //       <h1 className="text-center text-4xl font-bold mb-12">Schemes Provided By Government</h1>
// // // //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
// // // //         {schemes.map((scheme, index) => (
// // // //           <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex">
// // // //             <img className="w-1/3" src={scheme.img} alt={scheme.title} />
// // // //             <div className="p-6">
// // // //               <h2 className="text-2xl font-bold mb-4">{scheme.title}</h2>
// // // //               <p className="text-gray-700">{scheme.description}</p>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // // // export default Schemes;

// // // // // import React from "react";


// // // // // const schemes = [
// // // // //   {
// // // // //     img: 'image/m6.jpg',
// // // // //     title: 'Sarva Shiksha Abhiyan (SSA)',
// // // // //     description: 'This scheme, launched in 2001, aims to provide universal access to elementary education...',
// // // // //   },
// // // // //   {
// // // // //     img: 'image/m7.jpg',
// // // // //     title: 'National Scheme of Incentive to Girls for Secondary Education (NSIGSE)',
// // // // //     description: 'Launched in 2008, this scheme provides financial assistance to families of girl students...',
// // // // //   },
// // // // //   // Add other schemes here...
// // // // // ];





// // // // // const Schemes = () => {
// // // // //   return (
// // // // //     <section className="h-screen relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('./m1.jpg')" }}>
// // // // //       <div className="absolute inset-0 bg-opacity-50 bg-black">
// // // // //         <div className="container mx-auto h-full flex items-center justify-center text-white">
// // // // //             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
// // // // //           {schemes.map((scheme, index) => (
// // // // //           <div
// // // // //             key={scheme.id}
// // // // //             className={`flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden ${
// // // // //               index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
// // // // //             }`}
// // // // //           >
// // // // //             {/* Image Section */}
// // // // //             <div className="lg:w-1/2 w-full">
// // // // //               <img
// // // // //                 src={scheme.imageUrl}
// // // // //                 alt={scheme.title}
// // // // //                 className="w-full h-full object-cover"
// // // // //               />
// // // // //             </div>
// // // // //             {/* Text Section */}
// // // // //             <div className="lg:w-1/2 w-full p-8">
// // // // //               <h2 className="text-2xl font-bold mb-4">{scheme.title}</h2>
// // // // //               <p className="text-gray-700 text-lg">{scheme.description}</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
          
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Schemes;

// // // // // // const Schemes = () => {
// // // // // //   return (
// // // // // //     <div className="w-full bg-cover bg-fixed bg-center py-12" style={{ backgroundImage: `url('/path/to/your/background.jpg')` }}>
// // // // // //       <div className="container mx-auto space-y-12">
// // // // // //         {schemes.map((scheme, index) => (
// // // // // //           <div
// // // // // //             key={scheme.id}
// // // // // //             className={`flex flex-col items-center lg:items-${index % 2 === 0 ? 'start' : 'end'} text-center lg:text-${index % 2 === 0 ? 'left' : 'right'} lg:flex-row-reverse ${
// // // // // //               index % 2 === 0 ? 'lg:flex-row' : ''
// // // // // //             } space-y-4 lg:space-y-0 lg:space-x-4`}
// // // // // //           >
// // // // // //             <div className="w-full lg:w-1/2">
// // // // // //               <img
// // // // // //                 src={`/path/to/scheme/image-${scheme.id}.jpg`}
// // // // // //                 alt={scheme.title}
// // // // // //                 className="rounded-lg shadow-md"
// // // // // //               />
// // // // // //             </div>
// // // // // //             <div className="w-full lg:w-1/2">
// // // // // //               <h2 className="text-3xl font-bold mb-4">{scheme.title}</h2>
// // // // // //               <p className="text-lg">{scheme.description}</p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // import React from "react";
// // // // // import { ArrowUpRight } from 'lucide-react';

// // // // // const schemes = [
// // // // //   {
// // // // //     id: 1,
// // // // //     title: "Mid-Day Meal",
// // // // //     description: "The Mid-Day Meal Scheme, launched in 1995, provides free hot cooked meals to children in primary and upper primary classes in government, government-aided, and local body schools.",
// // // // //     imageUrl: "https://example.com/image1.jpg",
// // // // //     tags: ["#Meal", "#Government", "#Education"],
// // // // //     author: {
// // // // //       name: "Author Name",
// // // // //       username: "@username",
// // // // //       avatar: "https://example.com/avatar1.jpg"
// // // // //     }
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     title: "Inclusive Education for Disabled",
// // // // //     description: "This scheme aims to provide inclusive education for children with disabilities at the secondary level.",
// // // // //     imageUrl: "https://example.com/image2.jpg",
// // // // //     tags: ["#Inclusive", "#Education", "#Disability"],
// // // // //     author: {
// // // // //       name: "Another Author",
// // // // //       username: "@author_username",
// // // // //       avatar: "https://example.com/avatar2.jpg"
// // // // //     }
// // // // //   },
// // // // //   // Add more schemes as needed
// // // // // ];

// // // // // export default function Schemes() {
// // // // //   return (
// // // // //     <div className="h-screen relative bg-fixed bg-cover bg-center " style={{ backgroundImage: "url('./m1.jpg')" }}>      
// // // // //       <div className="container mx-auto space-y-12">
// // // // //         {schemes.map((scheme, index) => (
// // // // //           <div
// // // // //             key={scheme.id}
// // // // //             className={`flex flex-col items-center rounded-md border md:flex-row max-w-2xl mx-auto shadow-lg overflow-hidden  ${
// // // // //               index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
// // // // //             }`}
// // // // //           >
// // // // //             {/* Image Section */}
// // // // //             <div className="h-full w-full md:h-[200px] md:w-[300px]">
// // // // //               <img
// // // // //                 src={scheme.imageUrl}
// // // // //                 alt={scheme.title}
// // // // //                 className="h-full w-full rounded-md object-cover"
// // // // //               />
// // // // //             </div>
// // // // //             {/* Content Section */}
// // // // //             <div className="p-4">
// // // // //               <h1 className="inline-flex items-center text-lg font-semibold">
// // // // //                 {scheme.title}
// // // // //                 <ArrowUpRight className="ml-2 h-4 w-4" />
// // // // //               </h1>
// // // // //               <p className="mt-3 text-sm text-gray-600">{scheme.description}</p>
// // // // //               <div className="mt-4">
// // // // //                 {scheme.tags.map((tag, idx) => (
// // // // //                   <span
// // // // //                     key={idx}
// // // // //                     className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
// // // // //                   >
// // // // //                     {tag}
// // // // //                   </span>
// // // // //                 ))}
// // // // //               </div>
// // // // //               <div className="mt-3 flex items-center space-x-2">
// // // // //                 <img
// // // // //                   className="inline-block h-8 w-8 rounded-full"
// // // // //                   src={scheme.author.avatar}
// // // // //                   alt={scheme.author.name}
// // // // //                 />
// // // // //                 <span className="flex flex-col">
// // // // //                   <span className="text-[10px] font-medium text-gray-900">{scheme.author.name}</span>
// // // // //                   <span className="text-[8px] font-medium text-gray-500">{scheme.author.username}</span>
// // // // //                 </span>
// // // // //               </div>
              
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>

// // // // //       <div>
// // // // //       <div className="h-screen relative bg-fixed bg-cover bg-center " style={{ backgroundImage: "url('./m1.jpg')" }}>      
// // // // //       <div className="container mx-auto space-y-12 align-middle">
// // // // //               <button
// // // // //                   type="button"
// // // // //                   className="  rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
// // // // //                 >
// // // // //                   Button text
// // // // //                 </button>
// // // // //               </div>
// // // // //           </div>
// // // // //           </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // import React from 'react';
// // // // If using Webpack/Vite, you might need to import images like this:
// // // // import img1 from 'path/to/m6.jpg';
// // // // import img2 from 'path/to/m7.jpg';

// // // const Schemes = () => {
// // //   const schemes = [
// // //     {
// // //       img: 'image/m6.jpg', // Replace with import if necessary
// // //       title: 'Sarva Shiksha Abhiyan (SSA)',
// // //       description: 'This scheme, launched in 2001, aims to provide universal access to elementary education...',
// // //     },
// // //     {
// // //       img: 'image/m7.jpg', // Replace with import if necessary
// // //       title: 'National Scheme of Incentive to Girls for Secondary Education (NSIGSE)',
// // //       description: 'Launched in 2008, this scheme provides financial assistance to families of girl students...',
// // //     },
// // //     // Add other schemes here...
// // //   ];

// // //   return (
// // //     <section id="facilities" className="py-16 bg-gray-100">
// // //       <h1 className="text-center text-4xl font-bold mb-12">Schemes Provided By Government</h1>
// // //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
// // //         {schemes.map((scheme, index) => (
// // //           <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex">
// // //             <img className="w-1/3 object-cover" src={scheme.img} alt={`Image of ${scheme.title}`} />
// // //             <div className="p-6">
// // //               <h2 className="text-2xl font-bold mb-4">{scheme.title}</h2>
// // //               <p className="text-gray-700">{scheme.description}</p>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Schemes;


// // import React from 'react';

// // const Schemes = () => {
// //   const schemes = [
// //     {
// //       id: 1,
// //       imageUrl: 'image/m6.jpg',
// //       title: 'Sarva Shiksha Abhiyan (SSA)',
// //       description: 'This scheme, launched in 2001, aims to provide universal access to elementary education...',
// //       // author: { name: 'Author Name', avatar: 'author/avatar1.jpg', username: '@username1' }, // Example author data
// //     },
// //     {
// //       id: 2,
// //       imageUrl: './m7.jpg',
// //       title: 'National Scheme of Incentive to Girls for Secondary Education (NSIGSE)',
// //       description: 'Launched in 2008, this scheme provides financial assistance to families of girl students...',
// //       // author: { name: 'Author Name', avatar: 'author/avatar2.jpg', username: '@username2' }, // Example author data
// //     },
// //     // Add more schemes here if needed...
// //   ];

// //   return (
// //     <div className="px-80 h-screen relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('./m1.jpg')" }}>
// //       <div className=" container mx-auto space-y-12">
// //         {schemes.map((scheme, index) => (
// //           <div
// //             key={scheme.id}
// //             className={`flex flex-col items-center rounded-md border md:flex-row max-w-2xl mx-auto shadow-lg overflow-hidden ${
// //               index % 2 === 0 ? 'md:flex-row px' : 'md:flex-row-reverse'
// //             }`}
// //           >
// //             {/* Image Section */}
// //             <div className="h-full w-full md:h-[200px] md:w-[300px]">
// //               <img
// //                 src={scheme.imageUrl}
// //                 alt={scheme.title}
// //                 className="h-full w-full rounded-md object-cover"
// //               />
// //             </div>
// //             {/* Content Section */}
// //             <div className="p-4 bg-white">
// //               <h1 className="text-lg font-semibold">
// //                 {scheme.title}
// //               </h1>
// //               <p className="mt-3 text-sm text-gray-600">{scheme.description}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Button Section */}
// //       <div className="container mx-auto flex justify-center mt-12">
// //         <button
// //           type="button"
// //           className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
// //         >
// //           Button text
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Schemes;
// import React from 'react';

// const Schemes = () => {
//   const schemes = [
//     {
//       img: 'image/m6.jpg',
//       title: 'Sarva Shiksha Abhiyan (SSA)',
//       description: 'This scheme, launched in 2001, aims to provide universal access to elementary education...',
//     },
//     {
//       img: 'image/m7.jpg',
//       title: 'National Scheme of Incentive to Girls for Secondary Education (NSIGSE)',
//       description: 'Launched in 2008, this scheme provides financial assistance to families of girl students...',
//     },
//     // Add other schemes here...
//   ];

//   return (
//     <section id="facilities" className="py-16 bg-gray-100">
//       <h1 className="text-center text-4xl font-bold mb-12">Schemes Provided By Government</h1>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {schemes.map((scheme, index) => (
//           <div
//             key={index}
//             className={`bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row ${
//               index % 2 === 0 ? '' : 'md:flex-row-reverse'
//             }`}
//           >
//             <img className="w-full md:w-1/2 object-cover" src={scheme.img} alt={scheme.title} />
//             <div className="p-6">
//               <h2 className="text-2xl font-bold mb-4">{scheme.title}</h2>
//               <p className="text-gray-700">{scheme.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Schemes;
import React from 'react';

const Schemes = () => {
  const schemes = [
    {
      img: './m6.jpg',
      title: 'Sarva Shiksha Abhiyan (SSA)',
      description: 'This scheme, launched in 2001, aims to provide universal access to elementary education...',
    },
    {
      img: './m7.jpg',
      title: 'National Scheme of Incentive to Girls for Secondary Education (NSIGSE)',
      description: 'Launched in 2008, this scheme provides financial assistance to families of girl students...',
    },
    // Add other schemes here...
  ];

  return (
    <section id="facilities" className="py-16 bg-fixed bg-center bg-cover bg-gray-100" style={{ backgroundImage: "url('./m1.jpg')" }}>
      <h1 className="text-center text-4xl font-bold mb-12 text-white">Schemes Provided By Government</h1>
      <div className="max-w-7xl mx-auto space-y-8">
        {schemes.map((scheme, index) => (
          <div
            key={index}
            className={`bg-white bg-opacity-80 shadow-lg rounded-lg overflow-hidden flex ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <img className="w-1/2 object-cover" src={scheme.img} alt={scheme.title} />
            <div className="p-6 flex-1 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold text-center">{scheme.title}</h2>
              <p className="text-gray-700 mt-4 text-center">{scheme.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://your-link-address.com" // Replace with your target URL
          className="inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};



export default Schemes;


