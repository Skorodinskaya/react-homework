import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {discoverMovie} from "../../services/mobile.service";
import {setMovies} from "../../redux/actions";
import MoviesList from "../../components/moviesList/MoviesList";

export default function MoviesPage() {
    const {movies} = useSelector(({rootReducer}) => rootReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        discoverMovie().then(value => {
            dispatch(setMovies(value))
        })
    }, []);

    return (
        <div>
            {
                movies.map(value => <MoviesList value={value}/>)
            }
        </div>
    );
}