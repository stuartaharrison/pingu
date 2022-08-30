import React from "react";
import styled from "styled-components";
import { AverageSpeedTest, ConnectionTable, Container, Header, LastSpeedTest } from "./components";

const App = () => {
    const Application = styled.div`
        display: flex;
        flex-wrap: wrap;
        display: grid;
        height: 100vh;
        grid-template-rows:     55px 1fr;
        grid-template-columns:  1fr;
        grid-template-areas:    "header"
                                "main";
    `;

    return (
        <Application>
            <Header>

            </Header>
            <Container>
                <div>
                    <AverageSpeedTest />
                    <LastSpeedTest />
                </div>
                <div>
                    <ConnectionTable />
                </div>
            </Container>
        </Application>
    );
};

export default App;