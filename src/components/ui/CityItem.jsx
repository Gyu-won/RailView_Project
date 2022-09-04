import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
`;

const StyledCity = styled.div`
    border: 1px solid gold;
    margin: 8px;
    width: 30%;
    height: 200px;
    text-align: center;
    float: left;
`;

function CityItem(props) {
    const { city, onClick } = props;

    return(
        <Wrapper>
            <StyledCity onClick={onClick}>{city.name}</StyledCity>
        </Wrapper>    
    )
}

export default CityItem;