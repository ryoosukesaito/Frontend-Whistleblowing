import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import { SERVER_URL } from "../../constants/constants";

function ResetPasswordAdmin() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setToken(searchParams.get("token"));
    setId(searchParams.get("id"));
  }, [location.search]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password !== password2) throw new Error("Password doesn't match.");
    await fetch(`${SERVER_URL}/auth/resetPassword`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        adminId: id,
        token: token,
        password: password,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    navigate("/");
  };

  //Icon trigger js
  const [pwStyle, setPwStyle] = useState({
    type: "password",
  });
  function showTypeHandler() {
    pwStyle.type === "password"
      ? setPwStyle({ type: "text" })
      : setPwStyle({ type: "password" });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="justify-center items-center bg-gray-scale-4 m-20 p-10 w-1/3 min-w-fit">
        <form onSubmit={handleLogin} id="login" className="">
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
          <h2 className=" text-main-color-1 text-2xl font-normal text-center mb-8">
            Reset Password
          </h2>
          <label htmlFor="email">
            Password
            <div className="flex items-center mb-4">
              <input
                className="border w-full py-3 px-3 mr-2"
                type={pwStyle.type}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required
              />
              <div
                className="w-8 h-8 opacity-25 cursor-pointer "
                onClick={showTypeHandler}
              >
                {pwStyle.type === "password" ? (
                  <EyeSlashIcon className="h-8 w-8" />
                ) : (
                  <EyeIcon className="h-8 w-8" />
                )}
              </div>
            </div>
            
          </label>
          <label htmlFor="password">
            Confirm Password
            <div className="flex items-center mb-4">
            <input
              className="border w-full py-3 px-3 mb-5 mr-10"
              type="password"
              placeholder="Confirm New Password"
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
              value={password2}
              required
            />
            
            </div>
            
          </label>
          <div className="text-center mt-8">
            <button
              className="rounded px-8 py-2 mb-12 cursor-pointer bg-main-color-1 hover:bg-gray-100 text-white"
              type="submit"
            >
              Reset Password
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

export default ResetPasswordAdmin;
