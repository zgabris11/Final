import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Products from './Components/products'
import About from './Components/About'
import Productsingle from './Components/productsingle'
import CategorySingle from './Components/categorySingle'
import Dinning from './Components/dinningRoom';
import Living from './Components/livingRoom';
import Office from './Components/officeRoom'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/dinningRoom" component={Dinning} />
          <Route path="/livingRoom" component={Living} />
          <Route path="/officeRoom" component={Office} />
          <Route path="/category/:category" component={CategorySingle} />
          <Route path="/product/:id" component={Productsingle} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
