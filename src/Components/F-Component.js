import React, {useEffect, useState} from "react";
import axios from "axios";

export function FComponent() {
    let [value1, setValue1] = useState(0);
    let [value2, setValue2] = useState(0);
    let [result, setResult] = useState(0);
    useEffect(() => {
        axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(x => {
            console.log(x)
        })
    }, []);
    let getValue1 = (e) => {
        setValue1(+e.target.value)
    }
    let getValue2 = (e) => {
        setValue2(+e.target.value)
    }
    let plus = (e) => {
        setResult(value1 + value2)
    }
    let mimus = (e) => {
        setResult(value1 - value2)
    }
    let multiply = (e) => {
        setResult(value1 * value2)
    }
    let devide = (e) => {
        setResult(value1 / value2)
    }


    return (
        <div className='container_calculator'>
            <div className='main_cal'>
                <input type='number' onChange={getValue1}/><br/>
                <input type='number' onChange={getValue2}/><br/>
                <h5>Result:{result}</h5>
                <button className='btn_calculator' onClick={plus}>+</button>
                <button className='btn_calculator' onClick={mimus}>-</button>
                <button className='btn_calculator' onClick={multiply}>X</button>
                <button className='btn_calculator' onClick={devide}>/</button>
            </div>

        </div>
    )
}

// Lam lai 4 tinh + - * /
