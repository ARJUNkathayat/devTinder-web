import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { BASE_URL } from './utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './utils/userSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store)=>store.user)

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:7000/profile/view", {
        withCredentials: true,
      });
      console.log("uuuuuuu",res)
      dispatch(addUser(res.data));  // 👈 dispatch only the actual user data
    } catch (err) {
      if(err.status == 401){
        navigate("/login")
      }
     
      console.log(err);
    }
  };

  useEffect(() => {
    if(!userData){
      fetchUser();
    }
   
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
