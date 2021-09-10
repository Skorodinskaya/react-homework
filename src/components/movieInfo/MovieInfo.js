import {useLocation} from "react-router";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {setMovieDetails} from "../../redux/actions";
import {getDetails} from "../../services/mobile.service";

export default function MovieInfo() {
    let filmId = history.location.state_1
    const {id} = useLocation()
    console.log(id)
    let details = useSelector(state => state.details)
    let dispatch = useDispatch ()
    useEffect(() => {
        getDetails(filmId).then(value => dispatch(setMovieDetails(value)))
    }, [filmId, dispatch])
  return (
    <div>
    MovieInfo

    </div>
  );
}