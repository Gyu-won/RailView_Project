import React from "react";
import styled from "styled-components";
import seoul from "../image/seoul.jpg";
import daegu from "../image/daegu.jpg";
import busan from "../image/busan.jpg";
import daejeon from "../image/daejeon.jpg";
import incheon from "../image/incheon.jpg";
import gwangju from "../image/gwangju.jpg";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
    padding: 16px;
    
`;

const Wrapper = styled.div`
    width: 70%;
    margin-inline: auto;
    display: flex;
    flex-direction: row;
    aligh-itmes: center;
    justify-content: center;
    
`;

const Container = styled.div`
   
`;

const StyledCity = styled.div`
    border: 1px solid #FF7A85;
    background-color: white;
    margin: 8px;
    width: 350px;
    height: 300px;
    margine-inline: auto;
    text-align: center;
    line-height: 370px;
    verticle-align: middle;
    float: left;
    border-radius: 20px;
`;

function CityList(props) {

    const navigate = useNavigate();

    function onClickSeoul(){
        navigate("/view/1");
    }

    function onClickDaegu(){
        navigate("/view/2");
    }

    function onClickBusan(){
        navigate("/view/3");
    }

    function onClickDaejeon(){
        navigate("/view/4");
    }

    function onClickIncheon(){
        navigate("/view/5");
    }

    function onClickGwangju(){
        navigate("/view/6");
    }

    return(
        <Box>
            <Wrapper>
            <Container>
                <StyledCity onClick={onClickSeoul}>
                    <img src={seoul} alt="Seoul" width="85%" />
                </StyledCity>
                <StyledCity onClick={onClickDaegu}>
                    <img src={daegu} alt="Daegu" width="85%" verticle-align="middle"/>
                </StyledCity>
                <StyledCity onClick={onClickBusan}>
                    <img src={busan} alt="Busan" width="90%" height="280px" verticle-align="middle"/>
                </StyledCity>
                <StyledCity onClick={onClickDaejeon}>
                    <img src={daejeon} alt="Daejeon" width="90%" height="280px"/>
                </StyledCity>
                <StyledCity onClick={onClickIncheon}>
                    <img src={incheon} alt="Incheon" width="85%" verticle-align="middle" />
                </StyledCity>
                <StyledCity onClick={onClickGwangju}>
                    <img src={gwangju} alt="Gwangju" width="85%" height="260px" verticle-align="middle"/>
                </StyledCity>
            </Container>
        </Wrapper>
        </Box>
        
    )
}

export default CityList;