import axios from 'axios';

const url = 'https://api.themoviedb.org/4/discover/movie'
const api = axios.create({
    baseURL: 'url',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTJmZDVkNzNkNmFlNDRmNzg1YWJmMThiYTU0ZDFlYSIsInN1YiI6IjYxMmZjMjU5MzU3YzAwMDA2NWE0MDdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ja8OR7ZZzHTyjYZ7GJuMoiomrB_pYC6p87HDuZZqytU'
    }
})

const discoverMovie = async () => {
    const {data} = await api.get(url);
    return data;
}

const getImages = (photo) => {
    return fetch(url + '/{movie_id}' + '/images', {
        method: 'GET',
            body: JSON.stringify(photo),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then (value => value.json())
}
export {discoverMovie, getImages}
