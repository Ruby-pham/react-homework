// import '../App.css'
import './Student-List.css'
import React, {Component} from "react";
import axios from "axios";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            result: 0,
            dataList: [],
            searchList: '',
        }
    }

    componentDidMount() {
        axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(x => {
            console.log(x.data.detail);
            let arr = [];
            for (const key in x.data.detail) {
                // console.log(key);
                // console.log(x.data.detail[key])
                arr.push(x.data.detail[key])
            }
            this.setState({dataList: arr})
        })
    }
    searchProvince=(e) => {
        let search = e.target.value.toLowerCase();
        this.setState({searchList: search});
    }

    handleChange1 = (e) => {
        this.setState({value1: e.target.value})
    }
    handleChange2 = (e) => {
        this.setState({value2: e.target.value})
    }
    plus = () => {
        this.setState({result: parseInt(this.state.value1) + parseInt(this.state.value2)});
    }
    minus = () => {
        this.setState({result: parseInt(this.state.value1) - parseInt(this.state.value2)});
    }
    multiply = () => {
        this.setState({result: parseInt(this.state.value1) * parseInt(this.state.value2)});
    }
    devide = () => {
        this.setState({result: parseInt(this.state.value1) / parseInt(this.state.value2)});
    }

    render() {
        return (
            <>
                <h1>Covid Cases</h1>
                <label>Search follow province</label>
                <input onChange={this.searchProvince}/>
                <table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Province</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.dataList.map((item, index) => (
                        <>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.cases}</td>
                                <td>{item.deaths}</td>
                            </tr>
                        </>

                    ))}
                    </tbody>
                </table>

                <hr/>
                <div className='container_calculator'>
                    <div className='main_cal'>
                        {/*Value1: {this.state.value1} , Value2: {this.state.value2}<br/>*/}
                        <br/>
                        <input type='number' value={this.state.value1} onChange={this.handleChange1}/><br/>
                        <input type='number' value={this.state.value2} onChange={this.handleChange2}/><br/>
                        <h5>Result: {this.state.result}</h5>
                        <button className='btn_calculator' onClick={this.plus}>+</button>
                        <button className='btn_calculator' onClick={this.minus}>-</button>
                        <button className='btn_calculator' onClick={this.multiply}>X</button>
                        <button className='btn_calculator' onClick={this.devide}>/</button>
                    </div>

                </div>

            </>


        )
    }
}

export default Calculator;