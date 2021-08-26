import {useEffect, useState} from "react";
import {getCars} from "../../services/api.service";
import Car from "../car/Car";

export default function Cars() {
    const [cars, setCars] = useState([])
    const [car, setCar] = useState (null)
    const carButton = (e) => {
        setCar(e)
    }
    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])
    return (
        <div>
            <div> {cars.map(value => <Car item={value} key={value.id} carButton={carButton}/>)}</div>

            {car && <div>{JSON.stringify(car)}</div>}
        </div>
    );
}