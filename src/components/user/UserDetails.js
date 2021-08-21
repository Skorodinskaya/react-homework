import {useEffect, useState} from "react";
import {getUser} from "../../services/api.service";

export default function UserDetails(props) {
    let {match: {params: {id}}} = props;
    let [user, setUser] = useState({});

    useEffect(() => {
        getUser((id)).then(value => setUser({...value}))
    }, [id])
    return (
    <div>
        {JSON.stringify(user)}

    </div>
  );
}