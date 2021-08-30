import {GET_USERS, SAVE_USER} from "../actions";

export const mainReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: [...action.payload]}

        case SAVE_USER: {
            return {...state, users: [...state.users, action.payload]}
        }

        default:
            return state
    }
}