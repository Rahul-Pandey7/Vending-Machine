import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }
    componentDidMount = (e) => {
        axios({
            method: 'get',
            url: "http://localhost:5000/show/stock",
        })

            .then((response) => {
                console.log(response.data)
                console.log(response)
                this.setState({
                    arr: [...response.data],
                });
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div>
                <div className="jumbotron" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)" }}>
                    <h1 className="text-center display-4 text-white">Vending Machine</h1>
                    <Link to="/add_stock"><button type="button" className="float-right btn btn-primary">Add New Stocks</button></Link>
                </div>
                <div className="container">
                    <div className="row">
                        {this.state.arr.map((items,index)=>{
                            return (
                                <React.Fragment>
                                    {items.quantity<=0 ? null :<div className="col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 className="text-center">Id:{items._id.$oid}</h5>
                                    <hr/>
                                    <h3 class="text-center">Item Name: {items.name}</h3>
                                    <h5 class="text-center">Item Quantity: {items.quantity}</h5>
                                    <Link to={`/add_quantity/${items._id.$oid}`}> <div className="text-center mt-3"> <button type="button" className="btn btn-lg btn-dark">Add Quantity</button></div></Link>
                                  <Link to={`/buy_stock/${items._id.$oid}`}><div className="text-center mt-3"> <button type="button" className="btn btn-lg btn-dark">Buy it</button></div></Link>
                                </div>
                            </div>
                        </div>}
                                    
                                </React.Fragment>
                                
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }
}