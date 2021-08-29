import {useEffect, useState} from "react";
import {deleteCar, getCars} from "../../services/api.service";
import CarForEdit from "../car/CarForEdit";

export default function CarsForEdit({editButton}) {
    const [carsSecond, setCarsSecond] = useState([])
    useEffect(()=> {
        getCars().then(value => setCarsSecond([...value]))
    }, [])

    const deleteButton = (id) => {
      deleteCar(id)
    }
    return (
        <div>
            <div>{carsSecond.map(value => <CarForEdit item={value} key={value.id} editButton={editButton} deleteButton={deleteButton}/>)}</div>

        </div>
    );
}