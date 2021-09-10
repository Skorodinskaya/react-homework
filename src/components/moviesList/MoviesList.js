import PosterPreview from "../posterPreview/PosterPreview";
import MovieListCard from "../moviesListCard/MoviesListCard";
import './moviesList.css'
import {useHistory} from "react-router";

export default function MoviesList({value}) {
    const history = useHistory();

    const handler = () => history.push('/movies/' + value.id)

    return (
        <div onClick={handler} className={'movieTitle'}>
            <div key={value.id}>
                <b>{value.original_title}</b>:
                <PosterPreview value={value}/>
                <MovieListCard value={value}/>


            </div>
        </div>
    );
}