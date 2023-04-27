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