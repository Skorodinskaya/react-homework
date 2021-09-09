import {Redirect, Route, Switch} from "react-router-dom";
import './App.css'
import MoviesPage from "./containers/moviesPage/MoviesPage";
import Header from "./components/header/Header";
import MovieInfo from "./components/movieInfo/MovieInfo";
import GenresPage from "./containers/genresPage/GenresPage";

export default function App() {
    return (
        <div className={'App'}>
            <Header/>
            <Redirect exact from='/' to='/movies'/>
            <Switch>
                <Route path='/movies/:id' component={MovieInfo}/>
                <Route path='/movies' component={MoviesPage}/>
                <Route path='/genres' component={GenresPage}/>
            </Switch>
        </div>
    );
}