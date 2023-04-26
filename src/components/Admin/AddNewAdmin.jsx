import React, { useContext, useState } from "react";
import { AppContext } from "../../context/appContext";


function AddNewAdmin() {
  const {close, setClose} = useContext(AppContext);

  function handleClose (e) {
    
  }
  
  return (
    <div className="z-50 absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm">
      <div className="flex justify-center mt-40">
        <div className="flex w-11/12">
          <div className="flex flex-col bg-white mx-40">
            <div className="text-3xl mx-10 mt-10">Invite New Admin/Staff</div>
            <div className=" overflow-hidden mt-6 mb-10 mx-10">
              New Admin/Staff members who receive an email invitation must access the
              URL attached to the email and set a password.
            </div>
            <form>
              <div className="flex flex-row mx-10">
                <div className="flex flex-col">
                  <div className="text-lg my-5">New Member's Email : </div>
                  <div className="text-lg my-6">New Member's Role  :  </div>
                </div>
                <div className="flex flex-col ">
                  <input className="border border-black w-96 h-10 m-4" />
                  <input className="border border-black w-96 h-10 m-4" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                  <button className="w-40 h-10 text-lg bg-gray-scale-3 mt-10 mb-2">Send</button>
                  <div className="text-delete mb-10 cursor-pointer">
                  <button>
                    Cancel
                  </button>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewAdmin;
