import React from "react";
// option 1

// class Home extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             isLoggedIn:true
//         }
//     }
//     handleLogIn=()=>{
//         this.setState({isLoggedIn:true})
//     }
//     handleLogOut=()=>{
//         this.setState({isLoggedIn:false})
//     }
//     render() {
//         if(this.state.isLoggedIn){
//             return(
//                 <div>
//                     <h1>Please Log In</h1>
//                     <button onClick={this.handleLogOut}>Log In</button>
//                 </div>
//             )
//         }
//         else{
//             return (
//                 <div>
//                     <h1>Welcome</h1>
//                     <button onClick={this.handleLogIn}>Log Out</button>
//                 </div>
//
//             )
//         }
//     }
// }

//option 2
class Home extends React.Component{
    render() {
        return(
            <div>
                <h1>Welcome</h1>
                <button onClick={this.props.onLogOut}>Log Out</button>
            </div>
        )
    }
}

export default Home;