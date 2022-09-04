import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import data from '../../data.json';
import Header from "../sturucture/Header";
import CityList from "../ui/CityList";
import Footer from "../sturucture/Footer";

const Wrapper = styled.div`
    width: 100%;
`;

function MainPage(props) {
    const {} = props;

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Header />
            <CityList 
                cities={data}
                onClickCity={(city) => {
                    navigate(`/view/${city.id}`);
                }}/>
            <Footer />
        </Wrapper>
    );
}

export default MainPage;