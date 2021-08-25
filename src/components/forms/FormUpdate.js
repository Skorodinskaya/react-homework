import {useEffect, useState} from "react";
import {addUser, editUser, getUsers} from "../../services/api.service";

export default function FormUpdate() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [users])
    const [superUpdate, setSuperUpdate] = useState({name: '', username: ''})

    let updateProcess = (e) => {
        setSuperUpdate({...superUpdate, [e.target.name]: e.target.value})
    };

    let update = (e) => {
        e.preventDefault()
            superUpdate.id
        ? editUser(superUpdate)
        : addUser(superUpdate)
    }


    let onChangeSelect = (e) => {
        const selectedUser = users.find(user => user.id === +e.target.value)
        setSuperUpdate(selectedUser)
    };
    return (
        <div>
            <form onSubmit={update}>
                <input type='text' name={'name'} value={superUpdate.name} onChange={updateProcess}/>
                <input type='text' name={'username'} value={superUpdate.username} onChange={updateProcess}/>
                <input type={'submit'}/>
            </form>

            <form onChange={onChangeSelect}>
                <select>
                    {users.map(item => <option key={item.id} value={item.id} > {item.name} - {item.username}

                    </option> )}
                </select>
            </form>
        </div>
    );
}