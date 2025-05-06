import axios from 'axios';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from './utils/feedSlice';

const UserCard = ({ user }) => {
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="text-center bg-gray-800 text-white p-8 rounded-lg shadow-lg transform scale-105 transition-all duration-300">
          <h1 className="text-4xl font-semibold mb-4">No More Friends Available Right Now</h1>
          <p className="text-lg">Please check back later!</p>
        </div>
      </div>
    );
  }

  const dispatch = useDispatch();

  const handleUserReq = useCallback(async (status, toUserId) => {
    try {
      const res = await axios.post(`http://localhost:7000/request/send/${status}/${toUserId}`, {}, { withCredentials: true });
      console.log("Response:", res.data);
      dispatch(removeUserFromFeed(toUserId));
    } catch (err) {
      console.error("Error sending request:", err);
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="relative w-80 h-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
        
        <img
          src={user?.photo || "https://avatars.githubusercontent.com/u/583231?v=4"}
          alt="Dev Profile"
          className="w-full h-[60%] object-cover"
        />

        {/* User Info */}
        <div className="absolute bottom-16 w-full px-4 py-3 bg-black/70 text-white text-center rounded-t-3xl">
          <h2 className="text-3xl font-semibold">{user?.firstName || "Rohan"}, {user?.age || 24}</h2>
          <p className="text-sm font-light mt-2">{user?.about || "Frontend Dev 💻 | React & Tailwind Enthusiast ⚛️"}</p>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-6 w-full flex justify-evenly">
          <button
            onClick={() => handleUserReq("Ignored", user?._id)}
            className="bg-red-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-red-600 transition duration-300 transform hover:scale-105"
          >
            Reject
          </button>

          <button
            onClick={() => handleUserReq("Interested", user?._id)}
            className="bg-green-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-105"
          >
            Accept
          </button>
        </div>

        {/* DevTinder Badge */}
        <div className="absolute top-3 left-3 bg-pink-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
          DevTinder ❤️‍🔥
        </div>
      </div>
    </div>
  );
};

export default UserCard;
