import React from "react";

export default class ChangeColor extends React.Component{
constructor(props) {
    super(props);
    this.state={
        color:'black'
    };
}
componentDidMount() {
    setTimeout(()=>{
        this.setState({color:'pink'})
    },1000);
}

    render() {
    return(
        <div>
            <div
                style={{
                    backgroundColor:this.state.color,
                    paddingTop: 20,
                    width: 400,
                    height: 80,
                    margin: 'auto',
                }}
            ></div>
        </div>
    )
}
}