import React from "react";
import styled from "styled-components";
import CityItem from "./CityItem";

const Wrapper = styled.div`
    border: 1px solid grey;
    width: 70%;
    height: 440px;
    margin-inline: auto;
    padding: 8px 16px;
    display: flex;
    flex-direction: row;
    aligh-itmes: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    
`;

function CityList(props) {
    const { cities, onClickCity } = props;

    return(
        <Wrapper>
            <Container>
                {cities.map((city, index) => {
                    return(
                        <CityItem
                        key={city.id}
                        city={city}
                        onClick={() => {
                            onClickCity(city);
                        }}
                />
            );
            })}
            </Container>
            
        </Wrapper>
    )
}

export default CityList;