import React from "react";
import styled from "styled-components";

const Container = ({ children, ...rest }) => {

    const Main = styled.main`
        flex: 1;
        grid-area: main;
        padding: 1rem;
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        background-color: #f4f7fa;
    `;

    return <Main {...rest}>{children}</Main>
};

export default Container;