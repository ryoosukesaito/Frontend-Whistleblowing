
import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const AdminsDelete = () => {
  const admin = useSelector((state) => state.admin);
  const { id } = useParams();
  const navigation = useNavigate();
  const { adminDetail, setAdminDetail } = useContext(AppContext);

  function cancelHandler() {
    setAdminDetail(adminDetail);
    navigation(-1);
  }

  return (
    <div className="flex justify-center">
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
        <div className='flex flex-row justify-center mt-20 mb-10'>
          <button 
            className="rounded text-enter px-8 py-2 bg-gray-scale-3 cursor-pointer mr-32"
          >
            Update
          </button>
          <button 
            className=" rounded text-center px-8 py-2 bg-delete cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminsDelete;
