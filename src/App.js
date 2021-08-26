import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Cars from "./components/cars/Cars";
import FormCreate from "./components/forms/FormCreate";

export default function App() {
    return (
        <Router>
            <div>
                <Link to = {'/home'}>Home</Link>
                <br/>
                <Link to = {'/cars'}>Cars</Link>
                <Link to = {'/create-car'}>Create new car</Link>

                <Route path={'/cars'} component={Cars}/>
                <Route path={'/create-car'} component={FormCreate}/>
            </div>
        </Router>

    );
}