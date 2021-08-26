import {useState} from "react";
import {addCar, updateCar} from "../../services/api.service";
import Cars from "../cars/Cars";

export default function FormUpdate() {
    const [updateState, setUpdateState] = useState({model: '', price: '', year: ''})
    const updateChange = (e) => {
        setUpdateState({...updateState, [e.target.name]: e.target.value})
    }
    const edit = (e) => {
        e.preventDefault()
        updateState.id
            ? updateCar(updateState)
            : addCar(updateState)
    }

    return (
        <div>
            <form onSubmit={edit}>
                <input type={'text'} name={'model'} value={updateState.model} onChange={updateChange}/>
                <input type={'number'} name={'price'} value={updateState.price} onChange={updateChange}/>
                <input type={'number'} name={'year'} value={updateState.year} onChange={updateState}/>
                <input type={'submit'}/>
            </form>
            <Cars/>
        </div>
    );
}