import {useState} from "react";

export function FProduct(props) {
    const [Products, setProducts] = useState(
        [
            {
                name: 'television',
                price: '200',
            }
        ]);
    const [newProduct, setNewProduct] = useState(
        {
            name: '',
            price: '',
        }
    )
    const [searchList, setSearchList] = useState('')
    const getValueInput = (e) => {
        let {name, value} = e.target;
        setNewProduct({...newProduct, [name]: value})
    }
    const handleOnclick = (e) => {
        setProducts([...Products, newProduct]);
        setNewProduct({
            name: '',
            price: '',
        })

    }
    const search = (e) => {
        setSearchList(e.target.value)
    }
    return (
        <>
            <h1>Danh sach san pham: </h1>
            {/*{newProduct.name},{newProduct.price}<br/>*/}
            <label>Name : </label>
            <input name='name' value={newProduct.name} onChange={getValueInput}/><br/>
            <label>Price : </label>
            <input name='price' value={newProduct.price} onChange={getValueInput}/><br/>
            <button style={{marginBottom: 15, padding: 5}} onClick={handleOnclick}>Submit</button><br/>
            <label>Search follow name</label>
            <input onChange={search}/><br/>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {Products.map((item, index) => (
                    <>
                        {item.name.toLowerCase().includes(searchList.toLowerCase()) &&
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>

                        }
                    </>

                ))}
                </tbody>
            </table>
        </>
    )

}
