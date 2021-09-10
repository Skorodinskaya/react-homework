import axios from 'axios';

const url = 'https://api.themoviedb.org/3/discover/movie?page=4'
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
const getGeneres = async () => {
    const {data} = await api.get("https://api.themoviedb.org/3/genre/movie/list");
    return data;
}

const getDetails = (filmId) => {
    return fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=4bd79d5e6ae0aa054269482c1b7710ec&language=en-US`)
        .then(value => value.json())
}

export {discoverMovie, getGeneres, getDetails}
