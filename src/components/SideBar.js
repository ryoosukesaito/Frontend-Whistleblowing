import React from "react";
import { sidebarMenu } from "../constants/constants";
import { Link } from "react-router-dom";

const SideBar = () => {
  function handleLogout(e) {
    e.preventDefault();
    window.location.replace("/");
  }
  return (
    <div className="h-full w-full flex flex-col items-start ">
      <div href="">
        <Link to="/api/admin/reports">
          <button>Reports</button>
        </Link>
      </div>
      <li className="list-none">
        <button
          type="button"
          aria-controls="managements-menu"
          data-collapse-toggle="managements-menu"
        >
          Managements
        </button>
        <ul id="managements-menu" className="">
          {sidebarMenu.map((menu, idx) => (
            <li key={idx}>
              <a href={menu.href}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </li>

      <button onClick={handleLogout}>Sign out</button>
    </div>
  );
};

export default SideBar;
