import {useState} from "react";
import {saveCar} from "../../services/user.api.service";
import Cars from "../cars/Cars";

export default function Form() {
    let [formState, setFormState] = useState({model: '', price: '', year: ''});

    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
    };


    let save = (e) => {
        e.preventDefault();
        console.log(formState);
        saveCar(formState);
    }

    return (
        <div>
            <form onSubmit={save}>
                <input type="text" name={'model'} value={formState.model} maxLength={20} onChange={onFormInputChange}/>
                <input type="text" name={'price'} value={formState.price} min = {0} onChange={onFormInputChange}/>
                <input type="text" name={'year'} value={formState.year} min ={1990} max ={2021} onChange={onFormInputChange}/>
                <input type="submit"/>
            </form>

            <Cars/>

        < /div>
    );
}