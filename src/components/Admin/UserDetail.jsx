import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/appContext";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";

const UserDetail = () => {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const navigation = useNavigate();
  const { userDetail, setUserDetail } = useContext(AppContext);

  // useEffect(() => {
  //   if (admin) {
  //     if (!adminDetail) {
  //       getAdminDetail();
  //     }
  //   }
  // }, []);

  return (
    <div>
      <div className="flex justify-center mt-20">
        <ul className="flex items-start flex-col w-1/5">
          <li className="flex flex-row m-6">ID :</li>
          <li className="flex flex-row basis-2 m-6">Name :</li>
          <li className="flex flex-row m-6">Email:</li>
        </ul>
        <ul className="flex items-start flex-col w-1/5">
          <li className="flex flex-row m-6">{userDetail._id}</li>
          <li className="flex flex-row m-6">{userDetail.name}</li>
          <li className="flex flex-row m-6">{userDetail.email}</li>
        </ul>
      </div>
      <div className="flex flex-row justify-center">
        <button className="flex justify-center items-center  h-9 bg-gray-scale-3 cursor-pointer m-20 w-52">
          Reset the Password
        </button>
        <button className="flex justify-center items-center h-9 bg-delete cursor-pointer m-20 w-52">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
