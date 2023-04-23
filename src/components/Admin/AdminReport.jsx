import React, { useContext, useEffect } from "react";
import { reportTableHeaders } from "../../constants/constants";

import { useSelector } from "react-redux";
import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

import { FunnelIcon } from "@heroicons/react/24/solid";

import ReportFilter from "../Admin/ReportFilter";


function AdminReport() {
  const admin = useSelector((state) => state.admin);
  const navigate = useNavigate();

  const { reports, setReports, reportDetail, setReportDetail, setHistories } =
    useContext(AppContext);

  useEffect(() => {
    if (admin) {
      getReports();
    }
  }, []);

  function getReports() {
    fetch(`${SERVER_URL}/api/admin/reports`)
      .then((res) => res.json())
      .then((data) => setReports(data));
  }

  async function handleClick(event) {
    const id = event.target.dataset.value;
    const reportDetailUrl = `/api/admin/reports/${id}`;
    await fetch(`${SERVER_URL}${reportDetailUrl}`)
      .then((res) => res.json())
      .then((data) => setReportDetail(data));
    if (reportDetail) {
      getHistoryByReportId(id);
      navigate(reportDetailUrl);
    }
  }

  async function getHistoryByReportId(id) {
    await fetch(`${SERVER_URL}/api/admin/history/${id}`)
      .then((res) => res.json())
      .then((data) => setHistories(data.histories));
  }

  return (
    <div className="">
      <div className="flex justify-end">
        <button className="flex justify-center items-center w-20 h-6 bg-gray-scale-3 mr-10 cursor-pointer">
          <FunnelIcon className="h-4 w-4 mr-1.5"/>
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
          {reports.map((data, idx) => (

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
        {/* <ReportFilter /> */}
    </div>
  );
}

export default AdminReport;
