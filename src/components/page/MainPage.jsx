import React from "react";
import styled from "styled-components";
import data from '../../data.json';
import Header from "../sturucture/Header";
import CityList from "../ui/CityList";
import Footer from "../sturucture/Footer";

const Wrapper = styled.div`
    width: 100%;
`;

const Styleddiv = styled.div`
    border-style: solid none none none;
    border-color: #FFACB7;
    height: 20px;
    margin-inline: auto;
`;

function MainPage(props) {
    const {} = props;

    return (
        <Wrapper>
            <Header />
            <Styleddiv />
            <CityList 
                cities={data}
                />
            <Footer />
        </Wrapper>
    );
}

export default MainPage;