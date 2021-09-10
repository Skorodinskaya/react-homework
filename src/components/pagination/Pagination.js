import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {discoverMovie} from "../../services/mobile.service";
import {setMovies} from "../../redux/actions";

export default function Pagination({value}) {
    let [page, setPage] = useState (1);
    let previousPage = () => {
        if (page === 1) {
            return page
        } else if (page >= 1) {
            setPage (page -= 1)
            setPage(value)
        }
    }

    let nextPage = () => {
        if (page === 1000) {
            return page
        } else if (page <= 1000) {
            setPage(page += 1)
            setPage(value)
        }
    }
  return (
    <div className={'bothPages'}>
        <div className={'previousPage'}>
            <button onClick={previousPage}>Previous</button>
        </div>
        <div className={'nextPage'}>
            <button onClick={nextPage}>Next</button>
        </div>

    </div>
  );
}