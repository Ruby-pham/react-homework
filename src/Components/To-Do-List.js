import React from "react";

class ToDoList extends React.Component{
    constructor() {
        super();
        this.state={
            getList:'',
            saveList:[],
        }
    }
    handleOnchange=(e)=>{
        this.setState({getList:e.target.value})
    };
    handleOnclick=(e)=>{
        this.setState({saveList:[...this.state.saveList, this.state.getList], getList:''})

    }

    render() {
        return(
            <div>
                <div>
                    <h1>Todo list:</h1>
                    {this.state.saveList.map(item=>{
                       return(
                           <h3>{item}</h3>
                       )
                    })}
                </div>
                <input type='text' value={this.state.getList} onChange={this.handleOnchange}/>
                <button onClick={this.handleOnclick}>Add</button>
            </div>
        )
    }
}
export default ToDoList;