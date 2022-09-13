import React from "react";
import styled from "styled-components";
import train from "../image/train.png"

const StyledLogo = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

const LogoContainer = styled.div`
    margin-inline: auto;
`;

const SubwayImage = styled.div`
    
    text-align: right;
    float: right;
`;

const Box = styled.div`
    background-color: GhostWhite;
`;

const Wrapper = styled.div`
    padding: 16px;
    width: 70%;
    display: flex;
    margin-inline: auto;
    align-items: center;
`;

const Title = styled.h2`
    color: black;
`;

function Header(props) {
    return (
        <Box>
            <Wrapper>
            <LogoContainer>
                <StyledLogo><Title>RailView</Title></StyledLogo>
            </LogoContainer>
            <SubwayImage>
                <img src={train} width="60px"/>
            </SubwayImage>
        </Wrapper>
        </Box>
        
    );
}

export default Header;