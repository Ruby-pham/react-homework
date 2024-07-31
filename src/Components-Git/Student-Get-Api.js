// B1: chạy api-s...: (chạy để có đường dẫn trả dữ liệu) https://github.com/nhuanh9/api-student-module-5
//     1.1: chuyển terminal vào api-student...
// 1.2: node app.js
// B2: chạy react
// 1.1: chuyển terminal vào thư mục react
// 1.2: npm start
// Bài tập: Hiện danh sách, tìm kiếm theo tên gần đúng, sắp xếp theo điểm

import axios from "axios";
import {useEffect, useState} from "react";
export function StudentGetApi(){
    let [studentList, setStudentList]=useState([]);
    let[searchList, setSearchList]=useState('')
    let api='http://localhost:3000/students';
    const getAll=()=>{
        axios.get(api).then((response)=>{
            console.log(response.data)
            setStudentList(response.data)
        })

    }
    useEffect(() => {
        getAll()
    }, []);
    const searchName=(e)=>{
        setSearchList(e.target.value)
    }
    const ranking=()=>{
        let sortedList=[...studentList].sort((a,b)=>{
            return b.score-a.score
        })
        setStudentList(sortedList)
    }
    return(
        <>
            <h1>Students List</h1>
            <label>Search follow name</label>
            <input onChange={searchName}/>
            <button onClick={ranking}>Ranking</button>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                {studentList.map((student,index) => (
                    <>
                        {student.name.toLowerCase().includes(searchList.toLowerCase()) &&
                            <tr  key={student.id}>
                                <td>{index+1}</td>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.description}</td>
                                <td>{student.action}</td>
                                <td>{student.score}</td>
                            </tr>
                        }
                    </>
                ))}

                </tbody>
            </table>
        </>
    )
}
