import React from "react";
import AdminList from "../../components/Admin/AdminList";
import SideBar from "../../components/SideBar";
import NavbarAdmin from "../../components/NavbarAdmin";
import { pageHeight } from "../../constants/constants";

function AdminAccounts() {
  return (
    <>
      <NavbarAdmin />
      <div className="w-screen flex items-center flex-row" style={pageHeight}>
        <div className="h-full w-1/6">
          <SideBar />
        </div>
        <div className="h-full w-5/6 flex flex-col justify-between overflow-hidden">
          <AdminList />
        </div>
      </div>
    </>
  );
}

export default AdminAccounts;
