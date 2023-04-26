import React, { useContext, useEffect, useRef } from "react";

import { useSelector } from "react-redux";
import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";

import Histories from "./Histories";
import HistoriesFooter from "./HistoriesFooter";
import { useParams } from "react-router-dom";
import AdminsDelete from "./AdminsDelete";
// import { report } from "../../../../../Backend-whistleblowing/src/routes";

function ReportDetails() {
  const admin = useSelector((state) => state.admin);
  const { id } = useParams();
  const fetchURL = `${SERVER_URL}/api/admin/reports/${id}`;
  const dataFetchedRef = useRef(false);

  const statusOptions = ["Not started","onGoing","Closed"]

  const { reportDetail, setReportDetail, histories, setHistories } =
    useContext(AppContext);

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
      getReportDetail()
  }
  const changeReportStatus = async(e)=>{
    await fetch(fetchURL,{
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status:e.target.value})
    })
    .then((res) => res.json())
    .catch((err) => console.error(err));
    getReportDetail()
    console.log("histories:   ", histories);
  }

  if (reportDetail.length === 0)
    return (
      <>
        <div>Loading...</div>
      </>
    );

  return (
    <>
      <div>
        <div key={reportDetail._id}>
          <div key="report-status">
            <select id="status"
              value={reportDetail.status}
              onChange={changeReportStatus}
            >
              {statusOptions.map((option,index)=>{
                return <option key={index}>
                  {option}
                </option>
              })
              }
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
                  <td className="py-2">: {reportDetail.createdAt}</td>
                </tr>
                <tr>
                  <td className="py-2">Update Date</td>
                  <td className="py-2">: {reportDetail.updatedAt}</td>
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
                  <td>: {reportDetail.category_id}</td>
                </tr>
                <tr>
                  <td>Subject</td>
                  <td>: {reportDetail.subject}</td>
                </tr>
                <tr>
                  <td>File</td>
                  <td className="text-indigo-700">: img-file.jpeg</td>
                </tr>
                <tr>
                  <td>Your Agent</td>
                  <td>: Name</td>
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
