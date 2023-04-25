import React from "react";
import { sidebarMenu } from "../constants/constants";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import {
  useLogoutAdminMutation,
  useLogoutUserMutation,
} from "../services/appAPI";
import { useSelector } from "react-redux";

const SideBar = () => {
  const admin = useSelector((state) => state.admin);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [menubar, setMenubar] = useState(false);
  const [logoutAdmin] = useLogoutAdminMutation();
  const [logoutUser] = useLogoutUserMutation();
  async function handleLogout(e) {
    e.preventDefault();
    if (admin) {
      await logoutAdmin(admin);
      navigate("/api/admin");
    }
    if (user) {
      console.log("Plz delete 'root' in Application inspect(検証)");
      await logoutUser(user);
      navigate("/");
    }
    window.location.reload();
  }

  if (admin)
    return (
      <div className="h-full w-full flex flex-col pl-10 pr-3 py-4 overflow-y-auto bg-gray-scale-4 text-2xl">
        <div className="items-start">
          <div className="my-4">
            <Link to="/api/admin/reports" className="py-4 hover:opacity-50">
              Reports
            </Link>
          </div>
          <div>
            <button
              className="flex items-center cursor-pointer py-4 hover:opacity-50"
              type="button"
              onClick={() => setMenubar(!menubar)}
            >
              Managements
              <ChevronDownIcon className="h-6 w-6 ml-3" />
            </button>
            <ul
              id="managements-menu"
              className={"pb-4 text-xl" + (menubar ? " block" : " hidden")}
            >
              {sidebarMenu.map((menu, idx) => (
                <li className="py-4 hover:opacity-50" key={idx}>
                  <a href={menu.href}>{menu.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-t-gray-scale-3 w-32 my-4 pt-4">
          <button
            key="signout"
            className="flex items-center text-center cursor-pointer"
            className="flex items-center text-center cursor-pointer hover:opacity-50"
            onClick={handleLogout}
            method="delete"
          >
            Sign out
            <ArrowRightOnRectangleIcon className="h-6 w-6 mt-1 ml-3" />
          </button>
        </div>
      </div>
    );

  if (user)
    return (
      <div className="h-full w-full flex flex-col px-3 py-4 overflow-y-auto bg-gray-scale-4">
        <div className="items-start">
          <div className="my-4">
            <Link to="/api/user/reports" className="text-lg py-4">
              History
            </Link>
          </div>
          <div>
            <button
              key="addreport"
              className="text-lg flex items-center cursor-pointer py-4"
              type="button"
              onClick={() => setMenubar(!menubar)}
            >
              <Link to="/api/user/reports/new" className="text-lg py-4">
                Add Report
              </Link>
              {/* <ChevronDownIcon className="h-6 w-6 ml-3" /> */}
            </button>
            {/* <ul
          id="managements-menu"
          className={"pb-4" + (menubar ? " block" : " hidden")}
        >
          {sidebarMenu.map((menu, idx) => (
            <li className="py-4" key={idx}>
              <a href={menu.href}>{menu.name}</a>
            </li>
          ))}
        </ul> */}
          </div>
        </div>

        <div className="border-t border-t-gray-scale-3 my-4 pt-4 text-lg">
          <button
            key="signout"
            className="flex items-center text-center cursor-pointer"
            onClick={handleLogout}
            method="delete"
          >
            Sign out
            <ArrowRightOnRectangleIcon className="h-7 w-7 ml-3" />
          </button>
        </div>
      </div>
    );
};

export default SideBar;
