import {useState} from "react";
import {addUser} from "../../services/api.service";
import Users from "../users/Users";

export default function FormCreate() {
    const [formState, setFormState] = useState({name: '', username: ''})
    let onChangeInput = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    };


    let save = (e) => {
        e.preventDefault()
        addUser(formState)
    };
    return (
        <div>
            <form onSubmit={save}>
                <input type='text' name={'name'} value={formState.name} onChange={onChangeInput}/>
                <input type='text' name={'username'} value={formState.username} onChange={onChangeInput}/>
                <input type={'submit'}/>
            </form>
            <Users/>
        </div>
    );
}