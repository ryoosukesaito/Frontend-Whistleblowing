import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { BellIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { SERVER_URL } from "../constants/constants";
import { useNavigate } from "react-router-dom";

function NavbarUser() {
  const admin = useSelector((state) => state.admin);
  const dataFetchedRef = useRef(false);
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const [notification, setNotification] = useState(false);
  const [notices, setNotices] = useState([]);

  // 画面読み込み時にnoticesを取りに行く
  useEffect(() => {
    // if (dataFetchedRef.current) return;
    // // dataFetchedRef.current = true;
    // console.log(notices);
    // if (notices.length == 0) {
    getNotices();
    // } else {
    //   return;
    // }
  }, []);




  const getNotices = async () => {
    console.log("getnotice");
    await fetch(`${SERVER_URL}/api/admin/notices`, {
      headers: { "x-auth-token": admin.token },
    })
      .then((res) => res.json())
      .then((data) => setNotices(data));
  };

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-scale-2 text-white">
      <div className="w-full mx-2 flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static">
          <a
            className="text-xl flex leading-snug px-3  py-2 items-center"
            href="/api/admin/reports/"
          >
            <img
              src={`${process.env.PUBLIC_URL}/favicon.ico`}
              alt="Logo"
              className="h-7 w-7 mr-1.5 mb-1"
            />
            Whistleblowing Admin
          </a>

          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbar(!navbar)}
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
        {admin && (
          <div
            className={
              "lg:flex flex-grow items-center text-sm relative ml-32" +
              (navbar ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li key="notice" className="nav-item">
                <button
                  className="px-3 py-2 mr-32 flex items-center leading-snug hover:opacity-75"
                  type="button"
                  onClick={() => setNotification(!notification)}
                >
                  <BellIcon className="h-8 w-8 mr-1.5" />
                  <p className="lg:hidden">Alert</p>
                </button>
                {admin && (
                  <div
                    className={
                      "rounded absolute bg-gray-scale-4 p-4 shadow top-12 z-40" +
                      (notification ? " flex" : " hidden")
                    }
                  >
                    <div className="text-gray-scale-1 text-center">
                      {notices.length!==0 ? (
                        notices.map((notice) => {
                          return (
                            <div
                              id={notice.id}
                              key={notice.id}
                              className="z-40"
                              onClick={async () => {
                                setNotification(false);
                                await fetch(
                                  `${SERVER_URL}/api/admin/notices/` +
                                    notice.id,
                                  {
                                    method: "DELETE",
                                    headers: { "x-auth-token": admin.token },
                                  }
                                );
                                await getNotices();
                                navigate(
                                  "/api/admin/reports/" + notice.reportId
                                );
                              }}
                            >
                              <p className="text-lg mb-1 ">{notice.subject}</p>
                              <p className="text-sm mb-2">
                                New Message From User!
                              </p>
                              <hr className="h-px mb-2 bg-gray-scale-1 border-0"></hr>
                            </div>
                          );
                        })
                      ) : (
                        <></>
                      )}
                      {/* <p className="text-lg mb-1 ">Report Subject</p> 
                      <p className="text-sm mb-2">New Message From User!</p> 
                      <hr class="h-px mb-2 bg-gray-scale-1 border-0"></hr>
                      <p className="text-lg mb-1">Report Subject</p> 
                      <p className="text-sm mb-2">New Message From User!</p> */}
                    </div>
                  </div>
                )}
              </li>
              <li key="usericon" className="nav-item">
                <a className="mr-12 px-3 py-2 flex items-center leading-snug">
                  <UserCircleIcon className="h-8 w-8 mr-1.5" />
                  <p>{admin.name}</p>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarUser;
