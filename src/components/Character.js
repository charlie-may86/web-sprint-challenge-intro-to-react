// Write your Character component here
import React from "react";
import styled from "styled-components";
import Character from "./Characters";

const StyledCharacterDiv = styled.div`
  border: solid red 1px;
  margin: 5% 20%;
`;

export default function CharacterList({ characterData }) {
  return (
    <StyledCharacterDiv>
      <Character characterData={characterData} />
    </StyledCharacterDiv>
  );
}
