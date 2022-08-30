import React from "react";
import styled from "styled-components";

const FlexRow = ({ children, ...rest }) => {

    const Row = styled.div`
        display: flex;
        gap: 15px;
    `;

    return <Row {...rest}>{children}</Row>
};

export default FlexRow;