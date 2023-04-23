import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function AdminAccountCreate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="justify-center items-center bg-gray-scale-4 my-20 p-10 w-1/3 ">
        <form onSubmit={handleSignIn} id="login" className="">
          <div className="text-4xl flex justify-center items-center mb-20">
            <img
              src={`${process.env.PUBLIC_URL}/favicon.ico`}
              alt="Logo"
              className="h-10 w-10 mr-1.5"
            />
            <h1 className="">Whistleblowing</h1>
          </div>
          <h1 className=" text-main-color-1 text-3xl font-normal text-center mb-5">
            Invite new admin/staff
          </h1>
          <div className="text-sm text-center mb-10">
            <p>
              Invited members must set a password and complete registration.
            </p>
            <p className="text-red-600">
              If you do not set a password, your account will not be activated.
            </p>
          </div>
          <label htmlFor="email">
            New member's email
            <input
              className="border w-full py-3 px-3 mb-3"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
            />
          </label>
          <label htmlFor="email">
            New member's role
            <input
              className="border w-full py-3 px-3 mb-3"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
            />
          </label>
          <label htmlFor="name">
            Name
            <input
              className="border w-full py-3 px-3 mb-3"
              type="name"
              placeholder="Name"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
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
          <label htmlFor="confirm">
            Confirm your password
            <input
              className="border w-full py-3 px-3 mb-10"
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              required
            />
          </label>
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

export default AdminAccountCreate;
