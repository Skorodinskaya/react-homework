import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, getUsers} from "./services/api.service";

export default function App() {
    let state = useSelector(state => state);
    let dispatch = useDispatch()
    let {users} = state;
    useEffect(() => {
        getUsers().then(value => {
            let action = {type: 'GET_USERS', payload: value}
            dispatch(action)
        });
    }, []);
    let onSubmit = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let user = {name};
        addUser(user).then(value =>
            console.log(value))
        dispatch({type: 'PUSH_USER', payload: value})
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
                <input type={'name'} name={'name'}/>
                <input type={'submit'}/>
            </form>
            <hr/>
            {/*<button onClick={onClickClearState}>Clear users</button>*/}
            {/*<hr/>*/}
            {/*<button onClick={onClickSetState}>Set users</button>*/}
            {/*<hr/>*/}
            {users.map((value) => <div>{value.name}</div>)}
        </div>
    );
}