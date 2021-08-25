import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
import FormCreate from "./components/forms/FormCreate";
import FormUpdate from "./components/forms/FormUpdate";

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
                <Route path={'/create-user'} component={FormCreate}/>
                <Route path={'/update-user'} component={FormUpdate}/>
            </div>
        </Router>
    );
}