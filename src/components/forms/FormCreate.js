import {useState} from "react";

export default function () {
    const [formState, setFormState] = useState({model: '', price: '', year: ''})

    return (
        <div>
            <form>
                <input type='text' name='model' value={formState.model} onChange={onChangeStuff}/>
                <input type='number' name='price' value={formState.price}/>
                <input type='number' name='year' value={formState.year}/>
                <input type={'submit'}/>
            </form>

        </div>
    );
}