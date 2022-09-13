import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    padding: 16px;
    width: 80%;
    display: flex;
    flex-direction: row;
    margin-inline: auto;
`;

const LogoContainer = styled.div`
    width: 20%;
`;

const StyledLogo = styled.h1`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;

const Box = styled.div`
    background-color: #f8f8f8;
`;

const ContentContainer = styled.div`
    width: 60%;
    text-align: center;
    margin-right: 20%;
`;

const Content = styled.p`
    font-size: 10px;
`;

const LinkContainer = styled.div`
    width: 25%;
`;



function Footer(props){
    return(
        <Box>
            <Wrapper>
            <LogoContainer>
                <StyledLogo>RailView</StyledLogo>
            </LogoContainer>
            <ContentContainer>
                <Content>
                    경북대학교 컴퓨터학부 RailView Team<br />
                    공개 SW 개발자 대회 RailView Project
                </Content>
            </ContentContainer>
            <LinkContainer>
                <a href="https://developers.google.com/maps?hl=ko">구글맵 포털</a><br/>
                <a href="https://www.data.go.kr/">공공데이터 포털</a>
            </LinkContainer>
            </Wrapper>
        </Box>
        
    )
}

export default Footer;