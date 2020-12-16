import React from 'react';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Containers/Home/Home'
import Login from './Containers/Login/Login'
import Register from './Containers/Register/Register'
import Products from './Containers/Products/Products'
import Adminproducts from './Containers/Adminproducts/Adminproducts'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/register' component={Register} exact />
        <Route path='/products' component={Products} exact />
        <Route path='/adminproducts' component={Adminproducts} exact />
    </Switch>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
