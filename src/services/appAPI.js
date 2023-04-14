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
    logoutAccount: builder.mutation({
      query: (payload) => ({
        url: "/logout",
        method: "DELETE",
        body: payload,
      }),
    }),
  }),
});

export const {
  useSignupAdminMutation,
  useLoginAdminMutation,
  useLogoutAccountMutation,
} = appApi;

export default appApi;
