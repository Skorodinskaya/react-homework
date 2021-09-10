import PosterPreview from "../posterPreview/PosterPreview";
import MovieListCard from "../moviesListCard/MoviesListCard";
import './moviesList.css'
import {useHistory} from "react-router";
import Pagination from "../pagination/Pagination";

export default function MoviesList({value}) {
    const history = useHistory();

    const handler = () => history.push('/movies/' + value.id)

    return (
        <div onClick={handler} className={'movieTitle'}>
            <div key={value.id}>
                <b>{value.original_title}</b>:

                <PosterPreview value={value}/>
                <Pagination/>
                <MovieListCard value={value}/>


            </div>
        </div>
    );
}