import {useEffect, useState} from "react";

//[Bài tập] Xây dựng Component Timer
export function Timer(){
    let [timer,setTimer]=useState(10);
    useEffect(() => {
        let timerId=setTimeout(()=>{
            setTimer(timer-1)
        },1000)
        if(timer===0){
            alert(`Time's up`)
        }
        if(timer<=0){
           return clearTimeout(timerId)
        }
    }, [timer]);
    return(
        <h1>Count down from {timer}</h1>
    )
}




//Xây dựng component Car selection

// export function Cars(){
//     let carList = ['Toyota', 'Honda', 'Ford', 'BMW'];
//     let colorList = ['Red', 'Blue', 'Green', 'Black'];
//     let [selectedCar,setSelectedCar]=useState({
//         car:carList[0],
//         color:colorList[0],
//     })
//     let handleCarChange = (e)=>{
//         console.log(selectedCar.car)
//         setSelectedCar({...selectedCar,car: e.target.value})
//     }
//     let handleColorChange = (e)=>{
//         setSelectedCar({...selectedCar,color: e.target.value})
//     }
// return(
//     <>
//         <h1>Select your car</h1>
//         <label>Select a car</label>
//         <select onChange={handleCarChange}>
//             {carList.map(car=>(
//                 <option>{car}</option>
//             ))}
//         </select><br/>
//         <label>Select a color</label>
//         <select onChange={handleColorChange}>
//             {colorList.map(color=>(
//                 <option>{color}</option>
//             ))}
//         </select>
//         <br/>
//         <h5>You selected a {selectedCar.color} - {selectedCar.car}</h5>
//
//     </>
//
// )
// }


// export function Example(){
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         document.title=`You clicked ${count} times`;
//     });
//     return(
//         <div>
//             <p>Ban da click {count} lan</p>
//             <button onClick={()=>setCount(count+1)}>Click</button>
//         </div>
//     )
// }
