import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com/search' }),
    endpoints: (builder) => ({
        getImages: builder.mutation({
            query: (q) => ({
                url:`/photos/?client_id=JY3liUK_UwDTfkGFjQZLRAhxNQ5aoQQMNit-Jc8RFdw&query=${q}&per_page=100`,
                method:"GET"
            }),
        }),
    }),
})
export const { useGetImagesMutation } = api