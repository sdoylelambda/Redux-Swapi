import React from "react";
// import { connect } from "react-redux";
// import Loader from "react-loader-spinner";
import Character from "./Character";
// import CharacterListView from '../views/CharacterListView';

const CharacterList = props => {
  return (
    <ul>
      {props.characters && props.characters.map(character => {
        return (
        <Character key={character.name} character={character} />
        );
      })}
    </ul>
  );
};

// const mapStateToProps = state => ({
//   error: state.error,
//   isLoading: state.isLoading,
//   characters: state.characters
// })

// export default connect (
//   mapStateToProps,
// )(CharacterList);

export default CharacterList;
