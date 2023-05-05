import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/appContext";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";

const AdminsDetail = () => {
  const admin = useSelector((state) => state.admin);
  const { id } = useParams();
  const navigation = useNavigate();
  const { adminDetail, setAdminDetail } = useContext(AppContext);

  const [newName, setNewName] = useState(adminDetail.name);
  const [newEmail, setNewEmail] = useState(adminDetail.email);
  const [msg, setMsg] = useState("");

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

  async function updateHandler(e) {
    e.preventDefault();
    await fetch(`${SERVER_URL}/api/admin/update/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: id,
        name: newName,
        email: newEmail,
      }),
    }).then((res) => {
      if (res.status === 201) {
        setMsg("Successfully Updated!");
      }
    });
  }

  function deleteHandler() {
    navigation(`/api/admin/delete/${id}`);
  }

  const handleBack = (e) => {
    navigation(`/api/admin/all`);
  };

  return (
    <div>
      <div className="flex flex-row m-10 cursor-pointer" onClick={handleBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <div>Back</div>
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
              value={newName}
              type="text"
              className="border w-56"
              onChange={(e) => {
                setNewName(e.target.value);
              }}
              disabled={msg}
            />
          </li>
          <li className="flex flex-row m-6">
            <input
              placeholder={adminDetail.email}
              value={newEmail}
              type="text"
              className="border w-56"
              onChange={(e) => {
                setNewEmail(e.target.value);
              }}
              disabled={msg}
            />
          </li>
        </ul>
      </div>
      {msg && <div className="text-center  text-main-color-1">{msg}</div>}

      <div className="flex flex-row justify-center mt-20">
        <button
          className="rounded text-enter px-8 py-2 bg-gray-scale-3 cursor-pointer mr-20 disabled:bg-gray-300 disabled:text-gray-400"
          onClick={updateHandler}
          disabled={msg}
        >
          Update
        </button>
        {admin.role === "superAdmin" ? (
          <button
            className="rounded text-center px-8 py-2 bg-delete cursor-pointer"
            onClick={deleteHandler}
          >
            Delete
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AdminsDetail;
