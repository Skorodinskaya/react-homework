import {useEffect, useState} from "react";
import {getPostsOfUser, getUsers} from "../../services/user.service";
import User from "../user/User";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [post, setPosts] = useState(null)
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    })

    const userPostBTN = (postbtn) => {
        getPostsOfUser(postbtn.id).then(value => setPosts({...value}))
    }
    return (
        <div>
            <div>{users.map(value =>
                <User
                    item={value}
                    key={value.id}
                    userPostBTN={userPostBTN}
                />)}</div>

            <div>{JSON.stringify(post)}</div>

        </div>
    );
}