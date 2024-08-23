// // // import React, { useState } from 'react';
// // // import { Link } from 'react-router-dom';

// // // const RegisterForm = () => {
// // //   const [fullName, setFullName] = useState('');
// // //   const [username, setUsername] = useState('');
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [avatar, setAvatar] = useState(null);
// // //   const [coverImage, setCoverImage] = useState(null);
// // //   const [message, setMessage] = useState('');

// // //   const handleRegister = async () => {
// // //     const formData = new FormData();
// // //     formData.append('fullName', fullName);
// // //     formData.append('username', username);
// // //     formData.append('email', email);
// // //     formData.append('password', password);
// // //     formData.append('avatar', avatar);
// // //     formData.append('coverImage', coverImage);

// // //     try {
// // //       const response = await fetch('http://localhost:8000/api/v1/users/register', {
// // //         method: 'POST',
// // //         body: formData,
// // //       });

// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         setMessage('Registration Successful!');
// // //         console.log(data);
// // //       } else {
// // //         setMessage('Registration Failed!');
// // //       }
// // //     } catch (error) {
// // //       setMessage('Registration Failed!');
// // //       console.error('Error:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex justify-center items-center h-screen bg-gray-100">
// // //       <div className="bg-white p-6 rounded-lg shadow-lg">
// // //         <h2 className="text-2xl font-bold mb-6">Register</h2>
// // //         <input
// // //           type="text"
// // //           placeholder="Full Name"
// // //           value={fullName}
// // //           onChange={(e) => setFullName(e.target.value)}
// // //           className="w-full p-2 mb-4 border rounded"
// // //         />
// // //         <input
// // //           type="text"
// // //           placeholder="Username"
// // //           value={username}
// // //           onChange={(e) => setUsername(e.target.value)}
// // //           className="w-full p-2 mb-4 border rounded"
// // //         />
// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           className="w-full p-2 mb-4 border rounded"
// // //         />
// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           className="w-full p-2 mb-4 border rounded"
// // //         />
// // //         <label className="block mb-2">Avatar:</label>
// // //         <input
// // //           type="file"
// // //           onChange={(e) => setAvatar(e.target.files[0])}
// // //           className="w-full mb-4"
// // //         />
// // //         <label className="block mb-2">Cover Image:</label>
// // //         <input
// // //           type="file"
// // //           onChange={(e) => setCoverImage(e.target.files[0])}
// // //           className="w-full mb-4"
// // //         />
// // //         <button
// // //           onClick={handleRegister}
// // //           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
// // //         >
// // //           Register
// // //         </button>
// // //         <p className="mt-4 text-red-500">{message}</p>
// // //         <p className="mt-4">
// // //           Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>.
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default RegisterForm;


// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const RegisterForm = () => {
// //   // const [fullName, setFullName] = useState('');
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   // const [avatar, setAvatar] = useState(null);
// //   // const [coverImage, setCoverImage] = useState(null);
// //   const [message, setMessage] = useState('');

// //   const handleRegister = async () => {
// //     const formData = new FormData();
// //     // formData.append('fullName', fullName);
// //     formData.append('username', username);
// //     formData.append('email', email);
// //     formData.append('password', password);
// //     // formData.append('avatar', avatar);
// //     // formData.append('coverImage', coverImage);

// //     try {
// //       const response = await fetch('http://localhost:8000/api/v1/users/register', {
// //         method: 'POST',
// //         body: formData,
// //       });

// //       if (response.ok) {
// //         const data = await response.json();
// //         setMessage('Registration Successful!');
// //         console.log(data);
// //       } else {
// //         setMessage('Registration Failed!');
// //       }
// //     } catch (error) {
// //       setMessage('Registration Failed!');
// //       console.error('Error:', error);
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
// //         <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Create an Account</h2>
// //         <div className="space-y-4">

// //           <input
// //             type="text"
// //             placeholder="Username"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //           />
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //           />

// //           </div>
// //           <button
// //             onClick={handleRegister}
// //             className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 ease-in-out"
// //           >
// //             Register
// //           </button>
// //           {message && <p className="text-red-500 text-center mt-4">{message}</p>}
// //         </div>
// //         <div className="mt-6 text-center">
// //           <p className="text-gray-600">
// //             Already have an account?{' '}
// //             <Link to="/login" className="text-indigo-600 hover:underline">Login here</Link>.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterForm;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const RegisterForm = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleRegister = async () => {
//     const formData = new FormData();
//     formData.append('username', username);
//     formData.append('email', email);
//     formData.append('password', password);

//     try {
//       const response = await fetch('http://localhost:8000/api/v1/signup/signup', {
//         method: 'POST',
//         body: formData,
//       });
//       console.log(response,"try");
      

//       if (response.ok) {
//         const data = await response.json();
//         setMessage('Registration Successful!');
//         console.log(data);
//       } else {
//         setMessage('Registration Failed!');
//       }
//     } catch (error) {
//       setMessage('Registration Failed!');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Create an Account</h2>
//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>
//         <button
//           onClick={handleRegister}
//           className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 ease-in-out mt-4"
//         >
//           Register
//         </button>
//         {message && <p className="text-red-500 text-center mt-4">{message}</p>}
//       </div>
//       <div className="mt-6 text-center">
//         <p className="text-gray-600">
//           Already have an account?{' '}
//           <Link to="/login" className="text-indigo-600 hover:underline">Login here</Link>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;


import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate();

  const handleSignup = async () => {
    const requestBody = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:8000/api/v1/signup/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Signup successful! Please log in.');
        console.log(data);


        // Redirect to another page (e.g., the login page) after 2 seconds
        setTimeout(() => {
          navigate('/home');  // Change the route to the desired page
        }, 2000);
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Signup failed!');
      }
    } catch (error) {
      setMessage('Signup failed! An error occurred.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Sign Up</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          onClick={handleSignup}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 ease-in-out mt-4"
        >
          Sign Up
        </button>
        {message && <p className="text-red-500 text-center mt-4">{message}</p>}
        <div className="mt-6 text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 hover:underline">Login here</Link>.
        </p>
      </div>
      </div>
      
    </div>
  );
};

export default RegisterForm;
