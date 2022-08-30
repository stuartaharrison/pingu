import React from "react";
import styled from "styled-components";
import SpeedTestErrorMessage from "./SpeedTestErrorMessage";
import SpeedTestLoader from "./SpeedTestLoader";

const SpeedTest = ({ title = "Speed Test", data, error, isLoading }) => {

    const Wrapper = styled.div`
        position: relative;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding: 30px 15px;
        font-size: 1.1rem;
        text-align: center;
        border: 1px solid ${props => props.theme.speedTestBg};
        border-radius: 20px;
        color: ${props => props.theme.speedTestColor};
        background-color: ${props => props.theme.speedTestBg};
        min-height: 150px;
    `;

    const TestCardTitle = styled.div`
        margin-bottom: 1em;
    `;

    const SpeedTestRow = styled.div`
        flex-grow: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 1em;
    `;

    const SpeedDisplay = styled.div`
        font-size: 2.3rem;
    `;

    const MbpsDisplay = styled.span`
        color: #a5b1c2;
    `;

    const formatToMbps = (value) => {
        return value < 1 ? 0 : ((value / 1024) / 1024).toFixed(1);
    };
    
    return (
        <Wrapper>
            {isLoading && <SpeedTestLoader />}
            {!isLoading && (error || !data) && <SpeedTestErrorMessage />}
            {!isLoading && data && (
                <React.Fragment>
                    <TestCardTitle>{title}</TestCardTitle>
                    <SpeedTestRow>
                        <div>
                            <span className="uppercase">Download</span>&nbsp;<MbpsDisplay>Mbps</MbpsDisplay>
                            <br/>
                            <SpeedDisplay>{formatToMbps(data.download)}</SpeedDisplay>
                        </div>
                        <div>
                            <span className="uppercase">Upload</span>&nbsp;<MbpsDisplay>Mbps</MbpsDisplay>
                            <br/>
                            <SpeedDisplay>{formatToMbps(data.upload)}</SpeedDisplay>
                        </div>
                        <div>
                            <span className="uppercase">Ping</span>&nbsp;<MbpsDisplay>ms</MbpsDisplay>
                            <br/>
                            <SpeedDisplay>{data.ping.toFixed(0)}</SpeedDisplay>
                        </div>
                    </SpeedTestRow>
                </React.Fragment>
            )}
        </Wrapper>
    )
};

export default SpeedTest;