import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/'
    }),
    endpoints: () => ({})
});