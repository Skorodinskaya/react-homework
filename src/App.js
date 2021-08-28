import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, getUsers} from "./services/api.service";
import {fetchUsers, pushUsers} from "./redux/actions";

export default function App() {
    let state = useSelector(state => {
        console.log(state)
       let {rootReducer} = state;
        return rootReducer;
    });
    let dispatch = useDispatch();
    let {users} = state;

    useEffect(() => {
        getUsers().then(value => {
            dispatch(fetchUsers(value));
        });
    }, []);
    let onSubmit = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let user = {name};
        addUser(user).then(value => {
            console.log('saved user -', value)
            dispatch(pushUsers(value))
        })
    }
    // let onClickClearState = () => {
    //   dispatch({type: 'CLEAR_STORE'})
    // };
    // let onClickSetState= () => {
    //   getUsers().then(value => dispatch({type:'GET_USERS', payload: value}))
    // };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name={'name'}/>
                <button>add user</button>
            </form>
            {/*<button onClick={onClickClearState}>Clear users</button>*/}
            {/*<hr/>*/}
            {/*<button onClick={onClickSetState}>Set users</button>*/}
            {/*<hr/>*/}

            {users.map((value) => <div key={value.id}>{value.name}</div>)
            }
        </div>
    );
}