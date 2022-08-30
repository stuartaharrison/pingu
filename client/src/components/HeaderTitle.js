import React from "react";
import styled from "styled-components";

const HeaderTitle = ({ children, ...rest }) => {

    const Title = styled.div`
        display: flex;
        flex: 0 0 250px;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 0;
        color: ${props => props.theme.headerColor};
        h1 {
            margin: 0;
        }
    `;

    return <Title {...rest}>{children}</Title>
};

export default HeaderTitle;