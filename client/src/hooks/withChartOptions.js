import { useTheme } from "styled-components";

const withChartOptions = () => {
    const theme = useTheme();

    return {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: theme.tableGridColorX
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: theme.tableGridColorX
                },
                grid: {
                    color: theme.tableGridColorX
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: theme.tableGridColorY
                },
                grid: {
                    color: theme.tableGridColorY
                }
            }
        },
        theme: {
            tableSeries1Bg: theme.tableSeries1Bg,
            tableSeries2Bg: theme.tableSeries2Bg
        }
    }
};

export default withChartOptions;