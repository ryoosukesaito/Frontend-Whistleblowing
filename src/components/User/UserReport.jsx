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
  const admin = useSelector((state) => state.admin);
  const navigate = useNavigate();

  const { reports, setReports, reportDetail, setReportDetail, setHistories } =
    useContext(AppContext);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    if (admin) {
      // if (reports.length === 0) getReports();
    }
  }, []);

  async function getReports() {
    await fetch(`${SERVER_URL}/api/admin/reports`)
      .then((res) => res.json())
      .then((data) => setReports(data));
    console.log("reports:  ", reports);
  }

  async function handleClick(event) {
    // const id = event.target.dataset.value;
    // const reportDetailUrl = `/api/admin/reports/${id}`;
    // await fetch(`${SERVER_URL}${reportDetailUrl}`)
    //   .then((res) => res.json())
    //   .then((data) => setReportDetail(data));
    // if (reportDetail) {
    //   getHistoryByReportId(id);
    //   navigate(reportDetailUrl);
    // }
    navigate("/api/user/reports/id");
  }

  async function getHistoryByReportId(id) {
    await fetch(`${SERVER_URL}/api/user/history/${id}`)
      .then((res) => res.json())
      .then((data) => setHistories(data.histories));
  }

  return (
    <div className="">
      <div className="flex justify-end">
        <button className="flex justify-center items-center w-20 h-6 bg-gray-scale-3 mr-10 cursor-pointer">
          <FunnelIcon className="h-4 w-4 mr-1.5" />
          Filter
        </button>
      </div>
      <div className="h-full mt-5 flex items-start justify-center">
        <table className="w-full">
          <thead>
            <tr>
              {reportTableHeaders.map((header, idx) => (
                <th key={idx} className="border-b-4 border-slate-600">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reportDataExamples.map((data, idx) => (
              <tr
                key={data._id}
                className=" cursor-pointer  hover:bg-gray-scale-3"
                onClick={handleClick}
              >
                <td
                  className="border-b-2 border-slate-700 text-center"
                  data-value={data._id}
                >
                  <div className="my-1 flex justify-center items-center bg-not-started rounded-full">
                    {data.status}
                  </div>
                </td>
                <td
                  className="border-b-2 border-slate-700 text-center"
                  data-value={data._id}
                >
                  {data.subject}
                </td>
                <td
                  className="border-b-2 border-slate-700 text-center"
                  data-value={data._id}
                >
                  {data.adminId}
                </td>
                <td
                  className="border-b-2 border-slate-700 text-center"
                  data-value={data._id}
                >
                  {data.createdAt}
                </td>
                <td
                  className="border-b-2 border-slate-700 text-center"
                  data-value={data._id}
                >
                  {data.updatedAt}
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
  );
}

export default UserReport;
