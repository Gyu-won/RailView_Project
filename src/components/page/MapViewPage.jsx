import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../sturucture/Header";
import Footer from "../sturucture/Footer";
import SelectContainer from "../ui/SelelctContainer";
import Map from "../ui/Map";

const Wrapper = styled.div`
    width: 100%;
`;

function MapViewPage(props) {
    

    return(
        <Wrapper>
            <Header />              
            <SelectContainer />
            <Map />
            <Footer />
        </Wrapper>
    );
}

export default MapViewPage;