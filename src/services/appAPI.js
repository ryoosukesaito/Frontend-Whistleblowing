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

    //logout any account
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
  }),
});

export const {
  useSignupAdminMutation,
  useLoginAdminMutation,
  useLogoutAdminMutation,
  useLoginUserMutation,
} = appApi;

export default appApi;
