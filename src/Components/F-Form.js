import React, {useState} from "react";

export default function FormDemo() {
    const MESSAGE_ERROR={
        username:'Username error',
        email:'Email error',
        password:'Password error',
        confirmPassword:'Password must be the same'

    }
    const REGEX={
        username: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    }
    const [form, setForm] = useState({});
    const handleOnChange = (e) => {
        let error='';
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }
        const handleSubmit = () => {  
            const {username, email, password, confirmPassword} = form
            const isValid = username && email && password && confirmPassword;
            alert(isValid ? 'Sign in success!!!' : "Please fill out all the fields!!!");
        }
        return (
            <>
                <h1>Sign up</h1>
                <label>Username</label>
                <input name='username' value={form.username} onChange={handleOnChange}/>
                <br/>
                <label>Email</label>
                <input name='email' value={form.email} onChange={handleOnChange}/>
                <br/>
                <label>Password</label>
                <input name='password' value={form.password} onChange={handleOnChange}/>
                <br/>
                <label>Confirm password</label>
                <input name='confirmPassword' value={form.confirmPassword} onChange={handleOnChange}/>
                <br/>
                <button onClick={handleSubmit}>Submit</button>
            </>
        )
    }


// function Submit() {
//     const [state, setState] = useState({
//         username: "",
//         age: null
//     });
//
//     const submitHandler = event => {
//         event.preventDefault();
//         alert("You are submitting " + state.username);
//     };
//     const handleChange = event =>
//         setState({ ...state, [event.target.name]: event.target.value });
//     return (
//         <form onSubmit={submitHandler}>
//             <h1>
//                 Hello {state.username} {state.age}
//             </h1>
//             <p>Enter your name:</p>
//             <input type="text" name="username" onChange={handleChange} />
//             <p>Enter your age:</p>
//             <input type="text" name="age" onChange={handleChange} />
//             <input type="submit" />
//         </form>
//     );
// }

// export default Submit;

// function Submit() {
//     const [username, setUsername] = useState("");
//
//     const submitHandler = event => {
//         event.preventDefault();
//         alert("You are submitting " + username);
//     };
//     const handleChange = event => setUsername(event.target.value);
//     return (
//         <form onSubmit={submitHandler}>
//             <h1>Hello {username}</h1>
//             <p>Enter your name, and submit:</p>
//             <input type="text" onChange={handleChange} />
//             <input type="submit" />
//         </form>
//     );
// }
//
// export default Submit;

// function MyForm() {
//     const [username, setUsername] = useState("");
//     const handleChange = event => setUsername(event.target.value);
//     let header;
//     if (username) {
//         header = <h1>Hello {username}</h1>;
//     } else header = "";
//     return (
//         <div>
//             <form>
//                 {header}
//                 <p>Enter your name:</p>
//                 <input type="text" value={username} onChange={handleChange} />
//             </form>
//         </div>
//     );
// }
//
// export default MyForm;