import React from "react";
import { adminsTableHeaders } from "../../constants/constants";
import { adminsAccountsData } from "../../data/dataExample";
function AdminList() {
  return (
    <div className="h-full   flex items-start justify-center">
      <table className="w-full">
        <thead>
          <tr>
            {adminsTableHeaders.map((header, idx) => (
              <th key={idx} className="border-b-4 border-slate-600">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {adminsAccountsData.map((data, idx) => (
            <tr key={idx}>
              <td className="border-b-2 border-slate-700 text-center">
                {data.id}
              </td>
              <td className="border-b-2 border-slate-700 text-center">
                {data.role}
              </td>
              <td className="border-b-2 border-slate-700 text-center">
                {data.name}
              </td>
              <td className="border-b-2 border-slate-700 text-center">
                {data.createdAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminList;
