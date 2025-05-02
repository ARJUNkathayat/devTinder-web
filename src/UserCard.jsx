import React from 'react';

const UserCard = ({ user }) => {
  console.log('tinder', user);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="relative w-80 h-[500px] bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
        <img
          src={user?.avatar || "https://avatars.githubusercontent.com/u/583231?v=4"}
          alt="Dev Profile"
          className="w-full h-full object-cover"
        />

        {/* Overlay text */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
          <h2 className="text-2xl font-bold">{user?.firstName || "Rohan"}, {user?.age || 24}</h2>
          <p className="text-sm">{user?.about || "Frontend Dev 💻 | React & Tailwind Enthusiast ⚛️"}</p>
        </div>

        {/* Action buttons */}
        <div className="absolute bottom-4 w-full flex justify-center gap-6">
          <button className="bg-white text-red-500 p-4 rounded-full shadow-md hover:scale-110 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button className="bg-white text-green-500 p-4 rounded-full shadow-md hover:scale-110 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>

        {/* DevTinder logo */}
        <div className="absolute top-3 left-3 bg-white px-3 py-1 text-xs font-semibold rounded-full shadow-md text-pink-500">
          DevTinder ❤️‍🔥
        </div>
      </div>
    </div>
  );
};

export default UserCard;
