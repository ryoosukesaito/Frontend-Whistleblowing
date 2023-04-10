import React from "react";
import { reportDataExamples } from "../../data/dataExample";
import Histories from "./Histories";

function ReportDetails() {
  return (
    <>
      <div>
        {reportDataExamples.map((data, idx) => (
          <div key={idx}>
            <div>
              <div>Report ID : {data._id}</div>
            </div>
            <div>
              <div>Post Date : {data.createdAt}</div>
            </div>
            <div>
              <div>Your Name : {data.userName}</div>
            </div>
            <div>
              <div>Your Department : {data.userDepartment}</div>
            </div>
            <div>
              <div>Category : {data.category_id}</div>
            </div>
            <div>
              <div>Subject : {data.subject}</div>
            </div>
            <div>
              <div>File : img-file.jpeg</div>
            </div>
            <div>
              <div>Description </div>
              <div className="border rounded px-2 mr-10">
                {data.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border rounded bg-gray-scale-4">
        <div className="m-2 mx-3">
          <div className="border-b-2 border-gray-scale-1">Contact Record</div>
          <Histories />
        </div>
      </div>
    </>
  );
}

export default ReportDetails;
