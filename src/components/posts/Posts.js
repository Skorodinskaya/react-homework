import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/user.service";
import Post from "../post/Post";

export default function Posts({id}) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPostsOfUser(id).then(value => setPosts([...value]))
    }, [id])
  return (
    <div>
        <h3>User #{id} posts: </h3>
        {
            posts.map(value => <Post key = {value.id} item={value}/>)
        }

    </div>
  );
}