import {GET_USERS, SAVE_USER} from "./actionsTypes";

const fetchUsers = (value) => {
   return {type: GET_USERS, payload: value}
}

const newUser = (value) => {
    return {type: SAVE_USER, payload: value}
}

export {fetchUsers, newUser}