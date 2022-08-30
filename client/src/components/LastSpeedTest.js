import React from "react";
import SpeedTest from "./SpeedTest";
import { useFetchLastSpeedTestQuery } from "../redux/speedtest.api";
import moment from "moment";

const LastSpeedTest = () => {
    const { data, error, isLoading } = useFetchLastSpeedTestQuery();
    const { createdAt } = data || {};

    const titleToDisplay = data && createdAt
        ? `Last Test (${moment(createdAt).format('YYYY-MM-DD HH:mm')})`
        : `Last Test`

    return <SpeedTest
        title={titleToDisplay}
        data={{
            download: data ? data.downloadBytes : 0,
            upload: data ? data.uploadBytes : 0,
            ping: data ? data.pingLow : 0
        }} 
        error={error} 
        isLoading={isLoading}
    />
};

export default LastSpeedTest;