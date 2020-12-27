import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Register from './relog/register'
import Status from './components/status'
import Send from './components/send'
import Transactions from './components/transactions'
import axios from 'axios';

const endpoint = '/mine_block'
class App extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    axios.get(endpoint)
  }
  render(){
  return (
    <Router>
     <div className="App">
       <Switch>
        <Route path="/">
            <Register />
        </Route>
        <Route path="/santa's-portal">
            <Status/>
            <Send/>
            <Transactions/>
        </Route>
       </Switch>
     </div>
    </Router>
    );
  }
}

export default App;