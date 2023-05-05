import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import { SERVER_URL } from "../../constants/constants";

function ResetPasswordAdmin() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  const [msg, setMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setToken(searchParams.get("token"));
    setId(searchParams.get("id"));
  }, [location.search]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
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
        .then((res) => {
          if (res.status === 200) {
            setErrMsg("");
            setMsg("Successfully reset your password");
          } else if (res.status === 500) {
            throw new Error("Password already updated.");
          }
        })
        .catch((error) => {
          throw new Error(error.message);
        });
    } catch (e) {
      setMsg("");
      setErrMsg(e.message);
    }
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
            <input
              className="border w-full py-3 px-3 mb-3"
              type={pwStyle.type}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              required
            />
            <div className="w-full  flex justify-end pb-3 opacity-25 cursor-pointer ">
              {pwStyle.type === "password" ? (
                <EyeSlashIcon
                  className="h-7 w-7 relative -mt-12  mr-3 mb-5"
                  onClick={showTypeHandler}
                />
              ) : (
                <EyeIcon
                  className="h-7 w-7 relative -mt-12  mr-3 mb-5"
                  onClick={showTypeHandler}
                />
              )}

            </div>
            
          </label>
          <label htmlFor="password">
            Confirm Password
            
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
          </label>

          {msg ? (
            <div className="text-center mb-5 text-main-color-1">{msg}</div>
          ) : (
            <div className="text-center mb-5 text-red-600">{errMsg}</div>
          )}

          <div className="text-center mt-8">

            <button
              className="rounded px-8 py-2 mb-12 cursor-pointer bg-main-color-1 hover:bg-gray-scale-3 text-white hover:text-main-color-1"
              type="submit"
            >
              Reset Password
            </button>
          </div>

          <div className="text-main-color-1 text-center underline underline-offset-auto hover:opacity-50">
            <a href="/api/admin">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordAdmin;
