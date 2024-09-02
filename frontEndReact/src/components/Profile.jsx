import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {
  const { username } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/signup/c/${username}`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
          },
        });
        setProfileData(response.data.data);
        setError(false);
      } catch (err) {
        setError(true);
      }
    };

    fetchProfile();
  }, [username]);


  const handleEditProfile = () => {
    navigate('/profile/update');
  };

  const handleChangePassword = () => {
    navigate('/profile/change-password');
  };
  return (
    <div className="container mx-auto mt-10 p-6 bg-white shadow-md rounded">
      {error ? (
        <h2 className="text-2xl text-red-500">Error fetching user profile</h2>
      ) : profileData ? (
        <div>
          <h2 className="text-4xl font-bold mb-4">User Profile</h2>
          <p><strong>Username:</strong> {profileData.username}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
          {'       '}
          <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={handleChangePassword}
      >
        Change Password
      </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Profile;
