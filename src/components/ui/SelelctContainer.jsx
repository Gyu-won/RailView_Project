import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SelectList from "./SelectList";
import Button from "./Button";
import data from '../../data.json';

const Wrapper = styled.div`
    width: 100%;
    padding: 8px 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ContainerSelect = styled.div`
    width: 55%;
`;

const ContainerButton = styled.div`
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const weekend = [
    { id: 1, value: "월요일"},
    { id: 2, value: "화요일"},
    { id: 3, value: "수요일"},
    { id: 4, value: "목요일"},
    { id: 5, value: "금요일"},
    { id: 6, value: "토요일"},
    { id: 7, value: "일요일"},
]

const times = [
    {id: 1, value: "5시"},
    {id: 2, value: "6시"},
    {id: 3, value: "7시"},
]

function SelectContainer(props) {
    const { cityId } = useParams();

    const city = data.find((item) => {
        return item.id == cityId;
    });

    const [rail, setrail] = useState('');
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');

    const railChange = (event) => {
        setrail(event.target.value);
    }

    const dayChange = (event) => {
        setDay(event.target.value);
    }

    const timeChange = (event) => {
        setTime(event.target.value);
    }

    return(
        <Wrapper>
            <ContainerSelect>
                <SelectList
                    options={city.rail}
                    onChange={railChange}>
                </SelectList>

                <SelectList
                    options={weekend}
                    onChange={dayChange}>
                </SelectList>

                <SelectList
                    options={times}
                    onChange={timeChange}>
                </SelectList>

            </ContainerSelect>
            <ContainerButton>
                <Button 
                    title="Search"/>
            </ContainerButton>
        </Wrapper>
    );
}

//Button에 onClick 안줌. 새로 고치면서 지도 보여주면 되는데

export default SelectContainer;