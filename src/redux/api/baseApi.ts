import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'baseAPi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://library-management-app-rust.vercel.app/api/' }),
    tagTypes: ["Books", "BorrowBooks"],
    endpoints: (build) => ({
        getBookByName: build.query({
            query: () => '/books',
            providesTags: ['Books'],
        }),
        CreateBook: build.mutation({
            query: (bookData) => ({
                url: '/books',
                method: 'POST',
                body: bookData,
            }),
            invalidatesTags: ['Books'],
        }),
        EditBook: build.mutation({
            query: ({ id, ...bookData }) => ({
                url: `/books/${id}`,
                method: 'PUT',
                body: bookData,
            }),
            invalidatesTags : ['Books']
        }),
        DeleteBook: build.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Books']
        }),
        BorrowBook: build.mutation({
            query: (bookData) => ({
                url: '/borrow',
                method: 'POST',
                body: bookData,
            }),
            invalidatesTags: ["BorrowBooks" , 'Books']
        }),
        getBorrowBook: build.query({
            query: () => '/borrow',
            providesTags : ["BorrowBooks"]
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBookByNameQuery } = baseApi
export const { useCreateBookMutation } = baseApi
export const { useEditBookMutation } = baseApi
export const { useBorrowBookMutation } = baseApi
export const { useGetBorrowBookQuery } = baseApi
export const { useDeleteBookMutation } = baseApi