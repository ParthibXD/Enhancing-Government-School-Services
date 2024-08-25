import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/signup/logout', {}, {
        withCredentials: true, // To ensure cookies are sent with the request
      });

      if (response.ok) {
        // Optionally, clear any client-side user state (e.g., Redux or localStorage)
        console.log('Logged out successfully');
        
        // Redirect to the login page or homepage
        navigate('/login');
        console.log(response);
        
      }
    } catch (error) {
      console.error('Logout failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
