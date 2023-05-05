import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../constants/constants";

//define a service user a base URL

const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_URL,
  }),
  endpoints: (builder) => ({
    //inviting a new admin
    signupAdmin: builder.mutation({
      query: (admin) => ({
        url: "/api/admin/signup",
        method: "POST",
        body: admin,
      }),
    }),

    //login admin
    loginAdmin: builder.mutation({
      query: (admin) => ({
        url: "/api/admin/login",
        method: "POST",
        body: admin,
      }),
    }),

    //logout admin account
    logoutAdmin: builder.mutation({
      query: (payload) => ({
        url: "/api/admin/logout",
        method: "DELETE",
        body: payload,
      }),
    }),

    //register a new user
    signupUser: builder.mutation({
      query: (user) => ({
        url: "/api/user/register",
        method: "POST",
        body: user,
      }),
    }),

    // login User
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/api/user/login",
        method: "POST",
        body: user,
      }),
    }),

    //logout user account
    logoutUser: builder.mutation({
      query: (payload) => ({
        url: "/api/user/logout",
        method: "DELETE",
        body: payload,
      }),
    }),

    //update user password
    updatePasswordUser: builder.mutation({
      query: (payload) => ({
        url: "/api/user/password",
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json",
          "x-auth-token": payload.token
         },
        body: payload.body,
      }),
    }),

    //request resetting user password
    requestResetUser: builder.mutation({
      query: (user) => ({
        url: "/api/user/password/email",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const {
  useSignupAdminMutation,
  useLoginAdminMutation,
  useLogoutAdminMutation,
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useUpdatePasswordUserMutation,
  useRequestResetUserMutation,
} = appApi;

export default appApi;
