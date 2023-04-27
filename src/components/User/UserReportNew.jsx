import React, { useContext, useEffect, useRef,useState } from "react";

import { useSelector } from "react-redux";
import { SERVER_URL } from "../../constants/constants";


//data Examples
// import { reportDetail } from "../../data/dataExample";

// 各フィールド制御用のstate

function UserReportDetails() {
  const user = useSelector((state) => state.user);
  const [reportUserName, setReportUserName] = useState("")
  const [reportUserDepartment, setReportUserDepartment] = useState("")
  const [reportCategory, setReportCategory] = useState('')
  const [reportSubject, setReportSubject] = useState("")
  const [reportDescription, setReportDescription] = useState("")
  const [categories, setCategories]=useState([])

  useEffect(() => {
    getCategories()
    
  }, [])

  const getCategories = async ()=>{
    await fetch(`${SERVER_URL}/api/admin/category/all`)
    .then((res) => res.json())
    .then((data) =>{
      setCategories(data)
      setReportCategory(data[0]._id)
      });
  }
  const postReport = async()=>{
    console.log(`${SERVER_URL}/api/user/reports`);
    await fetch(`${SERVER_URL}/api/user/reports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": user.token
     },
      body: JSON.stringify({
        report: {
          userName:reportUserName,
          userId:user._id,
          userDepartment:reportUserDepartment,
          subject:reportSubject,
          category_id:reportCategory,
          description:reportDescription,
          status:"Not started",
        },
      }),
    })
      .then((res) => {
        console.log(res);
        res.json()})
      .catch((err) => console.error(err));
    window.location.reload();

  }
  


  return (
    <>
      <form onSubmit={postReport}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Your Name(Optional)
            </label>
              <input
                className="border w-full py-3 px-3 mb-3"
                type="text"
                placeholder="Your Name(Optional)"
                onChange={(e) => {
                  setReportUserName(e.target.value);
                }}
                value={reportUserName}
              />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Your Department(Optional)
            </label>
              <input
                  className="border w-full py-3 px-3 mb-3"
                  type="text"
                  placeholder="Your Department(Optional)"
                  onChange={(e) => {
                    setReportUserDepartment(e.target.value);
                  }}
                  value={reportUserDepartment}
              />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Category(Required)
            </label>
            <select id="categories"
              className="border w-full py-3 px-3 mb-3"
              value={reportCategory}
              onChange={(e=>setReportCategory(e.target.value))}
            >
              {categories?
                categories.map((category,index)=>{
                  return <option value={category._id} key={index}>
                    {category.name}
                  </option>
                })
                :<></>
              }
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Subject
            </label>
            <input
                className="border w-full py-3 px-3 mb-3"
                type="text"
                placeholder="Subject"
                onChange={(e) => {
                  setReportSubject(e.target.value);
                }}
                value={reportSubject}
                required
              />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description
            </label>
                <textarea
                      className="border w-full py-3 px-3 mb-3"
                      placeholder="Description"
                      onChange={(e) => {
                        setReportDescription(e.target.value);
                      }}
                      value={reportDescription}
                      required
                    />
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-full px-3">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div> 
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="w-full py-2 px-3 flex justify-center">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
              Submit
            </button>
          </div> 
        </div> 
        <div className="border p-2"></div>
      </form>
    </>
  );
}

export default UserReportDetails;
