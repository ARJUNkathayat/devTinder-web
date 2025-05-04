import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from './utils/constant';
import { removeUser } from './utils/userSlice';
import { useState } from 'react';

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const navigate= useNavigate();
  const dispatch = useDispatch();
 

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/Logout`, {}, { withCredentials: true });
      dispatch(removeUser())
      navigate("/login"); // or wherever you want to redirect

    } catch (err) {
     
      console.error("Logout failed", err);
      
    }
  };

  return (
    <div className="navbar bg-info shadow-sm px-6">
      {/* Brand */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl text-white">DevTinder</Link>
      </div>

      {/* User Section */}
      <div className="flex items-center gap-4">
        {/* Welcome Text */}
        <div className="text-white font-semibold hidden md:block">
          Welcome, {user?.firstName || "Guest"} {user?.lastName || ""}
        </div>

        {/* Avatar Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                src={
                  user?.photo ||
                  'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/request">Request</Link></li>
            <li><Link to="/connections">Connections</Link></li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
