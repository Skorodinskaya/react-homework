import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/home'}>Home</Link>
                <br/>
                <Link to={'/users'}>Users</Link>
                <br/>
                <Link to={'/create-user'}>Create user</Link>
                <br/>
                <Link to={'/update-user'}>Update user</Link>

                <Route path={'/users'} component={Users}/>
            </div>
        </Router>
    );
}