import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookApi = createApi({
    reducerPath: 'phonebookApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://616e5049a83a850017caa90e.mockapi.io/api/v1" }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: (newContact) => ({
                url: '/contacts',
                method: 'POST',
                body: newContact
            }),
            invalidatesTags: ['Contact']
        }),
        deleteContact: builder.mutation({
            query: contactID => ({
                url: `/contacts/${contactID}`,
                method: 'DELETE',
            }),
              invalidatesTags: ['Contact']
        }),
    }),
});

export const { useFetchContactsQuery, useAddContactMutation, useDeleteContactMutation } = phonebookApi;