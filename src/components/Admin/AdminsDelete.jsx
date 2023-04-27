import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";

const AdminsDelete = () => {
  const admin = useSelector((state) => state.admin);
  const { id } = useParams();
  const navigation = useNavigate();
  const { adminDetail, setAdminDetail } = useContext(AppContext);

  function cancelHandler() {
    setAdminDetail(adminDetail);
    navigation(-1);
  }
  const deleteAdminApi = async () => {
    console.log(`${SERVER_URL}/api/admin/delete/${id}`);
    await fetch(`${SERVER_URL}/api/admin/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: id,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    navigation("/api/admin/all");
  };

  return (
    <div className="flex justify-center mt-28">
      <div className="bg-white w-3/6 border-2">
        <h1 className="text-center mt-10 font-semibold text-2xl mb-8">
          Are you sure to delete this user?
        </h1>
        <div className="flex justify-center">
          <ul className="flex items-start flex-col w-2/5">
            <li className="flex flex-row m-6">
              <div>ID</div>:<div>{adminDetail._id}</div>
            </li>
            <li className="flex flex-row basis-2 m-6">
              <div>Role</div>:<div>{adminDetail.role}</div>
            </li>
            <li className="flex flex-row m-6">
              <div>Name</div>:<div>{adminDetail.name}</div>
            </li>
            <li className="flex flex-row m-6">
              <div>Email</div>:<div>{adminDetail.email}</div>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-center mt-20 mb-10">
          <button
            className="rounded text-enter px-8 py-2 bg-gray-scale-3 cursor-pointer mr-32"
            onClick={cancelHandler}
          >
            Cancel
          </button>

          <button
            className=" rounded text-center px-8 py-2 bg-delete cursor-pointer"
            onClick={deleteAdminApi}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminsDelete;
