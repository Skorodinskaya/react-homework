import {GET_GENRES, GET_MOVIES} from "./actionTypes";

const setMovies = (value) => ({type: GET_MOVIES, payload: value});
const setGenres = (value) => ({type: GET_GENRES, payload: value});

export {setMovies, setGenres}