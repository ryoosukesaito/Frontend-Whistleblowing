import React, { useContext, useState } from "react";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";

function HistoriesFooter() {
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.user);
  const { reportDetail } = useContext(AppContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const reportId = reportDetail._id;
    const userId = user.id;
    const adminId = reportDetail.adminId;
    const msg = message;
    const name = reportDetail.userName;
    const replierType = "user";
    // if (admin) {
    // } else {
    //   const name = "Anonymous";
    //   const replierType = "user";
    // }

    if (!message) return;
    await fetch(`${SERVER_URL}/api/user/reports/${reportId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": user.token
     },
      body: JSON.stringify({
        message: msg,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    window.location.reload();
    setMessage("");
  }
  return (
    <>
      <div className=" bg-gray-scale-3 p-2">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            className="h-full w-full mt-2 my-3"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex flex-row justify-between">
            <button className="cursor-pointe flex text-indigo-700">
              <DocumentArrowDownIcon className="h-6 w-6 mr-1 " />
              Upload File
            </button>
            <button className="px-4 py-1 mb-1 rounded cursor-pointe bg-gray-scale-2 hover:bg-gray-100 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default HistoriesFooter;
