import React from "react"


const UserDetail = () => {

  



  return (
    <div>
      <div className='flex justify-center mt-20'>
        <ul className="flex items-start flex-col w-1/5">
          <li className="flex flex-row m-6">
            ID :
          </li>
          <li className="flex flex-row basis-2 m-6">
            Name :
          </li>
          <li className="flex flex-row m-6">
            Email:
          </li>
        </ul>
        <ul className="flex items-start flex-col w-1/5">
          <li className="flex flex-row m-6"> 
            0000
          </li>
          <li className="flex flex-row m-6">
            aki
          </li>
          <li className="flex flex-row m-6">
            aki@gmail.com
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="flex justify-center items-center  h-9 bg-gray-scale-3 cursor-pointer m-20 w-52"
        >
          Reset the Password
        </button>
        <button
          className="flex justify-center items-center h-9 bg-delete cursor-pointer m-20 w-52"
        >
          Delete Account
        </button>
      </div>
    </div>
  )
}

export default UserDetail
