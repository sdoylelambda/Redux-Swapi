import axios from 'axios'

export const FETCH_CHARS_START= "FETCH_CHARS_START";
export const FETCH_CHARS_SUCCESS= "FETCH_CHARS_SUCCESS";
export const FETCH_CHARS_FAILURE= "FETCH_CHARS_FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getChars = () => dispatch => {
    dispatch({ type: FETCH_CHARS_START });
    axios
        .get("https://swapi.co/api/people/")
        console.log("get")
        .then(res => dispatch({type: FETCH_CHARS_SUCCESS, payload: res.data}))
        console.log("then")
        .catch(err => dispatch({type: FETCH_CHARS_FAILURE, payload: err}))
        console.log("error")
    };