import {GET_GENRES, GET_GENRE_DETAILS, GET_MOVIE_DETAILS, GET_MOVIES, GET_PHOTOS} from "./actionTypes";

const setMovies = (value) => ({type: GET_MOVIES, payload: value});
const setGenres = (value) => ({type: GET_GENRES, payload: value});
const setMovieDetails = (value) => ({type: GET_MOVIE_DETAILS, payload: value});
const setGenreDetails = (value) => ({type:GET_GENRE_DETAILS, payload: value})
export {setMovies, setGenres, setGenreDetails, setMovieDetails}