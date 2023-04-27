import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";

function AdminRegist() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [msg, setMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");


  const navigate = useNavigate();

  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const token = query.get('token')
  const email = query.get('email')
  const role = query.get('role')

  
  const registAdmin = async (e) => {
    e.preventDefault();

    try {
      
      if(password!==confirmPassword) 
        throw new Error("Password doesn't match.")
      await fetch(`${SERVER_URL}/api/admin/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token:token,
          email:email,
          name:name,
          password:password
        }),
      })
      navigate("/api/admin")
    } catch (error) {
      setMsg("");
      setErrMsg(e.message);
    }
  };
  


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="justify-center items-center bg-gray-scale-4 m-auto p-10 w-1/3 min-w-fit">
        <form onSubmit={registAdmin} id="login" className="">
          <div className="text-4xl flex justify-center items-center mb-24">
            <img
              src={`${process.env.PUBLIC_URL}/favicon.ico`}
              alt="Logo"
              className="h-10 w-10 mr-1.5"
            />
            <h1 className="">Whistleblowing</h1>
          </div>
          <h1 className=" text-main-color-1 text-3xl font-normal text-center mb-8">
            Input Your Information to regist
          </h1>
          <label htmlFor="email">
            Email
            <input
              className="border w-full py-3 px-3 mb-3"
              type="email"
              value={email}
              disabled={true}
              required
            />
          </label>
          <label htmlFor="role">
            Role
            <input
              className="border w-full py-3 px-3 mb-3"
              type="text"
              value={role}
              disabled={true}
              required
            />
          </label>
          <label htmlFor="name">
            Name
            <input
              className="border w-full py-3 px-3 mb-3"
              type="text"
              placeholder="Your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              className="border w-full py-3 px-3 mb-5"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              required
            />
          </label>
          <label htmlFor="password">
            Confirm Password
            <input
              className="border w-full py-3 px-3 mb-5"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword}
              required
            />
          </label>
          {msg ? (
            <div className="text-center mb-5 text-main-color-1">{msg}</div>
          ) : (
            <div className="text-center mb-5 text-red-600">{errMsg}</div>
          )}
          
          <div className="text-center">
            <button
              className="rounded px-8 py-2 mb-12 cursor-pointer bg-main-color-1 hover:bg-gray-scale-3 text-white hover:text-main-color-1"
              type="submit"
            >
              Regist
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AdminRegist;
