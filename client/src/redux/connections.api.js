import { storeApi } from "./api";

const connectionsApi = storeApi.enhanceEndpoints({
    addTagTypes: ['ConnectionsTable']
}).injectEndpoints({
    endpoints: (builder) => ({
        fetchConnectionsTable: builder.query({
            query: () => `results/incidents`,
            providesTags: (result, error, arg) => ['ConnectionsTable']
        })
    })
});

export const {
    useFetchConnectionsTableQuery
} = connectionsApi;