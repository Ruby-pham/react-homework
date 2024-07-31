import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from './Components/Login-Logout'
import DecreaseIncrease from "./Components/Decrease-Increase";
import Calculator from './Components/Calculator'
import ChangeColor from './Components/Change-Color'
import Hello from './Components/Un-Mount'
import Expands from "./Components/Expands";
import ToDoList from "./Components/To-Do-List";
import Students from "./Components/Student-List";
import Product from "./Components/Product";
import Axios from'./Components/Axios'
import {FComponent} from'./Components/F-Component'
import {Example} from "./Components/F-useState-useEffect-hookCustom";
import {Cars} from "./Components/F-useState-useEffect-hookCustom";
import {Timer} from "./Components/F-useState-useEffect-hookCustom";
import {FProduct} from'./Components/F-Product'
import {RestCountries} from'./Components/F-Axios'
import FormDemo from'./Components/F-Form'
import {StudentGetApi} from "./Components-Git/Student-Get-Api";


function App() {
    return (
        <div className="App">
            {/*<Home/>*/}
            {/*<DecreaseIncrease/>*/}
            {/*<Calculator/>*/}
            {/*<ChangeColor/>*/}
            {/*<Expands/>*/}
            {/*<ToDoList/>*/}
            {/*<Students/>*/}
            {/*<Product/>*/}
            {/*<Axios/>*/}
            {/*<FComponent/>*/}
            {/*<Example/>*/}
            {/*<FProduct/>*/}
            {/*<RestCountries/>*/}
            {/*<Cars/>*/}
            {/*<Timer/>*/}
            {/*<FormDemo/>*/}
            <StudentGetApi/>

        </div>
    );
}

export default App;

//log-in, log-out

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoggedIn: false,
//         }
//     }
//
//     handleLogIn = () => {
//         this.setState({isLoggedIn: true})
//     }
//     handleLogOut = () => {
//         this.setState({isLoggedIn: false})
//     }
//     render() {
//         let {isLoggedIn}=this.state
//         if(isLoggedIn){
//             return(
//                 <Home onLogOut={this.handleLogOut}/>
//             )
//         }
//         else{
//             return(
//                 <div>
//                     <h1>Please Log in</h1>
//                     <button onClick={this.handleLogIn}>Log in</button>
//                 </div>
//             )
//         }
//
//     }
//
// }
// export default App;


//alert report when delete component

// class App extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             display:true
//         }
//     }
//     delete=()=>{
//         this.setState({display:false})
//     }
//     render() {
//         let comp;
//         if(this.state.display){
//             comp=<Hello/>
//         }
//         return(
//             <div>
//                 {comp}
//                 <button onClick={this.delete}>Delete the component</button>
//             </div>
//         )
//     }
//
// }
// export default App;



//Thao tác với state trong ReactJS

// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state={
//       header:'Header from state ....',
//       content:'Content from state ....'
//     }
//   }
//   render() {
//     return (
//         <div>
//           <h1>{this.state.header}</h1>
//           <h2>{this.state.content}</h2>
//         </div>
//     )
//   }
// }
//
// export default App;


//Cập nhật State

// class Car extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             brand: "Ford",
//             model: "Mustang",
//             color: "red",
//             year: 1964
//         }
//     }
//
//     changeColor = () => {
//         this.setState({color: 'blue'})
//     }
//     render() {
//         return (
//             <div>
//                 <h1>My {this.state.brand}</h1>
//                 <p>
//                     It is a {this.state.color}<br/>
//                     {this.state.model}<br/>
//                     from {this.state.year}
//                 </p>
//                 <button type='button'
//                 onClick={this.changeColor}>Change Color
//                 </button>
//             </div>
//         )
//     }
// }
// export default Car;

//Sử dụng preventDefault() để chặn hành vi mặc định là mở đường link

// export default function ActionLink() {
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('You had clicked a Link.');
//     }
//     return (
//         <a href="https://learn.codegym.vn/courses/reactjs" onClick={handleClick}>
//             Click_Me
//         </a>
//     );
// }

//Khi bạn định nghĩa component bằng class ES6, một mẫu thiết kế phổ biến là sử dụng phương thức của class để bắt sự kiện. Ví dụ, component Toggle dưới đây render một chiếc nút để người dùng thay đổi giữa state “ON” và “OFF”:

// export default class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isToggleOn: true
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick() {
//         this.setState(prevState => (
//             {isToggleOn: !prevState.isToggleOn}
//         ))
//     }
//
//     render() {
//         return (
//             <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
//         )
//     }
// }

//[Bài đọc] Tìm hiểu cơ chế Render có Điều Kiện

// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: '',
//             inputText: '',
//             mode: 'view'
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSave = this.handleSave.bind(this);
//         this.handleEdit = this.handleEdit.bind(this);
//     }
//
//     handleChange(e) {
//         this.setState({inputText: e.target.value});
//     }
//
//     handleSave() {
//         this.setState({text: this.state.inputText, mode: 'view'});
//     }
//
//     handleEdit() {
//         this.setState({
//             mode: 'edit'
//         });
//     }
//
//     render() {
//         if (this.state.mode === 'view') {
//             return (
//                 <div>
//                     <p>Text:{this.state.text}</p>
//                     <button onClick={this.handleEdit}>Edit</button>
//                 </div>
//             )
//         }
//         else{
//             return (
//                 <div>
//                     <p>Text:{this.state.text}</p>
//                     <input onChange={this.handleChange} value={this.state.inputText}/>
//                     <button onClick={this.handleSave}>Save</button>
//                 </div>
//             )
//         }
//
//     }
// }

