import React from "react";
import styled from "styled-components";
import Map from "./Map";

const Wrapper = styled.div`
    border: 1px solid grey;
    width: 70%;
    height: 400px;
    margin-inline: auto;
    padding: 8px 16px;
    display: flex;
    flex-direction: row;
    aligh-itmes: flex-start;
    justify-content: center;
`;

function MapContainer(props){
    return(
        <Wrapper>
            <Map />
        </Wrapper>
    );
}

export default MapContainer;