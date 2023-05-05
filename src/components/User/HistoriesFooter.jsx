import React, { useContext, useState } from "react";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";

function HistoriesFooter() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const user = useSelector((state) => state.user);
  const { reportDetail } = useContext(AppContext);
  const formData = new FormData();

  async function handleFetchFile() {
    formData.append("caption", file.lastModified);
    formData.append("file", file);

    try {
      const res = await fetch(`${SERVER_URL}/uploadFn`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      const value = data.filename;
      setFileName(value);
      return value;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const reportId = reportDetail._id;
    const msg = message;

    if (!message) return;
    let fileValue = null;
    if (file) {
      fileValue = await handleFetchFile();
    }
    await fetch(`${SERVER_URL}/api/user/reports/${reportId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": user.token,
      },
      body: JSON.stringify({
        message: msg,
        file: fileValue,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    setFile("");
    window.location.reload();
    setMessage("");
  }
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
              {file ? <>{file.name}</> : <>Upload File</>}
              <input
                type="file"
                name="file"
                hidden
                className=""
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <button className="px-8 py-1 m-2 rounded cursor-pointer bg-gray-scale-2 hover:bg-gray-scale-4 hover:text-gray-scale-1 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default HistoriesFooter;
