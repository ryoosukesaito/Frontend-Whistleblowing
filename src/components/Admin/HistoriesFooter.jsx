import React, { useContext, useState } from "react";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";

function HistoriesFooter() {
  const [message, setMessage] = useState("");
  const admin = useSelector((state) => state.admin);
  const { reportDetail } = useContext(AppContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const reportId = reportDetail._id;
    const userId = reportDetail.userId._id;
    const adminId = admin.adminId;
    const msg = message;
    const name = admin.name;
    const replierType = "admin";
    // if (admin) {
    // } else {
    //   const name = "Anonymous";
    //   const replierType = "user";
    // }

    if (!message) return;
    await fetch(`${SERVER_URL}/api/history`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reportId: reportId,
        userId: userId,
        adminId: adminId,
        name: name,
        message: msg,
        replierType: replierType,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    window.location.reload();
    setMessage("");
  }

  function fileUploadHandler(e) {}

  return (
    <>
      <div className=" bg-gray-scale-3 p-2">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            className="h-full w-full mt-2 my-3 px-2 py-5"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex flex-row justify-between">
            <label className="cursor-pointer flex flex-row text-indigo-700">
              <DocumentArrowDownIcon className="h-6 w-6 mr-1 " />
              Upload File
              <input
                type="file"
                name="file"
                hidden
                className=""
                onChange={fileUploadHandler}
              />
            </label>
            <button className="px-8 py-1 m-2 rounded cursor-pointe bg-gray-scale-2 hover:bg-gray-scale-4 hover:text-gray-scale-1 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default HistoriesFooter;
