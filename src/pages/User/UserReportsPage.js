import React from "react";
import UserReport from "../../components/User/UserReport";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { pageHeight } from "../../constants/constants";

function UserReportsPage() {
  return (
    <>
      <Navbar />
      <div
        className="w-full h-full flex items-center flex-row"
        style={pageHeight}
      >
        <div className="h-full w-1/6">
          <SideBar />
        </div>
        <div className="h-full w-5/6 flex flex-col">
          <UserReport />
        </div>
      </div>
    </>
  );
}

export default UserReportsPage;
