import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const [form, setform] = useState(true);

  const changeFormState = () => setform(prev => !prev);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSubmitOnLogin = async (e) => {
    e.preventDefault();

    const email = emailref.current.value;
    const password = passwordref.current.value;

    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const res = await axios.post("http://localhost:7000/Login", {
        email,
        password
      },{
        withCredentials:true
      });
     
      dispatch(addUser(res.data))
      navigate("/")
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="py-28 flex justify-center">
      <div className="card card-side bg-base-100 shadow-sm w-full max-w-lg">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie"
            className="object-cover w-48 h-full"
          />
        </figure>
        <div className="card-body w-full p-6">
          <h1 className="card-title text-center text-2xl font-semibold mb-4">
            Welcome To DevTinder
          </h1>
          <h2 className="text-center text-xl mb-6">{form ? "Login" : "Signup"}</h2>
          <form className="space-y-4" onSubmit={handleSubmitOnLogin}>
            <input
              type="text"
              ref={emailref}
              placeholder="Enter your Email"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              ref={passwordref}
              placeholder="Enter your Password"
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary w-full">Submit</button>
            <div className="flex gap-2">
              <p>{form ? "New to DevTinder?" : "Already have an account?"}</p>
              <p className="font-bold text-blue-500 cursor-pointer" onClick={changeFormState}>
                {form ? "Signup" : "Login"}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
