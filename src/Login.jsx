import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const [form, setForm] = useState(true); // true = login, false = signup
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleForm = () => {
    setForm(prev => !prev);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstName = firstNameRef?.current?.value;
    const lastName = lastNameRef?.current?.value;

    try {
      const url = form
        ? "http://localhost:7000/Login"
        : "http://localhost:7000/Signup";

       
      const payload = form
        ? { email, password }
        : { email, password, firstName, lastName };
        console.log("Payload being sent:", payload);


      const res = await axios.post(url, payload, {
        withCredentials: true,
      });

      dispatch(addUser(res.data));
      dispatch(addUser(res.data));

if (form) {
  navigate("/"); 
} else {
  navigate("/profile"); 
}


      
    } catch (err) {
      console.error("Error:", err);
      setError(err?.response?.data || "Something went wrong");
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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter your Email"
              className="input input-bordered w-full"
              required
            />

            {!form && (
              <>
                <input
                  type="text"
                  ref={firstNameRef}
                  placeholder="Enter your First Name"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="text"
                  ref={lastNameRef}
                  placeholder="Enter your Last Name"
                  className="input input-bordered w-full"
                  required
                />
              </>
            )}

            <input
              type="password"
              ref={passwordRef}
            
              placeholder="Enter your Password"
              className="input input-bordered w-full"
              required
            />

            {error && (
              <p className="text-red-600 font-bold">{error}</p>
            )}

            {form ? <button className="btn btn-primary w-full">Submit</button> : <button className="btn btn-primary w-full">Create your Account</button>}

            
            <div className="flex gap-2">
              <p>{form ? "New to DevTinder?" : "Already have an account?"}</p>
              <p className="font-bold text-blue-500 cursor-pointer" onClick={toggleForm}>
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
