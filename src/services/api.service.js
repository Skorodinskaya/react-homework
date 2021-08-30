import {fetchUsers, newUser} from "../actions";

const url = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => async (dispatch) => {
const response = await (await fetch(url)).json();
dispatch(fetchUsers(response))
}

const saveUser = (user) => async (dispatch) => {
  const response = await fetch (url, {
    method: 'POST',
    body: JSON.stringify({name: user.name}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  const savedUser = await response.json();
  dispatch(newUser(savedUser))
}
export {getUsers, saveUser}