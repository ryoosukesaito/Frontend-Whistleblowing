import React from "react";

function Navbar() {
  return (
    <div className="h-14 justify-between flex bg-gray-scale-2 text-white">
      <div>Admin</div>
      <div className="flex justify-between">
        <button className="mr-3">"鈴"</button>
        <button>
          <span>"人"</span>Username
        </button>
      </div>
    </div>
  );
}

export default Navbar;
