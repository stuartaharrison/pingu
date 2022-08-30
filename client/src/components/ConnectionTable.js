import React, { useMemo } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from "react-chartjs-2";
import { useFetchConnectionsTableQuery } from "../redux/connections.api";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const ConnectionTable = () => {
    const { data, error, isLoading } = useFetchConnectionsTableQuery();

    // const transformData = useMemo(() => [], [data]);

    // const primaryAxis = useMemo(() => ({
    //     getValue: (datum) => datum.date
    // }), []);

    // const secondaryAxis = useMemo(() => ({
    //     getValue: (datum) => datum.uptime,
    //     stacked: true
    // }), []);

    const transformLabels = useMemo(() => data ? data.map(e => e.date) : [data]);

    const transformData = useMemo(() => ({
        labels: transformLabels,
        datasets: [
            {
                label: 'Connected',
                data: transformLabels.map(lbl => data ? data.find(dt => dt.date === lbl).uptime : 0),
                backgroundColor: 'green'
            },
            {
                label: 'Incidents',
                data: transformLabels.map(lbl => data ? data.find(dt => dt.date === lbl).incidents : 0),
                backgroundColor: 'red'
            }
        ]
    }), [data, transformLabels]);

    return (
        <div>
            {data && JSON.stringify(data)}
            {data && (
                <Bar 
                    options={{
                        responsive: true,
                        scales: {
                            x: {
                                stacked: true
                            },
                            y: {
                                stacked: true
                            }
                        }
                    }}
                    data={transformData} 
                />
            )}
        </div>
    )
};

export default ConnectionTable;