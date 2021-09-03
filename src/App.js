import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setMovies} from "./redux/actions";
import {discoverMovie} from "./services/mobile.service";

export default function App() {
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
                movies.map(value => <div key={value.id}>
                    <b>{value.title}</b>:
                    {value.overview}
                </div>)
            }
        </div>
    );
}