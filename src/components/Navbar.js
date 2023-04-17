import React from "react";
import { useState } from "react";
import {BellIcon} from '@heroicons/react/24/solid'
import {UserCircleIcon} from '@heroicons/react/24/solid'
import {Bars3Icon} from '@heroicons/react/24/solid'


function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-scale-2 text-white">
      <div className="w-full mx-2 flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static">
          <a className="text-xl flex leading-snug px-3  py-2 items-center" href="#">
            <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Logo" className="h-7 w-7 mr-1.5" />
            Whistleblowing Admin
          </a>
          <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbar(!navbar)}
          >
            <Bars3Icon className="h-8 w-8"/>
          </button>
        </div>
        <div className={"lg:flex flex-grow items-center text-sm" + 
                        (navbar ? " flex" : " hidden")}>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center leading-snug hover:opacity-75" href="#">
                <BellIcon className="h-8 w-8 mr-1.5" />
                <p className="lg:hidden">Alert</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center leading-snug hover:opacity-75" href="#">
                <UserCircleIcon className="h-8 w-8 mr-1.5" />
                <p>Username</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;