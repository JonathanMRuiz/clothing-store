
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div >
    <Router>
      <div>
        <nav class="container">
          
        </nav>

        <Switch>
        <Route path="/product/:id">
            <Product />
          </Route>
        <Route path="/cart/:id">
            <Cart/>
          </Route>
        <Route path="/productList">
            <ProductList />
          </Route>
          <Route path="/register/:id">
            <Register/>
          </Route>
          <Route path="/login/:id">
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
