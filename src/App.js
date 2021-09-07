import {Redirect, Route, Switch} from "react-router-dom";

import MoviesPage from "./containers/moviesPage/MoviesPage";
import Header from "./components/header/Header";
import MovieInfo from "./components/movieInfo/MovieInfo";

export default function App() {
    return (
        <div>
            <Header/>

            <Redirect exact from='/' to='/movies'/>
            <Switch>
                <Route path='/movies/:id' component={MovieInfo}/>
                <Route path='/movies' component={MoviesPage}/>
            </Switch>
        </div>
    );
}