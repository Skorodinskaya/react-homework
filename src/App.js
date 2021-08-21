import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import PostsDetails from "./components/post/PostsDetails";

export default function App() {
    return (
        <Router>
            <div>
                <Link to = {'/home'}>Home</Link>
                <br/>
                <Link to={'/users'}>Users page</Link>
                <br/>
                <Link to = {'/posts'}>Posts page</Link>
            </div>
            <Route path={'/home'}/>
            <Route path={'/users'} component={Users}/>
            <Route exact path={'/posts'} component={Posts}/>
            <Route path={'/posts/:id'} render={(props) => {
                return <PostsDetails {...props} />

            }}/>
        </Router>
    );
}