import React from "react";
import { sidebarMenu } from "../constants/constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import {ChevronDownIcon} from '@heroicons/react/24/solid'
import {ArrowRightOnRectangleIcon} from '@heroicons/react/24/solid'

const SideBar = () => {
  const [menubar, setMenubar] = useState(false);
  function handleLogout(e) {
    e.preventDefault();
    window.location.replace("/");
  }
  return (
    <div className="h-full w-full flex flex-col px-3 py-4 overflow-y-auto bg-gray-scale-4">
      <div className="items-start">
      <div className="my-4">
        <Link to="/api/admin/reports" className="text-lg py-4">
          Reports
        </Link>
      </div>
      <div>
        <button
          className="text-lg flex items-center cursor-pointer py-4"
          type="button"
          onClick={() => setMenubar(!menubar)}
        >
          Managements
          <ChevronDownIcon className="h-6 w-6 ml-3"/>
        </button>
        <ul id="managements-menu" className={"pb-4" + (menubar ? " block" : " hidden")}>
          {sidebarMenu.map((menu, idx) => (
            <li className="py-4" key={idx}>
              <a href={menu.href}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </div>
      </div>
      
      <div className="border-t border-t-gray-scale-3  my-4 pt-4 text-lg">
        <button className="flex items-center text-center cursor-pointer" onClick={handleLogout}>
          Sign out
          <ArrowRightOnRectangleIcon className="h-7 w-7 ml-3"/>
        </button>
      </div>
      
    </div>
  );
};

export default SideBar;
