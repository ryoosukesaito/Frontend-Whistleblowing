import React from "react";
import UserList from "../../components/Admin/UserList";
import SideBar from "../../components/SideBar";
import { pageHeight } from "../../constants/constants";

function UserAccounts() {
  return (
    <div className="w-screen flex items-center flex-row" style={pageHeight}>
      <div className="h-full w-1/6">
        <SideBar />
      </div>
      <div className="h-full w-5/6 flex flex-col justify-between px-3 py-4">
        <UserList />
      </div>
    </div>
  );
}

export default UserAccounts;
