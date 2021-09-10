import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {discoverMovie} from "../../services/mobile.service";
import {setMovies} from "../../redux/actions";

export default function Pagination() {
    let dispatch = useDispatch()
    let [page, setPage] = useState (1);
    useEffect(() => {
        discoverMovie(page).then(value => dispatch(setMovies(value.results)))
    }, [page, dispatch])
    let previousPage = () => {
        if (page === 1) {
            return page
        } else if (page >= 1) {
            setPage (page -= 1)
        }
    }

    let nextPage = () => {
        if (page === 1000) {
            return page
        } else if (page <= 1000) {
            setPage(page += 1)
        }
    }
  return (
    <div>
    <button onClick={previousPage}>Previous</button>
    <button onClick={nextPage}>Next</button>

    </div>
  );
}