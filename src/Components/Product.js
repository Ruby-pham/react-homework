import React from "react";

export default class Product extends React.Component{
    constructor() {
        super();
        this.state={
            Products:[{
                id:'1',
                name:'television',
                price:'200',
            }],
            newProducts:{
                id:'',
                name:'',
                price:''
            },
            search:'',
        }
    }
    handleIncrease=()=>{
        let increaseList = this.state.Products.sort((a,b)=>{
            return a.price-b.price
        })
        this.setState({Products:increaseList})
    }
    handleDecrease=()=>{
        let decreaseList = this.state.Products.sort((a,b)=>{
            return b.price-a.price
        })
        this.setState({Products:decreaseList})
    }
    render() {
        return(
            <>
                <h1>Danh Sach San Pham</h1>
                {this.state.Products.map(e => (
                    <>
                        {e.name.includes(this.state.search) && <h2>{e.name}:{e.price}</h2>}

                    </>
                ))}
                <input onChange={e => {
                    this.setState({
                        search: e.target.value
                    });
                }}/><br/>
                <button onClick={this.handleIncrease}>Increase</button>
                <br/>
                <button onClick={this.handleDecrease}>Decrease</button>

                <hr/>
                <input value={this.state.newProducts.id} onChange={(e => {
                    this.setState({newProducts: {...this.state.newProducts, id: e.target.value}})
                })}/>
                <input value={this.state.newProducts.name} onChange={(e => {
                    this.setState({newProducts: {...this.state.newProducts, name: e.target.value}})
                })}/>
                <input value={this.state.newProducts.price} onChange={(e => {
                    this.setState({newProducts: {...this.state.newProducts, price: e.target.value}})
                })}/>
                <button onClick={() => {
                    this.setState({
                        Products: [...this.state.Products, this.state.newProducts], newProducts: {
                            id: '',
                            name: '',
                            price: ''
                        }
                    })
                }}>Them
                </button>
            </>
        )

    }
}