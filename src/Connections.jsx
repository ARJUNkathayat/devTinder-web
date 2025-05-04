import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from './utils/connectionSlice';

const Connections = () => {
  const connectionData = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const response = await axios.get("http://localhost:7000/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(response.data.data));
    } catch (err) {
      console.error("Error fetching connections:", err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Connections</h2>

      {!connectionData || connectionData?.length === 0 ? (
        <p className="text-center text-gray-500">No connections found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {connectionData.map((user) => (
            <div
              key={user._id}
              className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={user.photo}
                alt={user.firstName}
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-indigo-500"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {user.firstName} {user.lastName}
              </h3>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {user.about || "No bio available."}
              </p>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm hover:bg-indigo-700 transition-colors">
                View Profile
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Connections;
