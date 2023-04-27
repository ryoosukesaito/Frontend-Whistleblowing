import React, { useState,useEffect } from "react";
import { useUpdatePasswordUserMutation } from "../../services/appAPI";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useLogoutUserMutation,
} from "../../services/appAPI";

const EditUserPassword=()=>{
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [msg, setMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [logoutUser] = useLogoutUserMutation();
  const [updatePasswordUser, { error }] = useUpdatePasswordUserMutation();

  const user = useSelector((state) => state.user);
  const [token,setToken]=useState("")
  const navigate = useNavigate()

  useEffect(() => {
    if(user){
      setToken(user.token)
    } else{
      navigate("/")
    }
  }, [])
  
  
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      if (newPassword !== newPassword2)
        throw new Error("Password doesn't match.");
        await updatePasswordUser({body:{ currentPassword, newPassword},token:token}).then(
          ({ data }) => {
            if (data) setMsg(data.message);
            if (error) console.error(error);
          }
        )
        .then(() => {
            setErrMsg("");
            setMsg("Successfully reset your password");
            logoutUser(user);
            navigate("/")
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
      <div className="flex justify-center items-center bg-gray-scale-4 m-auto p-10">
        <form onSubmit={handlePasswordReset} id="onSubmit" className="">
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
          <h2 className=" text-main-color-1 text-2xl font-normal text-center mb-8">
            Reset password
          </h2>
          <label htmlFor="password">
            Current password
            <input
              className="border rounded w-full py-3 px-3 mb-5"
              type={pwStyle.type}
              placeholder="Current password"
              onChange={(e) => {
                setCurrentPassword(e.target.value);
              }}
              value={currentPassword}
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              className="border w-full py-3 px-3 mb-3"
              type={pwStyle.type}
              placeholder="New password"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              value={newPassword}
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
            Confirm password
            <input
              className="border rounded w-full py-3 px-3 mb-5"
              type="password"
              placeholder="Confirm new password"
              onChange={(e) => {
                setNewPassword2(e.target.value);
              }}
              value={newPassword2}
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
              Reset password
            </button>
          </div>
          {/* <div className="text-main-color-1 text-center underline underline-offset-auto">
            <a href="/">Login</a>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default EditUserPassword;
