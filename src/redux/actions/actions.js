import {GET_GENRES, GET_MOVIES, GET_PHOTOS} from "./actionTypes";

const setMovies = (value) => ({type: GET_MOVIES, payload: value});
const setGenres = (value) => ({type: GET_GENRES, payload: value});
const getPhotos = (value) => ({type: GET_PHOTOS, payload: value})

export {setMovies, setGenres, getPhotos}