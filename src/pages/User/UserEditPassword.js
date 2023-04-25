import React from "react";
import EditUserPassword from "../../components/User/EditUserPassword";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { pageHeight } from "../../constants/constants";

function UserEditPassword() {
  return (
    <>
      <Navbar />
      <div className="w-screen flex items-center flex-row" style={pageHeight}>
        <div className="h-full w-1/6">
          <SideBar />
        </div>
        <div className="h-full w-5/6 flex flex-col justify-between">
          <EditUserPassword />
        </div>
      </div>
    </>
  );
}

export default UserEditPassword;
