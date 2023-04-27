import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";
function Histories() {
  const { histories } = useContext(AppContext);

  const commentEndRef = useRef(null);
  useEffect(() => {
    scrollToBottom();
  }, []);

  function scrollToBottom() {
    commentEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function downloadHandler(e) {
    e.preventDefault();
    const fileNameForUrl = e.target.value;

    fetch(`${SERVER_URL}/uploadFn/file/showRespond/${fileNameForUrl}`, {
      method: "GET",
    })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileNameForUrl);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }

  return (
    <div className="bg-gray-scale-4">
      <div className="h-full w-full flex flex-col">
        {histories ? (
          histories.map((data, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-gray-scale-3 my-3 px-3 py-4"
            >
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                  <div className="font-bold mb-3">
                    {data.replierType === "admin"
                      ? `${data.name} (Admin)`
                      : `${data.name} (User)`}
                  </div>
                  <div className="ml-4">
                    <button
                      className="text-indigo-700"
                      onClick={downloadHandler}
                      value={data.file}
                    >
                      {data.file ? data.file : ""}
                    </button>
                  </div>
                </div>

                <div>{data.createdAt}</div>
              </div>

              <div>{data.message}</div>
            </div>
          ))
        ) : (
          <></>
        )}
        <div ref={commentEndRef} />
      </div>
    </div>
  );
}

export default Histories;
