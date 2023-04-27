import React from 'react';
import AdminsDelete from '../../components/Admin/AdminsDelete';
import SideBar from '../../components/SideBar';
import { pageHeight } from "../../constants/constants";

function AdminDelete () {
  return (
    <div className='w-screen flex items-center flex-row" style={pageHeight}'>
      <div className='h-full w-1/6'>
        <SideBar />
      </div>
      <div className="h-full w-5/6 flex flex-col justify-between px-3 py-4">
        <AdminDelete />
      </div>
    </div>
  )
}

export default AdminDelete
