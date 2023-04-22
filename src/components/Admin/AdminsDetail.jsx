
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/appContext";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";

const AdminsDetail = () => {
  const admin = useSelector((state) => state.admin);
  const { id } = useParams();
  const navigation = useNavigate();
  const { adminDetail, setAdminDetail } = useContext(AppContext);

  useEffect(() => {
    if (admin) {
      if (!adminDetail) {
        getAdminDetail();
      }
    }
  }, []);

  async function getAdminDetail() {
    const getAdminDetailUrl = `/api/admin/${id}`;
    await fetch(`${SERVER_URL}${getAdminDetailUrl}`)
      .then((res) => res.json())
      .then((data) => setAdminDetail(data));
  }

  function deleteHandler() {
    navigation(`/api/admin/delete/${id}`);
  }
  
  return (
    <div>
      <div className='flex justify-center mt-20'>
      <ul className='flex items-start flex-col w-2/5'>
       <li className='flex flex-row m-6'>
          <div>ID</div>:
        </li>
        <li className='flex flex-row basis-2 m-6'>
          <div>Role</div>:
        </li>
        <li className='flex flex-row m-6'>
          <div>Name</div>:
        </li>
        <li className='flex flex-row m-6'> 
          <div>Email</div>:
        </li>
      </ul>
      <ul className='flex items-start flex-col w-2/5'>
       <li className='flex flex-row m-6'>
          <div>{adminDetail._id}</div>
        </li>
        <li className='flex flex-row basis-2 m-6'>
          <div>{adminDetail.role}</div>
        </li>
        <li className='flex flex-row m-6'>
          <div>{adminDetail.name}</div>
        </li>
        <li className='flex flex-row m-6'> 
          <div>{adminDetail.email}</div>
        </li>
      </ul>
      </div>
      <div className='flex flex-row justify-center'>
          <button 
            className="flex justify-center items-center w-20 h-6 bg-gray-scale-3 cursor-pointer m-20"
            
            >
              Update</button>
              <button 
            className="flex justify-center items-center w-20 h-6 bg-delete cursor-pointer m-20"
            
            >
              Delete</button>
        </div>
    </div>
  )
}

export default AdminsDetail
