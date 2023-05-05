import React, { useContext, useEffect, useRef } from "react";
import { reportTableHeaders } from "../../constants/constants";

import { useSelector } from "react-redux";
import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

function UserReport() {
  const dataFetchedRef = useRef(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const { reports, setReports, dateFormater } = useContext(AppContext);

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
    navigate(reportDetailUrl);
  }

  return (
    <>
      <div className="mt-3 px-3 py-4 h-full">
        <div className="text-main-color-1 font-bold text-2xl pl-3">History</div>
        <div className="flex justify-end"></div>
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
      </div>
    </>
  );
}

export default UserReport;
