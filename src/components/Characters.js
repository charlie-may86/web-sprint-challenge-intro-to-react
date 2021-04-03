import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  border: solid black 1px;
  margin: 2% 2%;
  display: flex;
  justify-content: space-between;
`;

export default function Characters({ characterData }) {
  const example = characterData[0];
  console.log(example)
  return (
      <div>
          {characterData.map((obj) => {
              return (
                  <StyledCharacter >
                      <h2>{obj.name}</h2>
                      <h2>{obj.birth_year}</h2>
                  </StyledCharacter>
              )
          })}
      </div>

  );
}
