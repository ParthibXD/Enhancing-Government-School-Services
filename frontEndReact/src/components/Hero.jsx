import React, { useEffect, useState } from "react";
import axios from "axios";

import Logout from './Logout'


const Hero = () => {
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
    <section className="h-screen relative bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('./m1.jpg')" }}>
      <div className="absolute inset-0 bg-opacity-0 bg-black">
        <div className="container mx-auto h-full flex items-center justify-center text-white">
          

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                
                  { error ?(                  
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                    {userInfo.username} Welcome to the Government School Services Portal 
                  </h1>
                  
                  ):
                  (
                     <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                      Relogin......
                   </h1>)
                }


<Logout />
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

