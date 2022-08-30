import { useTheme } from "styled-components";

const withChartOptions = () => {
    const theme = useTheme();

    return {
        responsive: true,
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
        }
    }
};

export default withChartOptions;