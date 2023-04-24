import React, { useContext, useEffect, useRef,useState } from "react";
import { reportTableHeaders } from "../../constants/constants";

import { useSelector } from "react-redux";
import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

import { FunnelIcon } from "@heroicons/react/24/solid";

import ReportFilter from "../Admin/ReportFilter";
import { current } from "@reduxjs/toolkit";

function AdminReport() {
  const dataFetchedRef = useRef(false);
  const admin = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const [show,setShow] = useState(false);

  const { reports, setReports, reportDetail, setReportDetail,setHistories,filteredReports,setFilteredReports, } =
    useContext(AppContext);

  useEffect(() => {
    if (admin) {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;

      if (reports.length === 0) getReports();
    }
  }, []);

  async function getReports() {
    await fetch(`${SERVER_URL}/api/admin/reports`)
      .then((res) => res.json())
      .then((data) => {
        setReports(data)
        setFilteredReports(data)
        
      });
    console.log("reports:  ", reports);
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

  if (reports.length === 0)
    return (
      <>
        <div>Loading....</div>
      </>
    );

    const handleFilter = e => {
      setShow(current => !current);
    }

    

  return (
    <div className="">
      <div className="text-gray-scale-2 font-bold text-2xl pl-3">
        Reports
      </div>
      <div className="flex justify-end">
        <button 
          className="flex px-8 py-1 items-center bg-gray-scale-3 mr-10 cursor-pointer"
          onClick={handleFilter}
        >
          <FunnelIcon className="h-4 w-4 mr-2" />
          Filter
        </button>
      </div>
      {show && (
        <ReportFilter />
      )}
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
            {filteredReports?
            filteredReports.map((data, idx) => (
              <tr
                key={data._id}
                className=" cursor-pointer  hover:bg-gray-scale-3"
                onClick={handleClick}
              >
                <td
                  className="border-b-2 border-slate-700 text-center"
                  data-value={data._id}
                >

                  {data.status === "Not started" ? (
                    <div key={data.status} className="my-1 flex justify-center items-center bg-not-started rounded-full">
                      {data.status}
                    </div>
                  ) : data.status === "Closed" ? (
                    <div key={data.status} className="my-1 flex justify-center items-center bg-completed rounded-full">
                      {data.status}
                    </div>
                  ) : (
                    <div key={data.status} className="my-1 justify-center items-center bg-in-progress rounded-full">
                      {data.status}
                    </div>
                  )
                  }
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
            ))
            :<></>
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminReport;
