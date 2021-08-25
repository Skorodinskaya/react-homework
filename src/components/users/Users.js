import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service";
import User from "../user/User";

export default function Users() {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    const userButton = () => {

    }
    return (
        <div>
            {users.map(value => <User item={value} key={value.id}/>)}

        </div>
    );
}