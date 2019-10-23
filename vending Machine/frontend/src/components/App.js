import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Addstock from './Addstock';
import Buystock from './Buystock';
import Addquantity from './Addquantity';

export default class App extends React.Component{
  render(){
    return (
      <div>
        <Router>
          <Route path="/" exact component={Home}/>
          <Route path='/add_stock' component={Addstock}/>
          <Route path='/buy_stock/:id' component={Buystock}/>
          <Route path='/add_quantity/:id' component={Addquantity}/>

        </Router>
      </div>
    )
  }
}

