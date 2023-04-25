import React, { useState } from "react";
import { useRequestResetUserMutation } from "../../services/appAPI";

function RequestResetPasswordUser() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [requestResetUser, { error }] = useRequestResetUserMutation();

  const RequestSendHandler = async (e) => {
    e.preventDefault();

    requestResetUser({ email }).then(({ data }) => {
      if (data) setMsg(data.message);
      if (error) console.error(error);
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="justify-center items-center bg-gray-scale-4 m-20 p-10 w-1/3 min-w-fit">
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
            User
          </h1>
          <label htmlFor="email">
            Email
            <input
              className="border w-full py-3 px-3 mb-12"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
            />
          </label>

          {error ? (
            <div className="text-center mb-5 text-red-600">
              {error.data.error}
            </div>
          ) : (
            <div className="text-center mb-5 text-main-color-1">{msg}</div>
          )}

          <div className="text-center">
            <button
              className="rounded px-8 py-2 mb-12 cursor-pointer bg-main-color-1 hover:bg-gray-scale-3 text-white hover:text-main-color-1 disabled:bg-gray-300 disabled:text-gray-400"
              type="submit"
              disabled={msg}
            >
              Submit Request
            </button>
          </div>
          <div className="text-main-color-1 text-center underline underline-offset-auto hover:opacity-50">
            <a href="/">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestResetPasswordUser;
