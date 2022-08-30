import { storeApi } from "./api";

const speedTestApi = storeApi.enhanceEndpoints({
    addTagTypes: ['SpeedTestAvg', 'SpeedTestLast', 'SpeedTests']
}).injectEndpoints({
    endpoints: (builder) => ({
        fetchAverageSpeedTest: builder.query({
            query: ({ date }) => `speedtests/average?date=${date}`,
            providesTags: (result, error, arg) => ['SpeedTestAvg']
        }),
        fetchLastSpeedTest: builder.query({
            query: () => `speedtests/last`,
            providesTags: (result, error, arg) => ['SpeedTestLast']
        })
    })
});

export const {
    useFetchAverageSpeedTestQuery,
    useFetchLastSpeedTestQuery
} = speedTestApi;