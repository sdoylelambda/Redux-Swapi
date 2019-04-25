import React from "react";

const Character = props => {
  return (
  <li>
    <div className="card">
  <h2>{props.character.name}</h2>
  <h4>Is {props.character.height} cm's tall.</h4>
  <h4>Has a mass of {props.character.mass} kg.</h4>
  <h4>Was born in the year {props.character.birth_year}.</h4>
  </div>
  </li>
  );
};

export default Character;
