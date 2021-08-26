import {useState} from "react";
import {addCar} from "../../services/api.service";
import Cars from "../cars/Cars";

export default function FormCreate() {
    const [formState, setFormState] = useState({model: '', price: '', year: ''})
    const carToAdd = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    const add = (e) => {
        e.preventDefault()
        addCar(formState)
    }
    return (
        <div>
            <form onSubmit={add}>
                <input type={'text'} name={'model'} value={formState.model} onChange={carToAdd} maxLength={20}/>
                <input type={'number'} name={'price'} value={formState.price} onChange={carToAdd} min = {1}/>
                <input type={'number'} name={'year'} value={formState.year} onChange={carToAdd} min={1990} max={2021}/>
                <input type={'submit'}/>
            </form>
            <Cars/>
        </div>
    );
}