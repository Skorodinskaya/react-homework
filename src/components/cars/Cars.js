import {useEffect, useState} from "react";
import Car from "./Car";
import {getCars} from "../../services/user.api.service";

export default function Cars() {
    let [car, setCar] = useState([]);
    useEffect(() => {
        getCars().then(value => setCar([...value]))
    },[car])
  return (
    <div>
        {car.map(value => <Car key={value.id} item={value}/>)}    {/*в key клади id*/}

    </div>
  );
}
