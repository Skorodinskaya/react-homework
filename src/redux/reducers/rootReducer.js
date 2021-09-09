import {GET_GENRE_DETAILS, GET_GENRES, GET_MOVIE_DETAILS, GET_MOVIES} from "../actions";

const initialState = {genres_details: null, generes: null, page: null, movies: [], total_pages: null, total_results: null};

export const rootReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_MOVIES:
            const {page, results, total_pages, total_results} = payload;
            return {...state, page, movies: results, total_pages, total_results};

        case GET_GENRES:
            return {...state, generes: [...action.payload]};

        case GET_MOVIE_DETAILS: {
            return {...state, page: action.payload}
        }

        case GET_GENRE_DETAILS: {
            return {...state, genres_details: action.payload }
        }

        default:
            return state
    }
}