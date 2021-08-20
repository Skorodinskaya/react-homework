import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/Users";

export default function App() {
    return (
        <Router>
            <div>
                <Link to = {'/home'}>Home</Link>
                <br/>
                <Link to={'/users'}>Users page</Link>
            </div>
            <Route path={'/home'}/>
            <Route path={'/users'} component={Users}/>
        </Router>
    );
}