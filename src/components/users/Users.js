import {useEffect, useState} from "react";
import User from "../user/User";
import {Route} from "react-router-dom";
import UserDetails from "../user/UserDetails";
import {getUsers} from "../../services/api.service";

export default function Users(props) {
    const {match: {url}, history} = props;
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])
    return (
        <div>
            {users.map(value => <User history={history} item={value} key={value.id}/>)}
            <Route path={`${url}/:id`} render={(props) => {
                return <UserDetails {...props}/>
            }}/>
        </div>
    );
}