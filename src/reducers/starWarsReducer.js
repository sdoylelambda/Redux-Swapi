// import /* we need our action types here*/ "../actions";
import { FETCH_CHARS_START, FETCH_CHARS_FAILURE, FETCH_CHARS_SUCCESS } from "../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  error: "",
  isLoading: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARS_START:
    return {
      ...state,
      error: "",
      isLoading: true
    }
    case FETCH_CHARS_FAILURE:
    return {
      ...state,
      error: action.payload,
      isLoading: false
    }
    case FETCH_CHARS_SUCCESS:
    return {
      ...state,
      error: "",
      isLoading: false,
      characters: action.payload
    }
   
    default:
      return state;
  }
};
