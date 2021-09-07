import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getImages} from "../../services/mobile.service";
import {getPhotos} from "../../redux/actions";

export default function PosterPreview({value}) {
    // const {photos} = useSelector(({rootReducer}) => rootReducer);
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     getImages().then(value => {
    //         dispatch(getPhotos(value))
    //     })
    // }, []);
    //

    console.log(value)
    return (
    <div>
    <img src={`https://image.tmdb.org/t/p/w200${value.poster_path}`} alt= 'something'/>

        {/*{*/}
        {/*    photos.map(value =>  <div key={value.id}>*/}
        {/*        <img src={value.backdrops.file_path} alt={'some'}/>*/}
        {/*    </div>)*/}
        {/*}*/}

    </div>
  );
}