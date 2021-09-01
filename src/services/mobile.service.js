import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/,',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTJmZDVkNzNkNmFlNDRmNzg1YWJmMThiYTU0ZDFlYSIsInN1YiI6IjYxMmZjMjU5MzU3YzAwMDA2NWE0MDdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ja8OR7ZZzHTyjYZ7GJuMoiomrB_pYC6p87HDuZZqytU'
    }
})

const discoverMovie = async () => await api.get('/discover/movie');

export {}
