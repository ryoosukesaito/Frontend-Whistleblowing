import React, { useContext, useEffect, useRef } from "react";
import { reportDataExamples } from "../../data/dataExample";

import { useSelector } from "react-redux";
import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";

import Histories from "./Histories";
import { useParams } from "react-router-dom";

function ReportDetails() {
  const admin = useSelector((state) => state.admin);
  const { id } = useParams();
  const fetchURL = `${SERVER_URL}/api/admin/reports/${id}`;
  const dataFetchedRef = useRef(false);

  const { reportDetail, setReportDetail } = useContext(AppContext);

  useEffect(() => {
    if (admin) {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      getReportDetail();
      console.log(reportDetail);
    }
  }, [reportDetail]);

  async function getReportDetail() {
    await fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => {
        setReportDetail(data);
      });
  }

  if (!reportDetail)
    return (
      <>
        <div>Nothing</div>
      </>
    );

  return (
    <>
      <div>
        {reportDataExamples.map((data) => (
          <div key={data._id}>
            <div className="flex mb-3">
              <table className="w-1/2">
                <tbody>
                  <tr>
                    <td className="py-2">Report ID</td>
                    <td className="py-2">: {data._id}</td>
                  </tr>
                  <tr>
                    <td className="py-2">Post Date</td>
                    <td className="py-2">: {data.createdAt}</td>
                  </tr>
                  <tr>
                    <td className="py-2">Update Date</td>
                    <td className="py-2">: {data.updatedAt}</td>
                  </tr>
                  <tr>
                    <td className="py-2">Your Name</td>
                    <td className="py-2">: {data.userName}</td>
                  </tr>
                  <tr>
                    <td className="py-2">Your Department</td>
                    <td className="py-2"> : {data.userDepartment}</td>
                  </tr>
                </tbody>
              </table>
              <table className="w-1/2">
                <tbody>
                  <tr>
                    <td>Category</td>
                    <td>: {data.category_id}</td>
                  </tr>
                  <tr>
                    <td>Subject</td>
                    <td>: {data.subject}</td>
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
              <div className="border p-2">{data.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="border bg-gray-scale-4 p-2">
        <div className="text-lg border-b-2 border-gray-scale-1">
          Contact Record
        </div>
        <Histories />
      </div>
    </>
  );
}

export default ReportDetails;
