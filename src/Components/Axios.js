// import '../App.css'
import './Student-List.css'
import React, {Component} from "react";
import axios from "axios";

class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            searchList: '',
            highestCases:'',
            highestDeaths:'',
            increaseCases:'',
            DecreaseCases:'',
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
    searchProvince = (e) => {
        let search = e.target.value.toLowerCase();
        this.setState({searchList: search});
    }
    getHighestCases=()=>{
        const sortedProvince = this.state.dataList.sort((a,b)=>b.cases-a.cases)
        const highest5 = sortedProvince.splice(0,5);
        this.setState({highestCases:highest5})
    }
    getHighestDeaths=()=>{
        const sortedProvince = this.state.dataList.sort((a,b)=>b.deaths-a.deaths)
        const highest5 = sortedProvince.splice(0,5);
        this.setState({highestDeaths:highest5})

    }
    getIncreaseCases=()=>{
        const sortedCases = this.state.dataList.sort((a,b)=>a.cases-b.cases)
        this.setState({increaseCases:sortedCases})
    }
    getDecreaseCases=()=>{
        const sortedProvince = this.state.dataList.sort((a,b)=>b.cases-a.cases)
        this.setState({DecreaseCases:sortedProvince})
    }

    render() {
        return (
            <>
                <h1>Covid Cases</h1>
                <label>Search follow province</label>
                <input value={this.state.searchList} onChange={this.searchProvince}/>
                <button onClick={this.getHighestCases}> get 5 highest cases</button>
                <button onClick={this.getHighestDeaths}> get 5 highest deaths</button>
                <button onClick={this.getIncreaseCases}> Increase follow cases</button>
                <button onClick={this.getDecreaseCases}> Decrease follow cases</button>
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
                            {item.name.toLowerCase().includes(this.state.searchList.toLowerCase()) &&
                                <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.cases}</td>
                                <td>{item.deaths}</td>
                            </tr>}
                        </>

                    ))}
                    </tbody>
                </table>
            </>


        )
    }
}

export default Axios;