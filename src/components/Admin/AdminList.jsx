import React, { useContext, useEffect } from "react";
import { SERVER_URL, adminsTableHeaders } from "../../constants/constants";

import { AppContext } from "../../context/appContext";

function AdminList() {
  const { admins, setAdmins } = useContext(AppContext);

  useEffect(() => {
    getAdmins();
  }, []);

  function getAdmins() {
    fetch(`${SERVER_URL}/api/admin/all`)
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }

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
          {admins.map((data, idx) => (
            <tr key={idx}>
              <td className="border-b-2 border-slate-700 text-center">
                {data._id}
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
