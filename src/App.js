// є об'єкт, значення якого 0
// Створити 2 кнопки.
// Перша збільшує   значення на 10
// Друга зменшує на 2.
//
// Зміну стану та виведення реалізувати через reducer

import {useReducer} from "react";
import reducer from "./reducers/reducer";

export default function App() {
    let [{a}, dispatch] = useReducer(reducer, {a:0})
    return (
        <div>
            <h1>Object 1 - {a} </h1>
            <button onClick={() => dispatch({obj: 10, act: '+'})}>Increase 10</button>
            <button onClick={() => dispatch({obj: 1, act: '+'})}>Increase</button>
            <button onClick={() => dispatch({obj: 1, act: '-'})}>Decrease</button>
            <button onClick={() => dispatch({obj: 10, act: '-'})}>Decrease 10</button>
        </div>
    );
}
