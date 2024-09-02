import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfileUpdate = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        'http://localhost:8000/api/v1/signup/update',
        { email },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
          },
        }
      );

      if (response.status === 200) {
        setMessage('Email updated successfully');
        setTimeout(() => {
          navigate(`/home`);
        }, 2000);
      }
    } catch (error) {
      setError('Failed to update email. Please try again.');
      console.error(error);
    }
  };

  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Update Email</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="email"
            placeholder="New Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Update Email
          </button>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default ProfileUpdate;
