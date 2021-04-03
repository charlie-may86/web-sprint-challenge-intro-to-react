import React, { useState, useEffect }from "react";
import "./App.css";
import axios from 'axios';
import Character from "./components/Character";

const URL = 'https://swapi.dev/api/people/'


const App = () => {
  //state management here - going to set character data from after I fetch the info from the api and then pass the data through props to the character component
  const [characterData, setCharacterData] = useState([])

  useEffect(() => {
    const fetchCharacter = () =>
      axios
        .get(`${URL}`)
        .then((res) => {
          setCharacterData(res.data);
        })
        .catch((err) => {
          debugger;
        });
    fetchCharacter();
  },[]);

  characterData.forEach(obj => {
    console.log(obj.name)
  })

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characterData={characterData}/>
    </div>
  );
};

export default App;
