import React, { useState } from "react";
import { sidebarMenu } from "../constants/constants";
import { Link, useNavigate } from "react-router-dom";
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
    if (user) {
      await logoutUser(user);
      navigate("/");
    }
    if (admin) {
      await logoutAdmin(admin);
      navigate("/api/admin");
    }
    window.location.reload();
  }

  if (admin)
    return (
      <div className="h-full w-full flex flex-col pl-10 pr-3 py-4 overflow-y-auto bg-gray-scale-4 text-2xl">
        <div className="pb-5">
          <div className="my-4">
            <a href="/api/admin/reports" className="py-4 hover:opacity-50">
              Reports
            </a>
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
      <div className="h-full w-full flex flex-col pl-10 pr-3 py-4 overflow-y-auto bg-gray-scale-4 text-2xl">
        <div className="pb-5">
          <div className="my-10 flex">
            <a href="/api/user/reports" className="py-4 hover:opacity-50">
              History
            </a>
          </div>
          <div className="my-10">
            <Link to="/api/user/reports/new" className="py-4 hover:opacity-50">
              Add report
            </Link>
          </div>
        </div>

        <div className="border-t border-t-gray-scale-3 w-32 my-4 pt-4">
          <button
            key="signout"
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
};

export default SideBar;
