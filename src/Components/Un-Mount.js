import React from "react";

export default class Hello extends React.Component{
    componentWillUnmount() {
        alert('The Component is going to unmounted')
    }

    render() {
        return(
            <h1>Hello World!!!!</h1>
        )
    }
}
