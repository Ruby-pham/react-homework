import React from "react";

class Expands extends React.Component{
    constructor() {
        super();
        this.state={
            isExpand:true
        }
    }
    handleExpand=()=>{
        this.setState({isExpand:false})
    }
    handleCollapse=()=>{
        this.setState({isExpand:true})
    }
    render() {
        if(this.state.isExpand){
            return(
                <div style={{width:800, margin:'auto'}}>
                    <h1 style={{backgroundColor:'green', color:'white', padding:20}}>Conditional Rendering</h1>
                    <button style={{padding:5}} onClick={this.handleExpand}>See introduction</button>
                </div>
            )
        }
        else{
            return (
                <div style={{width:800, backgroundColor:'pink', margin:'auto'}}>
                    <h1 style={{backgroundColor:'green', color:'white', padding:20}}>Conditional Rendering</h1>
                    <p>Nếu có một hàm constructor() trong component, thì hàm này sẽ được gọi khi component được khởi tạo. Hàm khởi tạo là nơi khởi tạo các thuộc tính của component. Hàm khởi tạo là nơi chúng ta kế thừa lại component cha bằng câu lệnh super(), thực thi phương thức constructor của component cha, component có quyền truy cập vào tất cả các chức năng của component cha (ở đây là React.Component).</p>
                    <button style={{padding:5}} onClick={this.handleCollapse}>Hide introduction</button>
                </div>
            )
        }

    }
}
export default Expands;