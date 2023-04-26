import React from "react"



function UserDetail () {
  


  return (
    <div className="h-full w-full">
      <div className='flex justify-center mt-40'>
        <div className="border w-2/5">
          <div className="flex flex-row justify-center">
            <ul className="flex items-start flex-col mr-20">
              <li className="m-3">
                ID :
              </li>
              <li className="m-3">
                Name :
              </li>
              <li className="m-3">
                Email :
              </li>
            </ul>
            <ul className="flex items-start flex-col">
              <li className="m-3"> 
                0000
              </li>
              <li className="m-3">
                aki
              </li>
              <li className="m-3">
                aki@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-10">
        <button
          className="flex justify-center items-center  h-9 bg-gray-scale-3 cursor-pointer m-10 w-52"
        >
          Reset the Password
        </button>
        <button
          className="flex justify-center items-center h-9 bg-delete cursor-pointer m-10 w-52"
        >
          Delete Account
        </button>
      </div>
    </div>
  )
}

export default UserDetail
