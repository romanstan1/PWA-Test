import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import Products from './components/Products'
import ProductDisplay from './components/ProductDisplay'
import Main from './components/Main'
import Nav from './components/Nav'
import Error from './components/Error'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/home" component={Main}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/product/:id" component={ProductDisplay}/>
          <Route component={Error}/>
        </Switch>
      </div>
    )
  }
}

export default App
