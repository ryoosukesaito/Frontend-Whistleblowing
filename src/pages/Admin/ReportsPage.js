import React from "react";
import AdminReport from "../../components/Admin/AdminReport";
import SideBar from "../../components/SideBar";
import { pageHeight } from "../../constants/constants";

function ReportsPage() {
  return (
    <div className="w-screen flex items-center flex-row" style={pageHeight}>
      <div className="h-full w-1/6">
        <SideBar />
      </div>
      <div className="h-full w-5/6 flex flex-col justify-between">
        <AdminReport />
      </div>
    </div>
  );
}

export default ReportsPage;
