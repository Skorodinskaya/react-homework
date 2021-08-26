import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Cars from "./components/cars/Cars";
import FormCreate from "./components/forms/FormCreate";
import FormUpdate from "./components/forms/FormUpdate";

export default function App() {
    return (
        <Router>
            <div>
                <Link to = {'/home'}>Home</Link>
                <br/>
                <Link to = {'/cars'}>Cars</Link>
                <br/>
                <Link to = {'/create-car'}>Create new car</Link>
                <br/>
                <Link to = {'/edit-car'}>Edit car</Link>

                <Route path={'/cars'} component={Cars}/>
                <Route path={'/create-car'} component={FormCreate}/>
                <Route path={'/edit-car'} component={FormUpdate}/>
            </div>
        </Router>

    );
}