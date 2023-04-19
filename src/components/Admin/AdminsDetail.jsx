import React from 'react'

const AdminsDetail = () => {
  return (
    <div>
      <div className='flex justify-center mt-20'>
      <ul className='flex items-start flex-col w-2/5'>
       <li className='flex flex-row m-6'>
          <div>ID</div>:
          <div>0000</div>
        </li>
        <li className='flex flex-row basis-2 m-6'>
          <div>Role</div>:
          <div>Admin</div>
        </li>
        <li className='flex flex-row m-6'>
          <div>Name</div>:
          <div>Aki</div>
        </li>
        <li className='flex flex-row m-6'> 
          <div>Email</div>:
          <div>aki@gmail.com</div>
        </li>
      </ul>
      </div>
      <div className='flex flex-col items-center m-4 text-sm'>
          <button 
            className="flex justify-center items-center w-20 h-6 bg-delete cursor-pointer"
            
            >
              Delete</button>
        </div>
    </div>
  )
}

export default AdminsDetail
