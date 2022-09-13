import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../sturucture/Header";
import Footer from "../sturucture/Footer";
import SelectContainer from "../ui/SelelctContainer";
import MapContainer from "../ui/MapContainer";

const Wrapper = styled.div`
    width: 100%;
`;

const Styleddiv = styled.div`
    border-style: solid none none none;
    border-color: #FFACB7;
    height: 20px;
    margin-inline: auto;
`;


function MapViewPage(props) {  
    return(
        <Wrapper>
            <Header />     
            <Styleddiv />         
            <SelectContainer />
            <MapContainer />
            <Footer />
        </Wrapper>
    );
}

export default MapViewPage;