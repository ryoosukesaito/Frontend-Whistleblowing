import React from "react";
import ReportDetails from "../../components/Admin/ReportDetails";
import SideBar from "../../components/SideBar";
import { pageHeight } from "../../constants/constants";

function Report() {
  return (
    <div className="w-full flex items-center flex-row" style={pageHeight}>
      <div className="h-full w-1/6">
        <SideBar />
      </div>
      <div className="h-full w-5/6 flex flex-col mt-3 px-3 py-4">
        <ReportDetails />
      </div>
    </div>
  );
}

export default Report;
