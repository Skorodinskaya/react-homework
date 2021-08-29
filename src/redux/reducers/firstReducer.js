import {DELETE_USERS, GET_USERS} from "../actions";
import {ADD_USER} from "../actions/actionTypes";

export const firstReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: [...action.payload]
            }

        case ADD_USER:
            return {...state, users: [...state.users, action.payload]}

        case DELETE_USERS:
            return {...state, users: []}

        default:
            return state
    }
}