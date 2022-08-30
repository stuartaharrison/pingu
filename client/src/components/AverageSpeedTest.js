import React, { useState } from "react";
import { useFetchAverageSpeedTestQuery } from "../redux/speedtest.api";

const AverageSpeedTest = () => {
    const [date, setDate] = useState(null);
    const { data, error, isLoading } = useFetchAverageSpeedTestQuery({ date });

    return (
        <div>
            {data && JSON.stringify(data)}
        </div>
    );
};

export default AverageSpeedTest;