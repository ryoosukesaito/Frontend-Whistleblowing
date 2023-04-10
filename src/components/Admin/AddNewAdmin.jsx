import React from "react";

function AddNewAdmin() {
  return (
    <div className="flex flex-col">
      <div>AddNewAdmin</div>
      <div>
        New Admin/Staff members who receive an email invitation must access the
        URL attached to the email and set a password.
      </div>
      <form>
        <div className="flex flex-row">
          <div>New Member's Email: </div>
          <input className="rounded border" />
        </div>
        <div className="flex flex-row">
          <div>New Member's Role: </div>
          <input className="rounded border" />
        </div>

        <button className="rounded border">Send</button>
      </form>
    </div>
  );
}

export default AddNewAdmin;
