import {ADD_USER, DELETE_USERS, GET_USERS} from "./actionTypes";

const fetchUsers = (value) => {
    return {type: GET_USERS, payload: value}
}

const newUser = (value) => {
    return {type: ADD_USER, payload: value}
}

const deleteUsers = (value) => {
    return {type: DELETE_USERS, payload: value}
}

export {fetchUsers, newUser, deleteUsers}