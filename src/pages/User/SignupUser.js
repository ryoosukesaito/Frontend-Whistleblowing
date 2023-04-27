import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";

function SignupUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password);
    console.log(confirmPassword);
    try {
      if (password !== confirmPassword) {
        console.log("error");
        throw new Error("Password doesn't match.");
      }
      await fetch(`${SERVER_URL}/api/user/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            navigate("/");
          } else if (res.status === 500) {
            throw new Error("something bad.");
          }
        })
        .catch((error) => {
          throw new Error(error.message);
        });
    } catch (error) {
      console.log("catch error");
      setMsg("");
      setErrMsg(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="justify-center items-center bg-gray-scale-4 p-10 w-1/2">
        <form onSubmit={handleSubmit} id="login" className="">
          <div className="text-4xl flex justify-center items-center mb-20">
            <img
              src={`${process.env.PUBLIC_URL}/favicon.ico`}
              alt="Logo"
              className="h-10 w-10 mr-1.5"
            />
            <h1 className="">Whistleblowing</h1>
          </div>
          <h1 className=" text-main-color-1 text-3xl font-normal text-center mb-7">
            Register account
          </h1>

          <label htmlFor="email">
            Email
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
              className="border w-full py-3 px-3 mb-3"
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword}
              required
            />
          </label>
          <label htmlFor="name">
            Name (optional)
            <input
              className="border w-full py-3 px-3 mb-10"
              type="name"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </label>
          {msg ? (
            <div className="text-center mb-5 text-main-color-1">{msg}</div>
          ) : (
            <div className="text-center mb-5 text-red-600">{errMsg}</div>
          )}
          <div className="text-center">
            <button
              className="rounded px-8 py-2 mb-8 cursor-pointer bg-main-color-1 hover:bg-gray-scale-3 text-white hover:text-main-color-1"
              type="submit"
            >
              Sign up
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

export default SignupUser;
