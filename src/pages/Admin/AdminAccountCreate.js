import React, { useState } from "react";

function AdminAccountCreate() {

}

export default AdminAccountCreate;




return (
    <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center bg-gray-scale-4 w-1/3 my-auto p-10">
            <form onSubmit={handleLogin} id="login" className="">
                <div className="text-4xl flex justify-center items-center mb-20">
                    <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Logo" className="h-10 w-10 mr-1.5" />
                    <h1 className="">Whistleblowing</h1>
                </div>
                <h1 className=" text-main-color-1 text-3xl font-normal text-center mb-5">
                    Invite new admin/staff
                </h1>
                <div className="text-sm text-center mb-10">
                    <p>Invited members must set a password and complete registration.</p>
                    <p className="text-red-600">If you do not set a password, your account will not be activated.</p>
                </div>
                <label htmlFor="email">
                    New member's email
                    <input
                        className="border w-full py-3 px-3 mb-3"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                        required
                    />
                </label>
                <label htmlFor="email">
                    New member's role
                    <input
                        className="border w-full py-3 px-3 mb-3"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                        required
                    />
                </label>
                <label htmlFor="name">
                    Name
                    <input
                        className="border w-full py-3 px-3 mb-3"
                        type="name"
                        placeholder="Name"
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
                        className="border w-full py-3 px-3 mb-5"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                        required
                    />
                </label>
                <label htmlFor="confirm">
                    Confirm your password
                    <input
                        className="border w-full py-3 px-3 mb-10"
                        type="password"
                        placeholder="Confirm your password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                        required
                    />
                </label>
                <div className="text-center">
                    <button className="px-6 py-2 cursor-pointer bg-gray-scale-2 hover:bg-gray-100 text-white" type="submit">
                    Register
                    </button>
                </div>
            </form>
        </div>
    </div>
);