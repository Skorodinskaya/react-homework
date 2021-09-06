import {useState} from "react";

export default function MovieListCard({value}) {
    const [info, setInfo] = useState([])

    const movieInfo = () => {
        setInfo(value.overview)
    }
    return (
        <div>
            <button onClick={movieInfo}>Details</button>
            <div>{info}</div>
        </div>
    );
}