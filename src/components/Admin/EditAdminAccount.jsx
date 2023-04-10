import React from "react";

function EditAdminAccount() {
  return (
    <div className="flex flex-col">
      <div>Edit Admin Account</div>
      <div>Invited members must set a password and complete registration.</div>
      <div>
        If you do not set a password, your account will not be activated.
      </div>
      <form>
        <div className="flex flex-row">
          <div>Member's Email: </div>
          <input
            className="rounded border"
            placeholder="hoge@email.com"
            disabled="true"
          />
        </div>
        <div className="flex flex-row">
          <div>Member's Role: </div>
          <input
            className="rounded border"
            placeholder="Admin"
            disabled="true"
          />
        </div>
        <div className="flex flex-row">
          <div>Name: </div>
          <input className="rounded border" />
        </div>
        <div className="flex flex-row">
          <div>Password: </div>
          <input className="rounded border" />
        </div>
        <div className="flex flex-row">
          <div>Confirm Password: </div>
          <input className="rounded border" />
        </div>

        <button className="rounded border">Register</button>
      </form>
    </div>
  );
}

export default EditAdminAccount;
