import React from "react";
import SideBar from "../../components/SideBar";
import NavbarAdmin from "../../components/NavbarAdmin";
import { pageHeight } from "../../constants/constants";
import AdminsDetail from "../../components/Admin/AdminsDetail";

function AdminDetail() {
  return (
    <>
      <NavbarAdmin />
      <div className="w-screen flex items-center flex-row" style={pageHeight}>
        <div className="h-full w-1/6">
          <SideBar />
        </div>
        <div className="h-full w-5/6 flex flex-col justify-between">
          <AdminsDetail />
        </div>
      </div>
    </>
  );
}

export default AdminDetail;
