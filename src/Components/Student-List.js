import React from "react";
import './Student-List.css'

export default class Students extends React.Component {
    constructor() {
        super();
        this.state = {
            studentList: [{
                name: 'Ngoc Pham',
                phone: '123456',
                email: 'ngoc@gmail.com',
            }],
            newStudentList: [{
                name: '',
                phone: '',
                email: '',
            }],
            selectedStudentIndex: -1,
            searchList: '',

        }
    }

    handleSearch = (e) => {
        let search = e.target.value.toLowerCase();
        // let updatedList = this.state.studentList.filter(student => {
        //     return student.name.toLowerCase().includes(search);
        // });
        this.setState({searchList: search});
    }
    handleOnchange = (e) => {
        // const{name,value}=e.target;
        this.setState({newStudentList: {...this.state.newStudentList, [e.target.name]: e.target.value}})
    }

    handleSubmit = (e) => {
        e.preventDefault()// Ngăn chặn form gửi đi để tránh load lại trang
        let {studentList, newStudentList, selectedStudentIndex} = this.state
        if (selectedStudentIndex !== -1) {
            let updatedStudentList = [...studentList];
            updatedStudentList[selectedStudentIndex] = {...newStudentList};
            this.setState({
                studentList: updatedStudentList,
                newStudentList: {
                    name: '',
                    phone: '',
                    email: '',
                },
                selectedStudentIndex: -1
            })
        } else {
            this.setState({
                studentList: [...studentList, newStudentList], newStudentList: {
                    name: '',
                    phone: '',
                    email: '',
                }
            })
        }
    }
    handleEdit = (index) => {
        const selectedStudent = this.state.studentList[index];
        this.setState({
            newStudentList: {
                name: selectedStudent.name,
                phone: selectedStudent.phone,
                email: selectedStudent.email,
            },
            selectedStudentIndex: index,
        })
    }
    handleDelete = (index) => {
        const updatedStudentList = [...this.state.studentList];
        updatedStudentList.splice(index, 1);
        this.setState({studentList: updatedStudentList})
    }

    render() {
        const {studentList, newStudentList} = this.state;
        return (
            <div className='container'>
                <h1>Student List</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input name='name' value={newStudentList.name} onChange={this.handleOnchange}/><br/>
                    <label>Phone:</label>
                    <input type='number' name='phone' value={newStudentList.phone} onChange={this.handleOnchange}/><br/>
                    <label>Email:</label>
                    <input name='email' value={newStudentList.email} onChange={this.handleOnchange}/><br/>
                    <button className='submit' type='submit'>Submit</button>
                </form>
                <label>Search:</label>
                <input onChange={this.handleSearch}/>
                <table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th colSpan='2'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentList.map((student, index) => (
                            <>
                                {
                                    student.name.toLowerCase().includes(this.state.searchList) &&
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{student.name}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.email}</td>
                                        <td>
                                            <button onClick={() => this.handleEdit(index)}>Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={() => this.handleDelete(index)}>Delete</button>
                                        </td>
                                    </tr>
                                }
                            </>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}