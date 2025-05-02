import React from 'react';

const UpdatingProfileCard = () => {
  return (
    <div className="max-w-md mx-auto mt-16 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
      <div className="flex flex-col items-center p-6">
        {/* Profile Picture */}
        <div className="w-24 h-24 mb-4">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Profile"
            className="w-full h-full object-cover rounded-full border-4 border-pink-500 shadow-md"
          />
        </div>

        {/* Name, Age, About */}
        <h3 className="text-lg font-semibold text-gray-800">Name: Naruto Uzumaki</h3>
        <h3 className="text-md text-gray-700 mt-1">Age: 17</h3>
        <h3 className="text-sm text-gray-600 mt-2 text-center">
          About: Frontend ninja from the Hidden Leaf 🌪️. Passionate about Chakra-powered React apps ⚛️.
        </h3>
      </div>
    </div>
  );
};

export default UpdatingProfileCard;
