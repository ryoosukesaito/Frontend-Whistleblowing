import React from "react";
import UserReportDetails from "../../components/User/UserReportDetails";
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
        <div className="h-full w-5/6 flex flex-col mt-3 px-3 py-4">
          <UserReportDetails />
        </div>
      </div>
    </>
  );
}

export default UserReport;
