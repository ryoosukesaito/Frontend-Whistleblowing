import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/appContext";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";
import AdminsDelete from "./AdminsDelete";


const AdminsDetail = () => {
  const admin = useSelector((state) => state.admin);
  const { id } = useParams();
  const navigation = useNavigate();
  const { adminDetail, setAdminDetail } = useContext(AppContext);

  useEffect(() => {
    if (admin) {
      if (!adminDetail) {
        getAdminDetail();
      }
    }
  }, []);

  async function getAdminDetail() {
    const getAdminDetailUrl = `/api/admin/${id}`;
    await fetch(`${SERVER_URL}${getAdminDetailUrl}`)
      .then((res) => res.json())
      .then((data) => setAdminDetail(data));
  }

  function deleteHandler() {
    navigation(`/api/admin/delete/${id}`);
  }

  const handleBack = e => {
    navigation(`/api/admin/all`);
  }

  return (
    <div>
      <div className="flex flex-row m-10 cursor-pointer" onClick={handleBack}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        <div>
          Back
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <ul className="flex items-start flex-col">
          <li className="flex flex-row my-6">
            <div>ID</div>:
          </li>
          <li className="flex flex-row basis-2 my-6">
            <div>Role</div>:
          </li>
          <li className="flex flex-row my-6">
            <div>Name</div>:
          </li>
          <li className="flex flex-row my-6">
            <div>Email</div>:
          </li>
        </ul>
        <ul className="flex items-start flex-col">
          <li className="flex flex-row m-6">
            <div>{adminDetail._id}</div>
          </li>
          <li className="flex flex-row basis-2 m-6">
            <div>{adminDetail.role}</div>
          </li>
          <li className="flex flex-row m-6">
            <input
              placeholder={adminDetail.name}
              value={adminDetail.name}
              type="text"
              className="border w-56"
            />
          </li>
          <li className="flex flex-row m-6">
            <input
              placeholder={adminDetail.email}
              value={adminDetail.email}
              type="text"
              className="border w-56"
            />
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-center mt-20">
        <button className="rounded text-enter px-8 py-2 bg-gray-scale-3 cursor-pointer mr-20">
          Update
        </button>
        {admin.role==='superAdmin'?
        <button
          className="rounded text-center px-8 py-2 bg-delete cursor-pointer"
          onClick={deleteHandler}
        >
          Delete
        </button>
        :<></>
        }
      </div>
    </div>
  );
};

export default AdminsDetail;
