import React, { useContext, useEffect, useRef } from "react";
import { reportTableHeaders } from "../../constants/constants";
import { reportDataExamples } from "../../data/dataExample";

import { useSelector } from "react-redux";
import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

import { funnel, FunnelIcon } from "@heroicons/react/24/solid";

import ReportFilter from "../Admin/ReportFilter";

function UserReport() {
  const dataFetchedRef = useRef(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const {
    reports,
    setReports,
    reportDetail,
    setReportDetail,
    setHistories,
    dateFormater,
  } = useContext(AppContext);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    if (user) {
      if (reports.length === 0) getReports();
    }
  }, []);

  async function getReports() {
    await fetch(`${SERVER_URL}/api/user/reports`, {
      headers: { "x-auth-token": user.token },
    })
      .then((res) => res.json())
      .then((data) => setReports(data));
    console.log("reports:  ", reports);
  }

  async function handleClick(event) {
    console.log(event.target);
    const id = event.target.dataset.value;
    console.log(id);
    const reportDetailUrl = `/api/user/reports/${id}`;
    // await fetch(`${SERVER_URL}${reportDetailUrl}`)
    //   .then((res) => res.json())
    //   .then((data) => setReportDetail(data));
    // if (reportDetail) {
    //   getHistoryByReportId(id);
    navigate(reportDetailUrl);
    // }
    // navigate(`/api/user/reports/${id}`);
  }

  async function getHistoryByReportId(id) {
    await fetch(`${SERVER_URL}/api/user/history/${id}`)
      .then((res) => res.json())
      .then((data) => setHistories(data.histories));
  }

  return (
    <>
      <div className="mt-3 px-3 py-4 h-full">
        <div className="text-main-color-1 font-bold text-2xl pl-3">History</div>
        <div className="flex justify-end">
          {/* <button 
          className="flex rounded px-8 py-1 items-center bg-gray-scale-3 mr-10 cursor-pointer hover:opacity-50"
        >
          <FunnelIcon className="h-4 w-4 mr-1" />
          Filter
        </button> */}
        </div>
        <div className="w-full h-fit mt-5 relative overscroll-y-auto items-center justify-center">
          <table className="w-full">
            <thead className="sticky top-0 bg-gray-scale-4 py-10">
              <tr>
                {reportTableHeaders.map((header, idx) => (
                  <th key={idx} className="border-b-4 border-slate-600">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="px-1">
              {reports.map((data, idx) => (
                <tr
                  key={data._id}
                  className=" cursor-pointer  hover:bg-gray-scale-3"
                  onClick={handleClick}
                >
                  <td
                    className="border-b-2 border-slate-700 text-center py-2"
                    data-value={data._id}
                  >
                    {data.status === "Not started" ? (
                      <div
                        key={data.status}
                        className="my-1 flex justify-center items-center bg-not-started rounded"
                        data-value={data._id}
                      >
                        {data.status}
                      </div>
                    ) : data.status === "Closed" ? (
                      <div
                        key={data.status}
                        className="my-1 flex justify-center items-center bg-completed rounded"
                        data-value={data._id}
                      >
                        {data.status}
                      </div>
                    ) : (
                      <div
                        key={data.status}
                        className="my-1 justify-center items-center bg-in-progress rounded"
                        data-value={data._id}
                      >
                        {data.status}
                      </div>
                    )}
                  </td>
                  <td
                    className="border-b-2 border-slate-700 text-center p-1 break-all"
                    data-value={data._id}
                  >
                    {data.subject}
                  </td>
                  <td
                    className="border-b-2 border-slate-700 text-center p-1"
                    data-value={data._id}
                  >
                    {data.adminId ? data.adminId.name : <></>}
                  </td>
                  <td
                    className="border-b-2 border-slate-700 text-center p-1"
                    data-value={data._id}
                  >
                    {dateFormater(data.createdAt)}
                  </td>
                  <td
                    className="border-b-2 border-slate-700 text-center p-1"
                    data-value={data._id}
                  >
                    {dateFormater(data.updatedAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="flex justify-center "> */}

        <div>
          {/* <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              ←
            </a>
            <a
              href="#"
              aria-current="page"
              // className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              4
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              5
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              ...
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              →
            </a>
            </nav>
          </div> */}
          {/* </div> */}
        </div>
        {/* <ReportFilter /> */}
      </div>
    </>
  );
}

export default UserReport;
