import React from 'react'

const ReportFilter = () => {
  return (
    <div className='w-1/4 h-100 border border-current absolute z-50 bg-white top-40 right-3'>
     <form className='m-10'>
        <div className="flex flex-row text-lg items-center">
          <div className='mr-3'> ID </div>
          <input className="rounded border"/>
        </div>
        <div className="flex flex-col">
          <div className='text-lg mt-2'>Status </div>
          {/* <input className="rounded border" /> */}
          <div>
          <div className='flex flex-col flex-wrap grid-rows-2'>

            <div className='flex flex-row items-start'>
              <div className="flex items-center">
                  <input type="checkbox" value="" className='w-4 h-4 mr-2'/>
                  <label 
                    htmlFor="checked-checkbox"
                    className='mr-5'
                  >Not started</label>
              </div>

              <div className="flex items-center">
                <input type="checkbox" value="" className='w-4 h-4 mr-2'/>
                <label htmlFor="checked-checkbox">Completed </label>
              </div>
            </div>

            <div className='flex  flex-row items-start'>
              <div className="flex items-center">
                  <input type="checkbox" value="" className='w-4 h-4 mr-2'/>
                  <label 
                    htmlFor="checked-checkbox" 
                    className='mr-5'
                  >In Progress</label>
              </div>

              <div className="flex items-center">
                <input type="checkbox" value="" className='w-4 h-4 mr-2'/>
                <label htmlFor="checked-checkbox">Updated</label>
              </div>
            </div>

          </div>

          </div>
        </div>

        <div className="flex flex-col">
          <div className='text-lg mb-2 mt-2'>Subtitle </div>
          <textarea className="rounded border h-15"></textarea>
        </div>

        <div className="flex flex-col ">
          <div className='text-lg mb-2 mt-2'>Created </div>
          <div className='flex flex-row'>
            <input className="rounded border text-center w-3/6" placeholder='00/00/0000' />
            <div className='m-1'>
              ~ 
            </div>
            <input className='rounded border text-center w-3/6' placeholder='00/00/0000' />
          </div>
        </div>
        <div className="flex flex-col">
          <div className='text-lg mb-2'>Updated </div>
          <div className='flex flex-row'>
            <input className="rounded border text-center w-3/6" placeholder='00/00/0000' />
            <div className='m-1'>
              ~ 
            </div>
            <input className='rounded border text-center w-3/6' placeholder='00/00/0000' />
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
