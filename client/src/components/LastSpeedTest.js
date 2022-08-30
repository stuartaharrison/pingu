import React from "react";
import { useFetchLastSpeedTestQuery } from "../redux/speedtest.api";

const LastSpeedTest = () => {
    const { data, error, isLoading } = useFetchLastSpeedTestQuery();

    return (
        <div>
            {data && JSON.stringify(data)}
        </div>
    );
};

export default LastSpeedTest;