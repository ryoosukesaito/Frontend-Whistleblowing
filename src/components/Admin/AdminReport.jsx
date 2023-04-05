import React from "react";
import { reportTableHeaders } from "../../constants/constants";
import { reportDataExamples } from "../../data/dataExample";
function AdminReport() {
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
          {reportDataExamples.map((data, idx) => (
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
