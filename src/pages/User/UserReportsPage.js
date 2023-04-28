import React from "react";
import UserReport from "../../components/User/UserReport";
import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { pageHeight } from "../../constants/constants";
import { useSelector } from "react-redux";

function UserReportsPage() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex items-center flex-row" style={pageHeight}>
        <div className="h-full w-1/6">
          <SideBar />
        </div>
        <div className="h-full w-5/6 flex flex-col px-3 py-4">
          <UserReport />
        </div>
      </div>
    </>
  );
}

export default UserReportsPage;
