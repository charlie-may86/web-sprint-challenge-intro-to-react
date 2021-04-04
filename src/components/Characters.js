import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import img from "../images/space.jpg";

const StyledCharacter = styled.div`
  border: inset grey 5px;
  margin: 2% 2%;
  display: flex;
  justify-content: space-between;

  .character {
    color: ${(pr) => pr.theme.primaryColor};
    margin-left: 2%;
    font-family: ${(pr) => pr.theme.fontFamily};
    /* font-family: 'Orbitron', sans-serif; */
  }
  .birth {
    color: ${(pr) => pr.theme.primaryColor};
    margin-right: 2%;
    font-family: ${(pr)=>pr.theme.fontFamily}
  }
`;

export default function Characters({ characterData }) {
  const example = characterData[0];
  console.log(example);
  return (
    <div>
      {characterData.map((obj) => {
        return (
          <StyledCharacter key={uuidv4()}>
            <h2 className="character">{obj.name}</h2>
            <h2 className="birth">Birth Year: {obj.birth_year}</h2>
          </StyledCharacter>
        );
      })}
    </div>
  );
}

//photo credit Photo by Ivana Cajina on Unsplash
// Photo by NASA on Unsplash
