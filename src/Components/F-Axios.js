// Tạo 1 compoent hiện danh sách quốc gia có: ảnh (hiện ảnh), tên (1 tên), diện tích và dân số.
//     Tính năng thêm:
//     Tìm kiếm theo tên gần đúng
// Tìm kiêm theo khoảng diện tích (ví dụ từ 100 - 1000)
// Tìm kiêm theo khoảng dân số (ví dụ từ 100000 - 1000000)
// [7:41 PM] Đào Như Anh
// Nâng cao: hiện 1 select option để chọn thêm 1 thông tin hiện thêm (ví dụ: chọn capital => Hiện thêm tên thủ đô)
import {useEffect, useState} from "react";
import axios from "axios";
import {render} from "@testing-library/react";

export function RestCountries(props) {
    const [dataList, setDataList] = useState([]);
    const [searchList, setSearchList] = useState("");
    const [originDataList, setOriginDataList] = useState([]);
    let [field, setField] = useState("");
    let [check, setCheck] = useState(false)
    let api = "https://restcountries.com/v3.1/all?fields=name,area,population,flags,capital";
    const getAll = () => {
        axios.get(api).then((response => {
            setDataList(response.data)
            setOriginDataList(response.data);
        }))
    }
    let getField = (e) => {
        let field = e.target.value;
        if (field === '') {
            setCheck(false);
            getAll();
            return
        } else {
            setField(field)
            api = api + ',' + field;
            axios.get(api).then((response) => {
                setDataList(response.data);
                setCheck(true);
            })
        }
    }
    useEffect(() => {
        getAll();

    }, []);
    const searchName = (e) => {
        setSearchList(e.target.value)
    }
    const handleSearchArea = () => {
        let searchArea = dataList.filter((item, index) => {
            if (item.area >= 100 && item.area <= 1000) {
                return item
            }
        })
        setDataList(searchArea);
    }

    const handleSearchPopulation = () => {
        let searchPopulation = dataList.filter((item, index) => {
            if (item.population >= 100000 && item.population <= 1000000) {
                return item
            }
        })
        setDataList(searchPopulation);
    }
    const handleSelectChange = (e) => {
        const countryName = e.target.value;
        if (countryName === '') {
            setDataList(originDataList);
        } else {
            const country = dataList.filter(item => {
                if (item.name.common === countryName) {
                    return item
                }
            })
            setDataList(country);
        }
    }
    return (
        <>
            <h1>Countries Information</h1>
            <label>Search follow country name</label>
            <input onChange={searchName}/>
            <button onClick={handleSearchArea}>Search Area</button>
            <button onClick={handleSearchPopulation}>Search Population</button>
            <button onClick={getAll}>Home</button>
            <br/>
            <label>Add subject More</label>
            <select onChange={getField} value={field}>
                <option value=''>---Add---</option>
                <option value='timezones'>timezones</option>
                <option value='status'>status</option>
                <option value='continents'>continents</option>
            </select>
            <br/>
            <label>Chọn quốc gia:</label>
            <select onChange={handleSelectChange}>
                <option value=''>--Selected Country--</option>
                {dataList.map(item => (
                    <option key={item.name.common} value={item.name.common}>
                        {item.name.common}
                    </option>
                ))}
            </select>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Flag</th>
                    <th>Country</th>
                    <th>Capital</th>
                    <th>Area</th>
                    <th>Population</th>
                    {check ? (<th>{field}</th>) : ''}
                </tr>
                </thead>
                <tbody>
                {dataList.map((item, index) => (
                    <>
                        {item.name.common.toLowerCase().includes(searchList.toLowerCase()) &&
                            <tr>
                                <td>{index + 1}</td>
                                <td>{<img src={item.flags.png} alt={'Flag image'}/>}</td>
                                <td>{item.name.common}</td>
                                <td>{item.capital}</td>
                                <td>{item.area}</td>
                                <td>{item.population}</td>
                                {check ? (<td>{item[field]}</td>) : ''}
                            </tr>
                        }
                    </>
                ))}
                </tbody>
            </table>
        </>
    )
}