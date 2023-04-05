import React, { useState } from "react";
import { SERVER_URL } from "../../constants/constants";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(SERVER_URL);

    navigate("/api/admin/reports");

    // try {
    //   const res = await fetch(`${SERVER_URL}/auth/signin`, {
    //     method: "POST",
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (res.ok) {
    //     const data = await res.json();
    //     console.log(data);
    //   } else {
    //     console.error("Account not found");
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
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
