import React from "react";

function HistoriesFooter() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="text" className="h-full w-full border rounded-md mt-2 " />
        <div className="flex flex-row justify-between">
          <button>Upload File</button>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

export default HistoriesFooter;
