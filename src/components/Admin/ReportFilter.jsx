import React from 'react'

const ReportFilter = () => {
  return (
    <div className='w-2/5 h-100 border border-current'>
     <form className='m-10'>
        <div className="flex flex-row text-lg items-center">
          <div className='mr-3'> ID </div>
          <input className="rounded border"/>
        </div>
        <div className="flex flex-col">
          <div className='text-lg mt-2'>Status </div>
          {/* <input className="rounded border" /> */}
          <div>
          <div className='flex flex-wrap grid-rows-2'>
            <div className="flex items-center">
                <input type="checkbox" value="" className='w-4 h-4 mr-3'/>
                <label htmlFor="checked-checkbox">Not started</label>
              </div>

              <div className="flex items-center">
                <input type="checkbox" value="" className='w-4 h-4 mr-3 ml-4'/>
                <label htmlFor="checked-checkbox">In Progress</label>
              </div>

              <div className="flex items-center">
                <input type="checkbox" value="" className='w-4 h-4 mr-3 ml-4'/>
                <label htmlFor="checked-checkbox">Completed</label>
              </div>

              <div className="flex items-center">
                <input type="checkbox" value="" className='w-4 h-4 mr-3'/>
                <label htmlFor="checked-checkbox">Updated</label>
              </div>
                {/* <div className='text-xs text-red-600' >*In Progress item which has not checked last update</div> */}
          </div>

          </div>
        </div>

        <div className="flex flex-col">
          <div className='text-lg mb-2 mt-2'>Subtitle </div>
          <textarea className="rounded border h-20"></textarea>
        </div>

        <div className="flex flex-col ">
          <div className='text-lg mb-2 mt-2'>Created </div>
          <div className='flex flex-row'>
            <input className="rounded border text-center" placeholder='00/00/0000' />
            <div className='m-1'>
              ~ 
            </div>
            <input className='rounded border text-center' placeholder='00/00/0000' />
          </div>
        </div>
        <div className="flex flex-col">
          <div className='text-lg mb-2'>Updated </div>
          <div className='flex flex-row'>
            <input className="rounded border text-center" placeholder='00/00/0000' />
            <div className='m-1'>
              ~ 
            </div>
            <input className='rounded border text-center' placeholder='00/00/0000' />
          </div>
        </div>
        <div className='flex flex-col items-center m-4 text-sm'>
          <button className="flex justify-center items-center w-20 h-6 bg-gray-scale-3 cursor-pointer">Apply</button>
        </div>
      </form>
    </div>
  )
}

export default ReportFilter
