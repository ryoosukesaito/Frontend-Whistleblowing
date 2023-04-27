import React, {useState, useContext, useEffect } from "react";
import { SERVER_URL, adminsTableHeaders } from "../../constants/constants";

import { AppContext } from "../../context/appContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddNewAdmin from "./AddNewAdmin";

function AdminList() {
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [inviteMailAdress, setInviteMailAdress] = useState("")
  const [inviteRole, setInviteRole] = useState("")

  const admin = useSelector((state) => state.admin);
  const navigation = useNavigate();

  const { admins, setAdmins, adminDetail, setAdminDetail,dateFormater } =
    useContext(AppContext);

  useEffect(() => {
    if (admin) {
      getAdmins();
    }
  }, []);

  function getAdmins() {
    fetch(`${SERVER_URL}/api/admin/all`)
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }

  async function handleClick(e) {
    const id = e.target.dataset.value;
    const getAdminDetailUrl = `/api/admin/${id}`;
    await fetch(`${SERVER_URL}${getAdminDetailUrl}`)
      .then((res) => res.json())
      .then((data) => setAdminDetail(data));
    if (adminDetail) navigation(getAdminDetailUrl);
  }

  useEffect(() => {
    // 背景画面固定用関数
    const registerBackgroundFixed = () => {
      const body = document.body;
      const scrollWidth = window.innerWidth - body.clientWidth;
      body.style.marginRight = `${scrollWidth}px`;
      body.style.overflowY = 'hidden';
    };
    // 背景画面固定解除用関数
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
    <div>
      <div className="flex justify-between">
      <div className="text-main-color-1 font-bold text-2xl pl-3">
        Admin list
      </div>
      {admin.role==='superAdmin'?
        <button className="flex rounded px-8 py-1 items-center bg-gray-scale-3 cursor-pointer mr-10 hover:bg-gray-scale-2 hover:text-white"
        onClick={()=>setShowInviteModal(!showInviteModal)}>
          Create
        </button>
        :<></>
      }
      </div>
      {showInviteModal?
        <>
        <AddNewAdmin />
           {/* <div
             className={
               ' overflow-hidden absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm transition-all ' +
               (showInviteModal)
             }
             onClick={onClickBackground}
           >
             <div className="absolute right-0 -top-10 h-10 w-10 hover:cursor-pointer">
              <p>Close</p>
            </div>
              <div
                id="modalDiv"
                className="w-full max-w-xl"
                onClick={onClickCard}
              >
             <div className="flex w-11/12 mt-40">
             <div className="flex  w-11/12">
              <div className="flex flex-col items-center bg-white mx-40">
              <div className="text-3xl mx-10 mt-10">Invite New Admin/Staff</div>
                <div className=" overflow-hidden mt-6 mb-10 mx-40">
                  New Admin/Staff members who receive an email invitation must access the
                  URL attached to the email and set a password.
                </div>
                <form onSubmit={inviteAdminUser}>
                  <div className="flex flex-row mx-10">
                    <div className="flex flex-col">
                      <label className="text-lg my-5" htmlFor="inline-full-name">
                        New member's Email 
                      </label>
                      <label className="text-lg my-6" htmlFor="inline-password">
                        Role
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <input className="border border-black w-96 h-10 m-4"
                       type="text"
                       value={inviteMailAdress}
                       onChange={(e)=>setInviteMailAdress(e.target.value)}
                       />
                       <select className="border border-black w-96 h-10 m-4"
                      onChange={(e)=>setInviteRole(e.target.value)}>
                        <option value="superAdmin">SuperAdmin</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <button 
                      className="w-40 h-10 text-lg bg-gray-scale-3 mt-10 mb-2 hover:bg-main-color-1 text-white" 
                      type="submit">
                        Send
                    </button>
                  </div>
                </form>
               </div>
             </div>
             </div>
            </div>
           </div> */}
        </>
        :
        <></>
        }
      <div className="h-full mt-5 flex items-start justify-center">
      <table className="w-full">
        <thead className="text-lg">
          <tr>
            {adminsTableHeaders.map((header, idx) => (
              <th key={idx} className="border-b-4 border-slate-600">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {admins.map((data, idx) => (
            <tr 
              key={idx}
              className=" cursor-pointer hover:bg-gray-scale-3"
              onClick={handleClick}
            >
              <td className="border-b-2 border-slate-700 text-center"
              data-value={data._id}
              >
              <div className="my-3"
              data-value={data._id}>
                {data._id}
              </div>
              </td>
              <td
                className="border-b-2 border-slate-700 text-center"
                data-value={data._id}
              >
                {data.role}
              </td>
              <td
                className="border-b-2 border-slate-700 text-center"
                data-value={data._id}
              >
                {data.name}
              </td>
              <td
                className="border-b-2 border-slate-700 text-center"
                data-value={data._id}
              >
                {dateFormater(data.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default AdminList;
