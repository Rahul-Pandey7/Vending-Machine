import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Addstock extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name:'',
            quantity:''

        }
    }
    get_details=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    add_stock=(e)=>{
        let obj={
            name:this.state.name,
            quantity:this.state.quantity
        }
        axios({
            method: 'post',
            url: 'http://localhost:5000/add_stock',
            data:obj,
        })

            .then((response) => {
                console.log(response.data)
                console.log(response)
            })
            .catch((err) => alert(err))
    }
    render(){
        return(
            <div>
                <div className="jumbotron" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)" }}>
                    <h1 className="text-center display-4 text-white">Add New Stocks</h1>
                    <Link to="/"><button type="button" className="float-right btn btn-primary">Home</button></Link>
                </div>
                <div className="container mt-5">
                <form>
                        <div class="form-group w-50 ">
                            <label>Stock Name</label>
                            <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.get_details} placeholder="name of the stock" />
                            <label>Quantity</label>
                            <input type="text" class="form-control" name="quantity" value={this.state.quantity} onChange={this.get_details} placeholder="quantity" />
                        </div>
                        <button type="button" onClick={this.add_stock} class="btn-lg btn btn-primary">Add</button>
                    </form>
                </div>
                
            </div>
        )
    }
}