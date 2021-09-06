import {GET_GENRES, GET_MOVIES, GET_PHOTOS} from "../actions";

const initialState = {page: null, movies: [], total_pages: null, total_results: null};

export const rootReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_MOVIES:
            const {page, results, total_pages, total_results} = payload;
            return {...state, page, movies: results, total_pages, total_results};

        case GET_GENRES:
            return {...state, movies: [...action.payload]};

        case GET_PHOTOS:
            return {...state, movies: [...action.payload]}

        default:
            return state
    }
}