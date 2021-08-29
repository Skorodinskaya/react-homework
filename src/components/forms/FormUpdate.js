import {useState} from "react";
import {updateCar} from "../../services/api.service";
import CarsForEdit from "../cars/CarsForEdit";

export default function FormUpdate() {
    const [editCar, setEditCar] = useState({model: '', price: '', year: ''})

    let onChangeEditCar = (e) => {
        setEditCar({...editCar, [e.target.name]: e.target.value});
    };

    const edit = (e) => {
        e.preventDefault();
        editCar.id
            ? updateCar(editCar)
            : updateCar(editCar)
    }
    return (
        <div>
            <form onSubmit={edit}>
                <input type={'text'} name={'model'} value={editCar.model} onChange={onChangeEditCar}/>
                <input type={'number'} name={'price'} value={editCar.price} onChange={onChangeEditCar}/>
                <input type={'number'} name={'year'} value={editCar.year} onChange={onChangeEditCar}/>
                <input type={'submit'}/>
            </form>
            <CarsForEdit editButton={setEditCar}/>
        </div>
    );
}