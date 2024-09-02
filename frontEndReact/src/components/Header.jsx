import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Logout from './Logout';
import { Link } from 'react-router-dom';




const Header = () => {

  const [userInfo,setUserInfo]=useState(null) 
  const [error,setError]=useState(false) 

  useEffect(()=>{
    const fetchUserInfo=async () =>{
      try{
        const response=await axios.get('http://localhost:8000/api/v1/signup/info',{
          withCredentials:true,
          headers:{
            Authorization:`Bearer ${sessionStorage.getItem('accessToken')}`
          }
        });      
        setUserInfo(response.data.data)
        setError(true)      
      }catch(err){
        setError(false)
      }
    };

    fetchUserInfo();
  },[])


  return (
    <header className="flex justify-between items-center bg-white py-4 px-8 shadow-md">
      <img className="w-24" src="./logo1.png" alt="Government Logo" />
      <div className="text-center">
        <h1 className="text-2xl font-bold">Enhancing Government School Services</h1>
        <nav className="mt-2">
          <a href="#home" className="mx-2 text-black">Home</a>
          <a href="#facilities" className="mx-2 text-black">Facilities</a>
          <a href="#FAQ" className="mx-2 text-black">FAQ</a>
          <a href="#query" className="mx-2 text-black">Query</a>
          <a href="#feedback" className="mx-2 text-black">Feedback</a>

          {
            error?(
              <Logout />
            ):(
              <>
              <div>
                <button
                className='inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                <Link to="/" className="text-white">Register here</Link>
              </button>

              {'  '}

              <button
              className='inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <Link to="/login" className="text-white hover:underline">Login here</Link>
            </button>
            </div>
              </>
            )
          }
        </nav>
      </div>
      <div className="flex justify-center mt-4">
        <form className="flex items-center w-64 border-2 border-gray-300 rounded-full">
          <input type="text" className="w-full px-4 py-2 outline-none" placeholder="Give Input" required />
          <button type="submit" className="px-4 py-2 bg-gray-700 text-white rounded-r-full">Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
