import React,{useEffect, useState,useContext} from "react"
import { AppContext } from "../../context/appContext";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { SERVER_URL } from "../../constants/constants";

const UserDetail = () => {
  const { id } = useParams();
  const admin = useSelector((state) => state.admin);
  const { userDetail, setUserDetail } = useContext(AppContext);

  useEffect(() => {
    if (admin) {
      if (!userDetail) {
        getUserDetail();
      }
    }
  }, []);

  const getUserDetail=async()=>{

    const getUserDetailUrl = `/api/admin/users/${id}`;
    await fetch(`${SERVER_URL}${getUserDetailUrl}`)
      .then((res) => res.json())
      .then((data) => setUserDetail(data));
  }

  const resetUserPassword =async()=>{
    console.log(userDetail.email);
    await fetch(`${SERVER_URL}/api/user/password/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userDetail.email,
      })
    })
  }

  return (
    <div>
      <div className='flex justify-center mt-20'>
        <ul className="flex items-start flex-col w-1/5">
          <li className="flex flex-row m-6">
            ID :
          </li>
          <li className="flex flex-row basis-2 m-6">
            Name :
          </li>
          <li className="flex flex-row m-6">
            Email:
          </li>
        </ul>
        <ul className="flex items-start flex-col w-1/5">
          <li className="flex flex-row m-6"> 
            {userDetail._id}
          </li>
          <li className="flex flex-row m-6">
            {userDetail.name}
          </li>
          <li className="flex flex-row m-6">
            {userDetail.email}
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="flex justify-center items-center  h-9 bg-gray-scale-3 cursor-pointer m-20 w-52"
          onClick={resetUserPassword}
        >
          Reset the Password
        </button>

      </div>
    </div>
  )
}

export default UserDetail
