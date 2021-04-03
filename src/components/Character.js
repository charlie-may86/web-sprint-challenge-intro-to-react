// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacterDiv = styled.div`
    border: solid red 1px;
    margin: 5% 20%;

`;

const StyledCharacter = styled.div`
    border: solid black 1px;
    margin: 2% 2%;
    display: flex;
    justify-content: space-between; 
`;



export default function Character({ characterData }) {
  return (
    <StyledCharacterDiv>
      <StyledCharacter>
        <h2>Insert Name</h2>
        <h2>3/6/86</h2>
      </StyledCharacter>
    </StyledCharacterDiv>
  );
}
