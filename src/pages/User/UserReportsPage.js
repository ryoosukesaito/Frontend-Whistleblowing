import React from "react";
import UserReport from "../../components/User/UserReport";
import SideBar from "../../components/SideBar";
import { pageHeight } from "../../constants/constants";
import { useSelector } from "react-redux";

function UserReportsPage() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="w-full flex items-center flex-row" style={pageHeight}>
      <div className="h-full w-1/6">
        <SideBar />
      </div>
      <div className="h-full w-5/6 flex flex-col mt-3 px-3 py-4">
        <UserReport />
      </div>
    </div>
  );
}

export default UserReportsPage;
