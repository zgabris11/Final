import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Products from './Components/products'
import About from './Components/About'
import Productsingle from './Components/productsingle'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/productsingle" component={Productsingle} />
        <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
