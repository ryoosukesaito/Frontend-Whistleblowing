import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginAdminMutation } from "../../services/appAPI";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginAdmin, { error }] = useLoginAdminMutation();

  const handleLogin = async (e) => {
    e.preventDefault();

    //login Admin
    loginAdmin({ email, password }).then(({ data }) => {
      if (data) {
        navigate("/api/admin/reports");
        console.log(data);
      }
      if (error) {
        console.error(error.data.error);
      }
    });
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleLogin} id="login" className="">
        <h1>Whistleblowing</h1>
        <h1 className=" text-red-600">Admin</h1>
        <label htmlFor="email">
          Email
          <input
            className="border rounded w-full py-2 px-3"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            className="border rounded w-full py-2 px-3"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />
        </label>
        <button className="border rounded" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginAdmin;
