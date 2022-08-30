import React from "react";
import styled from "styled-components";

const HeaderToolbar = ({ children, ...rest }) => {

    const Toolbar = styled.div`
        flex: 1;    
        display: flex;
        column-gap: 10px;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
    `;

    return <Toolbar {...rest}>{children}</Toolbar>
};

export default HeaderToolbar;