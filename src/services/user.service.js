let url = 'https://jsonplaceholder.typicode.com/';

function getUsers () {
    return fetch(url + 'users')
        .then(value => value.json())
}

function getPostsOfUser(id) {
    return fetch(url + 'users/' + id + '/posts')
        .then(value => value.json())
}

function getCommentsOfPost (id) {
    return fetch(url + 'posts/' + id + '/comments')
        .then(value => value.json())
}
export {getUsers, getPostsOfUser, getCommentsOfPost}