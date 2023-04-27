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
      setErrMsg(error.message);
    }
  };
  


  return (
    <div className="flex justify-center items-center h-screen bg-white overflow-hidden">
      <div className="flex justify-center items-center m-auto mt-5 w-10/12 min-w-fit">
        <form onSubmit={registAdmin} id="login" className="w-3/5 bg-gray-scale-3">
          <div className="text-4xl flex justify-center items-center">
            <img
              src={`${process.env.PUBLIC_URL}/favicon.ico`}
              alt="Logo"
              className="h-10 w-10 mr-1.5"
            />
            <h1 className="mt-2">Whistleblowing</h1>
          </div>
          <div className="text-center">
            <h1 className=" text-main-color-1 text-3xl font-normal m-10">
              Input Your Information to register
            </h1>
            <div>Invited members must set a password and complete registration.</div>
            <div className="text-red-600 mb-10">If you do not set a password, your account will not be activated.</div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col w-2/5 ml-20">
              <label htmlFor="emali" className="my-5">New admin's email :</label>
              <label htmlFor="role" className="my-3">New Admin's role :</label>
              <label htmlFor="name" className="my-3">New admin's name :</label>
              <label htmlFor="password" className="my-3">Password :</label>
              <label htmlFor="password" className="my-3">Confirm Password :</label>
            </div>
            <div className="flex flex-col m-5 w-full">
              <label htmlFor="email">
                <input
                  className="border w-11/12 h-10 mb-2"
                  type="email"
                  value={email}
                  disabled={true}
                  required
                />
              </label>
              <label htmlFor="role">
                <input
                  className="border w-11/12 h-10 mb-2"
                  type="text"
                  value={role}
                  disabled={true}
                  required
                />
              </label>
              <label htmlFor="name">
                <input
                  className="border w-11/12 h-10 mb-2"
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
                <input
                  className="border w-11/12 h-10 mb-2"
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
                <input
                  className="border w-11/12 h-10 mb-2"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  value={confirmPassword}
                  required
                />
              </label>
            </div>
          </div>
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
              Register
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AdminRegist;
