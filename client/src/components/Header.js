import React from "react";
import styled from "styled-components";

const Header = ({ children, ...rest }) => {

    const Header = styled.header`
        display: flex;
        flex-basis: 100%;
        grid-area: header;
        height: 55px;
        color: ${props => props.theme.headerColor};
        background-color: ${props => props.theme.headerBg};
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        position: relative;
    `;

    return <Header {...rest}>{children}</Header>
};

export default Header;