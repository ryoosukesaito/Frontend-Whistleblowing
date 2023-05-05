import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../../context/appContext";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { SERVER_URL } from "../../constants/constants";

const UserDetail = () => {
  const { id } = useParams();
  const admin = useSelector((state) => state.admin);
  const { userDetail, setUserDetail } = useContext(AppContext);
  const navigation = useNavigate();

  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (admin) {
      if (!userDetail) {
        getUserDetail();
      }
    }
  }, []);

  const getUserDetail = async () => {
    const getUserDetailUrl = `/api/admin/users/${id}`;
    await fetch(`${SERVER_URL}${getUserDetailUrl}`)
      .then((res) => res.json())
      .then((data) => setUserDetail(data));
  };

  const resetUserPassword = async () => {
    await fetch(`${SERVER_URL}/api/user/password/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userDetail.email,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setMsg("Your request has been sent successfully!");
      }
    });
  };

  const handleBack = (e) => {
    navigation(`/api/admin/users/all`);
  };

  return (
    <div className="h-full w-full">
      <div className="flex flex-row m-10 cursor-pointer" onClick={handleBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <div>Back</div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="border border-black w-auto">
          <div className="flex flex-row justify-center m-10">
            <ul className="flex items-start flex-col mr-20">
              <li className="my-3">ID :</li>
              <li className="my-3">Name :</li>
              <li className="my-3">Email:</li>
            </ul>
            <ul className="flex items-start flex-col">
              <li className="my-3">{userDetail._id}</li>
              <li className="my-3">{userDetail.name}</li>
              <li className="my-3">{userDetail.email}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center ">
        <button
          className="flex justify-center items-center  h-9 bg-gray-scale-3 cursor-pointer mx-20 mt-10 w-52 disabled:bg-gray-300 disabled:text-gray-400"
          onClick={resetUserPassword}
          disabled={msg}
        >
          Reset the Password
        </button>
      </div>
      {msg && <div className="text-center  text-main-color-1 m-7">{msg}</div>}
    </div>
  );
};

export default UserDetail;
