import React, {useState, useContext, useEffect } from "react";
import { SERVER_URL, adminsTableHeaders } from "../../constants/constants";

import { AppContext } from "../../context/appContext";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminList() {
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [inviteMailAdress, setInviteMailAdress] = useState("")
  const [inviteRole, setInviteRole] = useState("")

  const admin = useSelector((state) => state.admin);
  const navigation = useNavigate();

  const { admins, setAdmins, adminDetail, setAdminDetail } =
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
      <div className="text-main-color-1 font-bold text-2xl pl-3">
        Admin list
      </div>
      <div className="flex justify-end">
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
           <div
             className={
               'fixed flex flex-col items-center justify-center overflow-hidden bg-gray-500/50 transition-all ' +
               (showInviteModal
                 ? ' top-0 left-0 h-screen w-screen '
                 : ' top-1/2 left-1/2 h-0 w-0 ')
             }
             onClick={onClickBackground}
           >
             <div className="relative h-3/4 w-3/4 max-w-3xl">
               {/* 閉じるボタン */}
               <div className="absolute right-0 -top-10 h-10 w-10 hover:cursor-pointer">
                 <p>Close</p>
               </div>
               <div
                 id="modalDiv"
                 className="w-full max-w-xl"
                 onClick={onClickCard}
               >
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={inviteAdminUser}>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        New member's Email 
                      </label>
                    </div>
                    <div className="md:w-2/3">
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"
                       value={inviteMailAdress}
                       onChange={(e)=>setInviteMailAdress(e.target.value)}
                       />
                    </div>
                  </div>
                  <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                        Role
                      </label>
                    </div>

                    <div className="inline-block relative w-64">
                      <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      onChange={(e)=>setInviteRole(e.target.value)}>
                        <option value="superAdmin">SuperAdmin</option>
                        <option value="admin">Admin</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
               </div>
             </div>
           </div>
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
              <div className="my-3">
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
                {data.createdAt}
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
