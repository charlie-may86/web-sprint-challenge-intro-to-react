// Write your Character component here
import React from "react";
import styled from "styled-components";
import Characters from "./Characters";

const StyledCharacterDiv = styled.div`
  /* border: solid red 1px; */
  margin: 5% 20%;
`;

export default function CharacterList({ characterData }) {
  return (
    <StyledCharacterDiv>
      <Characters characterData={characterData} />
    </StyledCharacterDiv>
  );
}
