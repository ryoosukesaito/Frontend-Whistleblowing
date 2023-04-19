import React from "react";
import { reportTableHeaders } from "../../constants/constants";
import { reportDataExamples } from "../../data/dataExample";
import ReportFilter from "../Admin/ReportFilter";

function AdminReport() {
  return (
    <div className="m-10">
      <div className="h-7 float-right">
        <button className="flex justify-center items-center w-20 h-6 bg-gray-scale-3 cursor-pointer">
          Filter
        </button>
      </div>
      <div className="h-full mt-20  flex items-start justify-center">
      <table className="w-full">
        <thead>
          <tr>
            {reportTableHeaders.map((header, idx) => (
              <th key={idx} className="border-b-4 border-slate-600">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {reportDataExamples.map((data, idx) => (
            <tr key={idx}>
              <td className="border-b-2 border-slate-700 text-center ">
                <div className="my-3 flex justify-center items-center h-8 bg-not-started rounded-full">
                {data.status}
                </div>
              </td>
              <td className="border-b-2 border-slate-700 text-center">
                {data.subject}
              </td>
              <td className="border-b-2 border-slate-700 text-center">
                {data.adminId}
              </td>
              <td className="border-b-2 border-slate-700 text-center">
                {data.createdAt}
              </td>
              <td className="border-b-2 border-slate-700 text-center">
                {data.updatedAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="flex justify-center ">
        
       <div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              ←
            </a>
            <a
              href="#"
              aria-current="page"
              // className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              4
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              5
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              ...
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              →
            </a>
            </nav>
          </div>
        </div>
      </div>
        <ReportFilter />
    </div>
  );
}

export default AdminReport;
