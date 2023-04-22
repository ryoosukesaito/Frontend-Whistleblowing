import React from 'react'

const AdminsDetail = () => {
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
          <div>000</div>
        </li>
        <li className='flex flex-row basis-2 m-6'>
          <div>Admin</div>
        </li>
        <li className='flex flex-row m-6'>
          <div>aki</div>
        </li>
        <li className='flex flex-row m-6'> 
          <div>aki@gmail.com</div>
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
