import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetcherApi = createApi({
  reducerPath: "fetcherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
    // baseUrl: "https://ivana-event-app.herokuapp.com/",
    credentials: "include",
  }),
  tagTypes: ["ForEvent", "ForAuth"],
  endpoints(build) {
    return {
      //---------Authentication------------
      registerUser: build.mutation({
        query: (body) => ({ url: "register", method: "post", body }),
        invalidatesTags: ["ForAuth"],
      }),

      loginUser: build.mutation({
        query: (body) => ({ url: "login", method: "post", body }),
        invalidatesTags: ["ForAuth"],
      }),

      getAuth: build.query({
        query: () => ({ url: "auth" }),
        providesTags: ["ForAuth"],
      }),

      logoutUser: build.mutation({
        query: () => ({ url: "logout" }),
        providesTags: ["ForAuth"],
      }),

      //-------------Events-------------
      postEvent: build.mutation({
        query: (body) => ({ url: "new-event", method: "post", body }),
        invalidatesTags: ["ForEvent"],
      }),

      putEvent: build.mutation({
        query: ({ id, values }) => ({
          url: `update-event/${id}`,
          method: "put",
          body: values,
        }),
        invalidatesTags: ["ForEvent"],
      }),

      deleteEvent: build.mutation({
        query: ({ id }) => ({ url: `delete-event/${id}`, method: "delete" }),
        invalidatesTags: ["ForEvent"],
      }),

      fetchAllEvents: build.query({
        query: () => ({ url: "my-events" }),
        providesTags: ["ForEvent"],
      }),

      getOneEvent: build.query({
        query: (id) => ({ url: `one-event/${id}` }),
        providesTags: ["ForEvent"],
      }),
    };
  },
});

export const {
  //______Authentication______
  useGetAuthQuery,
  useLoginUserMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
  //________Events________
  useDeleteEventMutation,
  useFetchAllEventsQuery,
  useGetOneEventQuery,
  usePostEventMutation,
  usePutEventMutation,
} = fetcherApi;
