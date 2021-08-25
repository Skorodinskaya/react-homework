const url = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => {
    return fetch(url)
        .then(value => value.json())
}

const getPosts = (id) => {
    return fetch((url + '/' + id + '/posts'))
        .then(value => value.json())
}

const addUser = ()=> {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

const editUser = (user) => {
    fetch(url + '/' + user.id, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export {getUsers, getPosts, addUser, editUser}
