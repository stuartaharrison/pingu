import React from "react";
import styled from "styled-components";
import { 
    AverageSpeedTest, 
    ConnectionTable, 
    Container,
    FlexRow,
    Header, 
    HeaderTitle,
    HeaderToolbar,
    LastSpeedTest 
} from "./components";

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
                <HeaderToolbar>
                    <HeaderTitle>
                        <h1>Pingu</h1>
                    </HeaderTitle>
                </HeaderToolbar>
            </Header>
            <Container>
                <FlexRow className="mb-2">
                    <AverageSpeedTest />
                    <LastSpeedTest />
                </FlexRow>
                <div>
                    <ConnectionTable />
                </div>
            </Container>
        </Application>
    );
};

export default App;