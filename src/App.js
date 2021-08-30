import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers, saveUser} from "./services/api.service";
import {fetchUsers, newUser} from "./actions";

export default function App() {
    const {users} = useSelector(({mainReducer}) => mainReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        // getUsers().then(value => dispatch(fetchUsers(value)))
        dispatch(getUsers())
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const user = {name}
        // saveUser(user).then(value => {
        //     dispatch(newUser(value))
        // })
        dispatch(saveUser(user))
    }
    return (
        <div>

            <form onSubmit={onSubmit}>
                <input type={'name'} name={'name'}/>
                <button>Add user</button>
            </form>
            {users.map(value => <div key={value.id}>{value.name}</div>)}
        </div>
    );
}