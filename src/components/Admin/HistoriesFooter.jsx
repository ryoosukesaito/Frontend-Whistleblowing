import React from "react";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

function HistoriesFooter() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="text" className="h-full w-full mt-2 my-3" />
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
    </>
  );
}

export default HistoriesFooter;
