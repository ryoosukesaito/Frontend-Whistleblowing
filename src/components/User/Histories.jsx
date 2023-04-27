import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../context/appContext";

function Histories() {
  const { histories,dateFormater } = useContext(AppContext);

  const commentEndRef = useRef(null);
  useEffect(() => {
    scrollToBottom();
  }, [histories]);

  function scrollToBottom() {
    commentEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="bg-gray-scale-4">
      <div className="h-full w-full flex flex-col">
        {histories?
          histories.map((data, idx) => (
            <div key={idx} className="flex flex-col bg-gray-scale-3 my-3 px-2 py-4">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                  <div className="font-bold mb-3">
                    {data.replierType === "admin"
                      ? `${data.name} (Admin)`
                      : `${data.name} (User)`}
                  </div>
                  <div className="text-indigo-700">
                    {data.file ? data.file : ""}
                  </div>
                </div>

                <div>{dateFormater(data.createdAt)}</div>
              </div>

              <div>{data.message}</div>
            </div>
            ))
            :
            <></>
        }
        <div ref={commentEndRef} />
      </div>
    </div>
  );
}

export default Histories;
