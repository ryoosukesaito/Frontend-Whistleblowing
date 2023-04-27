import React, { useContext, useEffect, useRef } from "react";

import { useSelector } from "react-redux";
import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";

import Histories from "./Histories";
import HistoriesFooter from "./HistoriesFooter";
import { useParams } from "react-router-dom";
// import { report } from "../../../../../Backend-whistleblowing/src/routes";

function ReportDetails() {
  const admin = useSelector((state) => state.admin);
  const { id } = useParams();
  const fetchURL = `${SERVER_URL}/api/admin/reports/${id}`;
  const dataFetchedRef = useRef(false);

  const statusOptions = ["Not started", "In progress", "Closed"];

  const {
    reportDetail,
    setReportDetail,
    histories,
    setHistories,
    dateFormater,
  } = useContext(AppContext);

  useEffect(() => {
    if (admin) {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;

      if (reportDetail.length === 0) {
        getReportDetail();
      }
    }
    getHistoryByReportId();
  }, [histories]);

  function getReportDetail() {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => {
        setReportDetail(data);
      });
  }

  function getHistoryByReportId() {
    fetch(`${SERVER_URL}/api/admin/history/${id}`)
      .then((res) => res.json())
      .then((data) => setHistories(data.histories));
    getReportDetail();
  }
  const changeReportStatus = async (e) => {
    await fetch(fetchURL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: e.target.value }),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    getReportDetail();
  };

  function downloadHandler(e) {
    e.preventDefault();
    const fileNameForUrl = e.target.value;

    fetch(`${SERVER_URL}/uploadFn/file/showRespond/${fileNameForUrl}`, {
      method: "GET",
    })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileNameForUrl);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }

  if (reportDetail.length === 0)
    return (
      <>
        <div>Loading...</div>
      </>
    );

  return (
    <>
      <div className="">
        <div className="text-gray-scale-2 font-bold text-xl mb-4">
          Report detail
        </div>
        <div key={reportDetail._id}>
          <div
            key="report-status"
            className="mb-2 inline-block border border-gray-scale-1 px-2 py-1"
          >
            <select
              id="status"
              value={reportDetail.status}
              onChange={changeReportStatus}
              className=""
            >
              {statusOptions.map((option, index) => {
                return <option key={index}>{option}</option>;
              })}
            </select>
          </div>
          <div className="flex mb-3">
            <table className="w-1/2">
              <tbody>
                <tr>
                  <td className="py-2">Report ID</td>
                  <td className="py-2">: {reportDetail._id}</td>
                </tr>
                <tr>
                  <td className="py-2">Post Date</td>
                  <td className="py-2">
                    : {dateFormater(reportDetail.createdAt)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2">Update Date</td>
                  <td className="py-2">
                    : {dateFormater(reportDetail.updatedAt)}
                  </td>
                </tr>
                <tr>
                  <td className="py-2">Your Name</td>
                  <td className="py-2">: {reportDetail.userName}</td>
                </tr>
                <tr>
                  <td className="py-2">Your Department</td>
                  <td className="py-2"> : {reportDetail.userDepartment}</td>
                </tr>
              </tbody>
            </table>
            <table className="w-1/2">
              <tbody>
                <tr>
                  <td>Category</td>
                  <td>
                    :{" "}
                    {reportDetail.category_id
                      ? reportDetail.category_id.name
                      : ""}
                  </td>
                </tr>
                <tr>
                  <td>Subject</td>
                  <td>: {reportDetail.subject}</td>
                </tr>
                <tr>
                  <td>File</td>
                  <td>
                    {reportDetail.file ? (
                      <button
                        onClick={downloadHandler}
                        value={reportDetail.file}
                      >
                        <div className="text-indigo-700">
                          : {reportDetail.file}
                        </div>
                      </button>
                    ) : (
                      <div>: No Files</div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Your Agent</td>
                  <td>
                    : {reportDetail.adminId ? reportDetail.adminId.name : <></>}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-3">
            <span className="text-lg">Description</span>
            <div className="border p-2">{reportDetail.description}</div>
          </div>
        </div>
      </div>

      <div className="h-full border bg-gray-scale-4 p-2 overflow-auto">
        <div className="text-lg border-b-2 border-gray-scale-1">
          Contact Record
        </div>
        <div className="">
          <Histories />
        </div>
        <HistoriesFooter />
      </div>
    </>
  );
}

export default ReportDetails;
