// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//   const navigate = useNavigate();
//   useEffect(()=>{
//     const handleLogout=async () =>{
//       try{
//         const response=await axios.post(
//           'http://localhost:8000/api/v1/signup/logout',
//           {},
//           {
//             withCredentials:true,
//             headers:{
//               Authorization:`Bearer ${sessionStorage.getItem('accessToken')}`,
//             },
//           }
//         );

//         if(response.status === 200){
//           console.log("logged Out");

//           sessionStorage.removeItem('accessToken')
//           navigate('/login')
          
//         }else{
//           console.error(error)
//         }
//       }catch(error){
//         console.error(error)
//       }
//     };

//     handleLogout();
//   },[navigate])




//   // const handleLogout = async () => {

//   //   useEffect(()=>{
//   //     const logoutplzz=async () =>{
//   //       try{
//   //         const response=await axios.post('http://localhost:8000/api/v1/signup/logout',
//   //           {},
//   //           {
//   //             withCredentials:true,
//   //             headers:{
//   //               Authorization:`Bearer ${sessionStorage.getItem('accessToken')}`
//   //             }
//   //           }
//   //         );
//   //         if(response.ok){
//   //           console.log("Logged OUT");
//   //           setTimeout(()=>{
//   //             navigate('/login')
//   //           },3000)
//   //         }
//   //         setError(true)
//   //       }catch{
//   //         setError(false)
//   //       }
//   //     }

//   //     logoutplzz();
//     // })
  

//   return (
//     <button className='inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' 
//     onClick={handleLogout}>
//       Logout
//     </button>
//   );
// };

// export default Logout;

import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/signup/logout',
        {},
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('Logged OUT');
        sessionStorage.removeItem('accessToken'); // Clear session storage tokens
        navigate('/login'); // Redirect to login page
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <button
      className='inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;

