import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PasswordChange = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8000/api/v1/signup/change',
        { oldpassword: oldPassword, newpassword: newPassword },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
          },
        }
      );

      if (response.status === 200) {
        setMessage('Password changed successfully');
        setTimeout(() => {
          navigate('/home'); // Redirect to profile page after successful password change
        }, 2000);
      }
    } catch (error) {
      setError('Failed to change password. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Change Password</h2>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <input
            type="password"
            placeholder="Current Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Change Password
          </button>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default PasswordChange;
