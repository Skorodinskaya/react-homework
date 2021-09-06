import PosterPreview from "../posterPreview/PosterPreview";
import MovieInfo from "../movieInfo/MovieInfo";
import MovieListCard from "../moviesListCard/MoviesListCard";
import GenreBadge from "../genreBadge/GenreBadge";

export default function MoviesList({value}) {
  return (
    <div>
        <div key={value.id}>
            <b>{value.original_title}</b>:

            <PosterPreview value={value}/>

            <MovieListCard value={value}/>

            <GenreBadge value={value}/>

        </div>
    </div>
  );
}