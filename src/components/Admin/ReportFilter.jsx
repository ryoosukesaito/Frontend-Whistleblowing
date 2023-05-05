import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";

const ReportFilter = () => {
  // 各種フィルタの値管理用state
  const {
    reports,
    filteredReports,
    reportFilter,
    setReportFilter,
    setFilteredReports,
  } = useContext(AppContext);

  const setFilter = async (e) => {
    e.preventDefault();

    let filteredRepts = reports;
    if (filteredRepts && reportFilter.id) {
      const searchKeywords = reportFilter.id
        .trim()
        .toLowerCase()
        .match(/[^\s]+/g);
      filteredRepts = filteredRepts.filter((report) =>
        searchKeywords.every((kw) => report.id.toLowerCase().indexOf(kw) !== -1)
      );
    }
    if (
      filteredRepts &&
      (reportFilter.statusNotStarted ||
        reportFilter.statusInProgress ||
        reportFilter.statusClosed)
    ) {
      filteredRepts = filteredRepts.filter(
        (report) =>
          (reportFilter.statusNotStarted && report.status == "Not started") ||
          (reportFilter.statusInProgress && report.status == "In progress") ||
          (reportFilter.statusClosed && report.status == "Closed")
      );
    }
    if (filteredRepts && reportFilter.subject) {
      const searchKeywords = reportFilter.subject
        .trim()
        .toLowerCase()
        .match(/[^\s]+/g);
      filteredRepts = filteredRepts.filter((report) =>
        searchKeywords.every(
          (kw) => report.subject.toLowerCase().indexOf(kw) !== -1
        )
      );
    }

    if (
      filteredRepts &&
      reportFilter.createdAtFrom &&
      reportFilter.createdAtTo
    ) {
      filteredRepts = filteredRepts.filter(
        (report) =>
          report.createdAt >= reportFilter.createdAtFrom &&
          report.createdAt <= reportFilter.createdAtTo
      );
    }
    if (
      filteredRepts &&
      reportFilter.updatedAtFrom &&
      reportFilter.updatedAtTo
    ) {
      filteredRepts = filteredRepts.filter(
        (report) =>
          report.updatedAt >= reportFilter.updatedAtFrom &&
          report.updatedAt <= reportFilter.updatedAtTo
      );
    }
    console.log(reports);
    console.log(filteredRepts);
    await setFilteredReports(filteredRepts);
  };

  return (
    <div className="w-1/4 h-100 border border-gray-scale-3 absolute z-50 bg-white top-40 right-3 overflow-hidden">
      <form
        className="m-10"
        onSubmit={(e) => {
          setFilter(e);
        }}
      >
        <div className="flex items-center">
          <div className="mr-3 text-xl"> ID </div>
          <input
            key="id"
            className="border border-gray-scale-2 w-full pl-1 text-lg"
            value={reportFilter.id}
            onChange={(e) => {
              setReportFilter({ ...reportFilter, id: e.target.value });
            }}
          />
        </div>

        <div className="flex flex-col">
          <div key="status" className="text-xl mt-3 mb-1">
            Status{" "}
          </div>
          {/* <input className="rounded border" /> */}
          <div>
            <div className="flex flex-col flex-wrap grid-rows-2">
              <div className="flex flex-row items-start">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={reportFilter.statusNotStarted}
                    onChange={(e) =>
                      setReportFilter({
                        ...reportFilter,
                        statusNotStarted: !reportFilter.statusNotStarted,
                      })
                    }
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="checked-checkbox" className="mr-5 text-lg">
                    Not started
                  </label>
                </div>

                <div className="flex  flex-row items-start">
                  <div className="flex items-center">
                    <input
                      key="inprogress"
                      type="checkbox"
                      checked={reportFilter.statusInProgress}
                      onChange={(e) =>
                        setReportFilter({
                          ...reportFilter,
                          statusInProgress: !reportFilter.statusInProgress,
                        })
                      }
                      className="w-4 h-4 mr-2"
                    />
                    <label htmlFor="checked-checkbox" className="mr-5 text-lg">
                      In Progress
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      key="closed"
                      type="checkbox"
                      checked={reportFilter.statusClosed}
                      onChange={(e) =>
                        setReportFilter({
                          ...reportFilter,
                          statusClosed: !reportFilter.statusClosed,
                        })
                      }
                      className="w-4 h-4 mr-2"
                    />
                    <label htmlFor="checked-checkbox" className="text-lg">
                      Closed{" "}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-xl mb-2 mt-3">Subject </div>
          <textarea
            className="border border-gray-scale-2 w-full h-15"
            value={reportFilter.subject}
            onChange={(e) =>
              setReportFilter({ ...reportFilter, subject: e.target.value })
            }
          ></textarea>
        </div>

        <div className="flex flex-col ">
          <div className="text-lg mb-2 mt-3">Created </div>
          <div className="flex flex-row">
            <input
              className="border border-gray-scale-2 text-center w-3/6"
              type="date"
              placeholder="00/00/0000"
              value={reportFilter.createdAtFrom}
              onChange={(e) =>
                setReportFilter({
                  ...reportFilter,
                  createdAtFrom: e.target.value,
                })
              }
            />
            <div className="m-1">~</div>
            <input
              className="border border-gray-scale-2 text-center w-3/6"
              type="date"
              placeholder="00/00/0000"
              value={reportFilter.createdAtTo}
              onChange={(e) =>
                setReportFilter({
                  ...reportFilter,
                  createdAtTo: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-lg mb-2 mt-3">Updated </div>
          <div className="flex flex-row">
            <input
              className="border border-gray-scale-2 text-center w-3/6"
              type="date"
              placeholder="00/00/0000"
              value={reportFilter.updatedAtFrom}
              onChange={(e) =>
                setReportFilter({
                  ...reportFilter,
                  updatedAtFrom: e.target.value,
                })
              }
            />
            <div className="m-1">~</div>
            <input
              className="border border-gray-scale-2 text-center w-3/6"
              type="date"
              placeholder="00/00/0000"
              value={reportFilter.updatedAtTo}
              onChange={(e) =>
                setReportFilter({
                  ...reportFilter,
                  updatedAtTo: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex-col items-center text-center mt-10 text-sm">
          <button className="px-8 py-2 rounded bg-gray-scale-3 cursor-pointer">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportFilter;
