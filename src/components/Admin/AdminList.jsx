import React, { useContext, useEffect } from "react";
import { SERVER_URL, adminsTableHeaders } from "../../constants/constants";

import { AppContext } from "../../context/appContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminList() {
  const admin = useSelector((state) => state.admin);
  const navigation = useNavigate();

  const { admins, setAdmins, adminDetail, setAdminDetail } =
    useContext(AppContext);

  useEffect(() => {
    if (admin) {
      getAdmins();
    }
  }, []);

  function getAdmins() {
    fetch(`${SERVER_URL}/api/admin/all`)
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }

  async function handleClick(e) {
    const id = e.target.dataset.value;
    const getAdminDetailUrl = `/api/admin/${id}`;
    await fetch(`${SERVER_URL}${getAdminDetailUrl}`)
      .then((res) => res.json())
      .then((data) => setAdminDetail(data));
    if (adminDetail) navigation(getAdminDetailUrl);
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
            <tr
              key={data._id}
              className=" cursor-pointer  hover:bg-gray-500"
              onClick={handleClick}
            >
              <td
                className="border-b-2 border-slate-700 text-center"
                data-value={data._id}
              >
                {data._id}
              </td>
              <td
                className="border-b-2 border-slate-700 text-center"
                data-value={data._id}
              >
                {data.role}
              </td>
              <td
                className="border-b-2 border-slate-700 text-center"
                data-value={data._id}
              >
                {data.name}
              </td>
              <td
                className="border-b-2 border-slate-700 text-center"
                data-value={data._id}
              >
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
