import React, { useState } from "react";
import SpeedTest from "./SpeedTest";
import { useFetchAverageSpeedTestQuery } from "../redux/speedtest.api";

const AverageSpeedTest = () => {
    const [date, setDate] = useState(null);
    const { data, error, isLoading } = useFetchAverageSpeedTestQuery({ date }, {
        pollingInterval: 30000
    });

    return <SpeedTest 
        title="Average Speed (last 30 days)"
        date={date}
        data={data} 
        error={error} 
        isLoading={isLoading}
        setDate={setDate} 
    />
};

export default AverageSpeedTest;