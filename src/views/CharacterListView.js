import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getChars } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChars()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
      <p>loading, please wait....</p>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProp = state => ({
  characters: state.charsReducer.characters.results,
  error: state.charsReducer.error,
  isLoading: state.charsReducer.isLoading,
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProp, 
  { getChars }
)(CharacterListView);
