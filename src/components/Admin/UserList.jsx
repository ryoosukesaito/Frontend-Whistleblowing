import React, { useContext, useEffect } from "react";
import { SERVER_URL, usersTableHeaders } from "../../constants/constants";

import { AppContext } from "../../context/appContext";

function UserList() {
  const { users, setUsers } = useContext(AppContext);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch(`${SERVER_URL}/api/admin/users/all`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }

  return (
    <div>
      <div className="text-main-color-1 font-bold text-2xl pl-3">
        User list
      </div>
      <div className="h-full mt-5 flex items-start justify-center">
      <table className="w-full">
        <thead className="text-lg">
          <tr>
            {usersTableHeaders.map((header, idx) => (
              <th key={idx} className="border-b-4 border-slate-600">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((data, idx) => (
            <tr 
              key={idx}
              className="hover:bg-gray-scale-3 cursor-pointer"
            >
              <td className="border-b-2 border-slate-700 text-center">
                <div className="my-3">
                  {data._id}
                </div>
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
    </div>
    
  );
}

export default UserList;
