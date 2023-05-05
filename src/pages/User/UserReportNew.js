import React from "react";
import UserReportNew from "../../components/User/UserReportNew";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { pageHeight } from "../../constants/constants";

//User single report page
function UserReport() {
  return (
    <>
      <Navbar />
      <div className="w-full flex items-center flex-row" style={pageHeight}>
        <div className="h-full w-1/6">
          <SideBar />
        </div>
        <div className="h-full w-5/6 flex flex-col">
          <UserReportNew />
        </div>
      </div>
    </>
  );
}

export default UserReport;
