import React from "react";
import AdminReport from "../../components/Admin/AdminReport";
import SideBar from "../../components/SideBar";
import NavbarAdmin from "../../components/NavbarAdmin";
import { pageHeight } from "../../constants/constants";

function ReportsPage() {
  return (
    <>
      <NavbarAdmin />
      <div className="w-full flex items-center flex-row" style={pageHeight}>
        <div className="h-full w-1/6">
          <SideBar />
        </div>
        <div className="h-full w-5/6 flex flex-col overflow-hidden">
          <AdminReport />
        </div>
      </div>
    </>
  );
}

export default ReportsPage;
