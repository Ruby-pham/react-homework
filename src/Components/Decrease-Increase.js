import React from "react";
import '../App.css';

export default class DecreaseIncrease extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            number:0,
        }
    }
    increase=(event)=>{
        this.setState({number:this.state.number+1})
    }
    decrease=(event)=>{
        this.setState({number:this.state.number-1})
    }
    render() {
        return(
            <div>
                <button className='btn_change_color' onClick={this.decrease}>Decrease</button>
                <span>{this.state.number}</span>
                <button className='btn_change_color' onClick={this.increase}>Increase</button>
            </div>
        )
    }

}