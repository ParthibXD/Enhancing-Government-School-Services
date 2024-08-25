// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios'

// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginData,setLoginData]=useState(null);
//   //const [passLoginData,setPassLoginData]=useState(null);
//   //const [message, setMessage] = useState('');
//   const navigate=useNavigate()

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try{
//       const response=await axios.post('http://localhost:8000/api/v1/signup/signin',
//         {
//           email,
//           password,
//         });
//       setLoginData(response.data);
//       navigate('/home',{state:{loginData:response.data}});
//       console.log(response.data);
      
//     }
//     catch(error){
//       console.log('Login Failed:',error);
      
//     }

//     // try {
//     //   const response = await fetch('http://localhost:8000/api/v1/users/login', {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json',
//     //     },
//     //     body: JSON.stringify(loginData),
//     //   });

//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       setMessage('Login Successful!');
//   //       console.log(data);
//   //       setPassLoginData(response.data);
//   //       navigate('/home',{state:{passLoginData:response.data}})
//   //     } else {
//   //       setMessage('Login Failed!');
//   //     }
//   //   } catch (error) {
//   //     setMessage('Login Failed!');
//   //     console.error('Error:', error);
//   //   }
//    };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         >
//           Login
//         </button>
//         <p className="mt-4 text-red-500"></p>
//         <p className="mt-4">
//           Don't have an account? <Link to="/" className="text-blue-500">Register here</Link>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/signup/signin', {
        email,
        password,
      });





      console.log(response);
      

      if (response.status === 200) {


       
        // Assuming the login was successful, navigate to the "home" page
        setMessage('Login Successful! Redirecting...');
        

        console.log(response.data);

        // Pass login data to the next component (e.g., Home component)
        setTimeout(() => {
          navigate('/home', { state: { loginData: response.data } });
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage('Invalid Credentials');
      } else if (error.response && error.response.status === 404) {
        setMessage('User Not Found');
      } else {
        setMessage('Login Failed! An unexpected error occurred.');
      }
      console.error('Login Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-red-500">{message}</p>}
        <p className="mt-4">
          Don't have an account?{' '}
          <Link to="/" className="text-blue-500">Register here</Link>.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8000/api/v1/signup/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//         credentials: 'include', // This allows cookies to be sent along with the request
//       });

//       if (response.ok) {
//         const data = await response.json();

//         // Login was successful, navigate to the "home" page
//         setMessage('Login Successful! Redirecting...');
//         console.log(data);

//         // Pass login data to the next component (e.g., Home component)
//         setTimeout(() => {
//           navigate('/home', { state: { loginData: data } });
//         }, 2000);
//       } else if (response.status === 401) {
//         setMessage('Invalid Credentials');
//       } else if (response.status === 404) {
//         setMessage('User Not Found');
//       } else {
//         setMessage('Login Failed! An unexpected error occurred.');
//       }
//     } catch (error) {
//       console.error('Login Error:', error);
//       setMessage('Login Failed! An unexpected error occurred.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6">Login</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//           >
//             Login
//           </button>
//         </form>
//         {message && <p className="mt-4 text-red-500">{message}</p>}
//         <p className="mt-4">
//           Don't have an account?{' '}
//           <Link to="/" className="text-blue-500">Register here</Link>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
