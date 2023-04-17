import React from "react";
import { HistoriesData } from "../../data/dataExample";
import HistoriesFooter from "./HistoriesFooter";

function Histories() {
  return (
    <>
      <div>
        {HistoriesData.map((data, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-gray-scale-3 my-3 p-2"
          >
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div className="font-bold">
                  {data.replierType === "Admin" ? data.adminId : "Anonymous"}
                </div>
                <div className="text-indigo-700">{data.file ? data.file : ""}</div>
              </div>

              <div>{data.createdAt}</div>
            </div>

            <div>{data.message}</div>
          </div>
        ))}
        <div className=" bg-gray-scale-3 p-2">
          <HistoriesFooter />
        </div>
      </div>
    </>
  );
}

export default Histories;