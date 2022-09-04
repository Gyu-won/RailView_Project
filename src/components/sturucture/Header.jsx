import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

const Wrapper = styled.div`
    padding: 16px;
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

function Header(props) {
    return (
        <Wrapper>
            <StyledLogo>RailView</StyledLogo>
        </Wrapper>
    );
}
// <StyledLogo><Link to="/">RailView</Link></StyledLogo>

export default Header;