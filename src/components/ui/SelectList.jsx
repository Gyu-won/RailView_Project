import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 5px 10px;
    padding: 8px 8px
    display: inline;
    float: left;
`;
const StyledSelectList = styled.select`
    padding: 8px 8px;
`;

function SelectList(props) {
    const { options, onChange } = props;

    return(
        <Container>
            <StyledSelectList onChange={onChange}>
                {options.map((option, index) => {
                    return(
                        <option
                            key={option.id}
                            value={option.value}
                        >{option.value}
                        </option>
                    );
                })}
            </StyledSelectList>
        </Container>
    )
}

export default SelectList;