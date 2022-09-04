import React from "react";
import styled from "styled-components";

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
            <LinkContainer>카카오맵, 데이터 포털 링크 넣을 예정</LinkContainer>
        </Wrapper>
    )
}

export default Footer;