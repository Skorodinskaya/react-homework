import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, getUsers } from "./services/api.service";
import { deleteUsers, fetchUsers, newUser } from "./redux/actions";

export default function App() {
    const { users } = useSelector(({firstReducer}) => firstReducer)

    const dispatch = useDispatch();

    useEffect(()=> {
        getUsers().then(value => dispatch(fetchUsers(value)))
    }, [])
    const onSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const user = {name};
        addUser(user).then(value => {dispatch(newUser(value))})
    };
    const onClickDeleteUsers = (value) => {
        return (dispatch(deleteUsers(value)))
    };

    const onClickGetUsers = () => {
        getUsers().then(value => {dispatch(fetchUsers(value))})
    };
    return (
    <div>
        <form onSubmit={onSubmit}>
            <input type={'text'} name = 'name'/>
            <button>Add user</button>
        </form>

        {users.map((value) => <div key = {value.id}>{value.name}</div>)}

        <button onClick={onClickDeleteUsers}>Delete users</button>
        <button onClick={onClickGetUsers}>Get users</button>

    </div>
  );
}
