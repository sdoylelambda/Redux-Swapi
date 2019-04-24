import React from "react";
import { connect } from "react-redux";
// import Loader from "react-loader-spinner";
import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        console.log(characters);
        return (
        <Character key={character.name} character={character} />
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  error: state.error,
  isLoading: state.isLoading,
  characters: state.characters
})

export default connect (
  mapStateToProps,
  { }
)(CharacterList);
