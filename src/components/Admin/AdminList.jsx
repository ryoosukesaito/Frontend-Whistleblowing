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
    <div>
      <div className="flex justify-end">
        <button className="flex justify-center items-center w-20 h-6 bg-gray-scale-3 cursor-pointer m-10">
          Create
        </button>
      </div>
      <div className="h-full flex items-start justify-center">
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
            <tr 
              key={idx}
              className=" cursor-pointer hover:bg-gray-scale-3"

            >
              <td className="border-b-2 border-slate-700 text-center"
              data-value={data._id}
              >
              <div className="my-3">
                {data._id}
              </div>
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
    </div>
  );
}

export default AdminList;
