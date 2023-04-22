import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginAdminMutation } from "../../services/appAPI";

import { SERVER_URL } from "../../constants/constants";

function RequestResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [loginAdmin, { error }] = useLoginAdminMutation();

  const RequestSendHandler = async (e) => {
    e.preventDefault();

    await fetch(`${SERVER_URL}/auth/requestResetPassword`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center bg-gray-scale-4 m-auto p-10">
        <form onSubmit={RequestSendHandler} id="login" className="">
          <div className="text-4xl flex justify-center items-center mb-24">
            <img
              src={`${process.env.PUBLIC_URL}/favicon.ico`}
              alt="Logo"
              className="h-10 w-10 mr-1.5"
            />
            <h1 className="">Whistleblowing</h1>
          </div>
          <h1 className=" text-main-color-1 text-3xl font-normal text-center mb-8">
            Admin
          </h1>
          <label htmlFor="email">
            Email
            <input
              className="border w-full py-3 px-3 mb-10"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
            />
          </label>

          <div className="text-center">
            <button
              className="px-6 py-2 mb-6 cursor-pointer bg-main-color-1 hover:bg-gray-100 text-white"
              type="submit"
            >
              Submit Request
            </button>
          </div>
          <div className="text-main-color-1 text-center underline underline-offset-auto">
            <a href="/">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestResetPassword;
