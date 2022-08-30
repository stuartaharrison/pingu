import React from "react";
import styled from "styled-components";

const SpeedTestLoader = () => {

    const Loader = styled.div`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid rgba(0, 0, 0, 0.7);
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.7);
    `;

    return <Loader>
        <div class="lds-facebook"><div></div><div></div><div></div></div>
        <br/>
        <span>Collecting Data...</span>
    </Loader>
};

export default SpeedTestLoader;