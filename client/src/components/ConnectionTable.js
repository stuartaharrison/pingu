import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { useFetchConnectionsTableQuery } from "../redux/connections.api";
import withChartOptions from "../hooks/withChartOptions";
import styled from "styled-components";
import SpeedTestErrorMessage from "./SpeedTestErrorMessage";
import SpeedTestLoader from "./SpeedTestLoader";

const ConnectionTable = () => {
    const { data, error, isLoading } = useFetchConnectionsTableQuery();
    const chartOptions = withChartOptions();

    const transformLabels = useMemo(() => data ? data.map(e => e.date) : [data]);

    const transformData = useMemo(() => ({
        labels: transformLabels,
        datasets: [
            {
                label: 'Connected',
                data: transformLabels.map(lbl => data ? data.find(dt => dt.date === lbl).connected : 0),
                backgroundColor: '#20bf6b'
            },
            {
                label: 'Incidents',
                data: transformLabels.map(lbl => data ? data.find(dt => dt.date === lbl).incidents : 0),
                backgroundColor: '#eb3b5a'
            }
        ]
    }), [data, transformLabels]);

    const Wrapper = styled.div`
        position: relative;
        display: flex;
        border: 1px solid ${props => props.theme.tableWrapperBg};
        border-radius: 20px;
        color: ${props => props.theme.tableWrapperColor};
        background-color: ${props => props.theme.tableWrapperBg};
        padding: 30px;
        min-height: 500px;
    `;

    return (
        <Wrapper>
            {isLoading && <SpeedTestLoader />}
            {!isLoading && (error || !data) && <SpeedTestErrorMessage />}
            {!isLoading && data && (
                <Bar options={chartOptions} data={transformData} />
            )}
        </Wrapper>
    )
};

export default ConnectionTable;