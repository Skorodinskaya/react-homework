import {useLocation} from "react-router";

export default function MovieInfo() {
    const {id} = useLocation()
    console.log(id)
  return (
    <div>
    MovieInfo

    </div>
  );
}