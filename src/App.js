import './App.css'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {
    return (
        <Router>
            <div>
                <div className={'wrap'}><Link to={'/users-page'}>Page with users</Link>
                    <Link to={'/posts-page'}>Page with posts</Link>
                    <Link to={'/comments-page'}>Page with comments</Link>
                </div>

                <Route path={'/users-page'} component={Users}/>
                <Route path={'/posts-page'} component={Posts}/>
                <Route path={'/comments-page'} component={Comments}/>
            </div>
        </Router>


    );
}