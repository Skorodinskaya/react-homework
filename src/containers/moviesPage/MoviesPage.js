import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {discoverMovie, getGeneres} from "../../services/mobile.service";
import {setMovies} from "../../redux/actions";
import MoviesList from "../../components/moviesList/MoviesList";
import './moviesPage.css';
import Pagination from "../../components/pagination/Pagination";

export default function MoviesPage({value}) {
    const {movies} = useSelector(({rootReducer}) => rootReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        discoverMovie().then(value => {
            dispatch(setMovies(value))
        })
        getGeneres().then(({genres}) => {
            console.log(genres)
        })
    }, []);

    return (
        <div>
            <div className={'pagination'}><Pagination value={value}/></div>
            <div className={'wrapper'}>
                {
                    movies.map(value => <MoviesList value={value}/>)
                }
            </div>
            <br/>
            <div className={'pagination'}><Pagination value={value}/></div>
        </div>
    );
}