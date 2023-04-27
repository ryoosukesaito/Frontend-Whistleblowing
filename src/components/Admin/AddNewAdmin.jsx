import React, { useContext, useState, useEffect } from "react";

import { AppContext } from "../../context/appContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "..//../constants/constants";

function AddNewAdmin() {
  
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [inviteMailAdress, setInviteMailAdress] = useState("")
  const [inviteRole, setInviteRole] = useState("")
  const admin = useSelector((state) => state.admin);

  useEffect(() => {
  // 背景画面固定用関数
    const registerBackgroundFixed = () => {
      const body = document.body;
      const scrollWidth = window.innerWidth - body.clientWidth;
      body.style.marginRight = `${scrollWidth}px`;
      body.style.overflowY = 'hidden';
    };
  const unRegisterBackgroundFixed = () => {
    const body = document.body;
    body.style.overflowY = '';
    body.style.marginRight = '';
  };
  if (showInviteModal) registerBackgroundFixed();

  return () => {
    unRegisterBackgroundFixed();
  };
}, [showInviteModal]);

  // 枠外クリック用関数
  const onClickBackground = () => {
    setShowInviteModal(false);
  };
  // 枠内クリック
  const onClickCard = (e) => {
    e.stopPropagation();
  };
   // Admin招待
  const inviteAdminUser=async(e)=>{
    e.preventDefault();
    console.log(inviteMailAdress);
    console.log(inviteRole);

    await fetch(`${SERVER_URL}/api/admin/invite`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      email:inviteMailAdress,
      role:inviteRole
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    // window.location.reload();
  }
  

  return (
    <div className="z-50 absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm">
      <div className="flex justify-center mt-40">
        <div className="flex w-11/12">
          <div className="flex flex-col items-center bg-white mx-40">
            <div className="text-3xl mx-10 mt-10">Invite New Admin/Staff</div>
            <div className=" overflow-hidden mt-6 mb-10 mx-40">
              New Admin/Staff members who receive an email invitation must access the
              URL attached to the email and set a password.
            </div>
            <form onSubmit={inviteAdminUser}>
              <div className="flex flex-row mx-10">
                <div className="flex flex-col">
                  <div className="text-lg my-5" htmlFor="inline-full-name">New Member's Email : </div>
                  <div className="text-lg my-6" htmlFor="inline-password">New Member's Role  :  </div>
                </div>
                <div className="flex flex-col ">
                  <input 
                    className="border border-black w-96 h-10 m-4" 
                    type="text"
                    value={inviteMailAdress}
                    onChange={(e)=>setInviteMailAdress(e.target.value)} 
                  />
                  <select 
                    className="border border-black w-96 h-10 m-4"
                    onChange={(e)=>setInviteRole(e.target.value)}
                  >
                    <option value="superAdmin">SuperAdmin</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col items-center">
                  <button 
                   className="w-40 h-10 text-lg bg-gray-scale-3 mt-10 mb-2"
                   type="submit"
                  >
                    Send</button>
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
