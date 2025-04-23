import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.10.198:5006/" }),
  prepareHeaders: (headers, { getState }) => {
    // Try to get token from Redux state
    const token = getState().auth?.accessToken || null;
    // If token not in state, retrieve from local storage
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    } else {
      const authData = JSON.parse(localStorage.getItem("auth")); // Parse the `auth` object from local storage
      if (authData?.access) {
        headers.set("authorization", `Bearer ${authData.access}`); // Set Authorization header
      }
    }
    return headers;
  },
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "api/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    verifyEmail: builder.mutation({
      query: ({ email }) => ({
        url: "api/auth/check-email",
        method: "POST",
        body: { email },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "api/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "api/auth/verify-otp",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: ({token}) => ({
        url: "api/auth/logout",
        method: "POST",
        body: { token },
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useVerifyEmailMutation, useVerifyOtpMutation, useLogoutMutation } = api;
