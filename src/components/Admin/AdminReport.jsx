import React, { useContext, useEffect } from "react";
import { reportTableHeaders } from "../../constants/constants";

import { useSelector } from "react-redux";
import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";

function AdminReport() {
  const admin = useSelector((state) => state.admin);

  const { reports, setReports } = useContext(AppContext);

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

  return (
    <div className="h-full   flex items-start justify-center">
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
            <tr key={idx}>
              <td className="border-b-2 border-slate-700 text-center">
                {data.status}
              </td>
              <td className="border-b-2 border-slate-700 text-center">
                {data.subject}
              </td>
              <td className="border-b-2 border-slate-700 text-center">
                {data.adminId}
              </td>
              <td className="border-b-2 border-slate-700 text-center">
                {data.createdAt}
              </td>
              <td className="border-b-2 border-slate-700 text-center">
                {data.updatedAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminReport;
