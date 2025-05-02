import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';
import { useNavigate } from 'react-router-dom';

const EditProfile = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: data.firstName || '',
    lastName: data.lastName || '',
    gender: data.gender || '',
    about: data.about || '',
    photo: data.photo || '',
    
  });

  const updateUser = async (formData) => {
    try {
      const response = await axios.patch("http://localhost:7000/profile/edit", formData, { withCredentials: true });
      
      // Extract updated profile from response
      const updatedProfile = response?.data?.user;
      
      // Dispatch to update the Redux store
      dispatch(removeUser());
      dispatch(addUser(updatedProfile));
      
      // Redirect to feed page
      navigate("/feed");

    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);  // Call updateUser inside the submit handler
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-start p-6">
      {/* Edit Form */}
      <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Edit Your Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="First Name *"
            required
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name"
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male 🧑</option>
            <option value="Female">Female 👩</option>
            <option value="Other">Other 🧑‍🦱</option>
          </select>

          <textarea
            name="about"
            placeholder="About Yourself"
            value={formData.about}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          />

          <input
            type="url"
            name="photo"
            value={formData.photo}
            placeholder="Anime Profile Photo URL"
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        

          <button type="submit" className="btn btn-primary w-full">
            Update Profile 🚀
          </button>
        </form>
      </div>

      {/* Live Preview Card */}
      <div className="w-full md:w-1/3 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 mt-6 md:mt-0">
        <div className="flex flex-col items-center p-6">
          <div className="w-24 h-24 mb-4">
            <img
              src={formData.photo}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-pink-500 shadow-md"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Name: {formData.firstName + ' ' + formData.lastName}
          </h3>
          <h3 className="text-md text-gray-700 mt-1">{formData.gender}</h3>
          <h3 className="text-md text-gray-700 mt-1">Age: 17</h3>
          <h3 className="text-sm text-gray-600 mt-2 text-center">{formData.about}</h3>
          <h3 className="text-sm text-blue-500 mt-2">{formData.Country}</h3>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
