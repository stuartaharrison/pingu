import React from "react";
import styled from "styled-components";

const SpeedTestErrorMessage = () => {

    const ErrorMessage = styled.div`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    return <ErrorMessage>
        <span>Oops!</span>
        <br/>
        <span>Sorry, there was a problem collecting the data.</span>
    </ErrorMessage>
};

export default SpeedTestErrorMessage;