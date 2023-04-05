import React from "react";
import CategoryList from "../../components/Admin/CategoryList";
import SideBar from "../../components/SideBar";
import { pageHeight } from "../../constants/constants";

function Categories() {
  return (
    <div className="w-screen flex items-center flex-row" style={pageHeight}>
      <div className="h-full w-1/6">
        <SideBar />
      </div>
      <div className="h-full w-5/6 flex flex-col justify-between">
        <CategoryList />
      </div>
    </div>
  );
}

export default Categories;
