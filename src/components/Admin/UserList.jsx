import React from "react";
import { usersTableHeaders } from "../../constants/constants";
import { usersAccountsData } from "../../data/dataExample";

function UserList() {
  return (
    <div className="h-full   flex items-start justify-center">
      <table className="w-full">
        <thead>
          <tr>
            {usersTableHeaders.map((header, idx) => (
              <th key={idx} className="border-b-4 border-slate-600">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {usersAccountsData.map((data, idx) => (
            <tr key={idx}>
              <td className="border-b-2 border-slate-700 text-center">
                {data.id}
              </td>
              <td className="border-b-2 border-slate-700 text-center">
                {data.email}
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

export default UserList;
