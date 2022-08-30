import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./index.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={{
                mainBg: '#4b6584',
                mainColor: '#ffffff',

                headerBg: '#4b6584',
                headerColor: '#ffffff',

                speedTestBg: '#778ca3',
                speedTestColor: '#ffffff',

                tableWrapperBg: '#778ca3',
                tableWrapperColor: '#ffffff',
                tableGridColorX: '#a5b1c2',
                tableGridColorY: '#a5b1c2',
                tableSeries1Bg: '#20bf6b',
                tableSeries2Bg: '#eb3b5a'
            }}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);