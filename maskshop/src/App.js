import React, {useState} from 'react';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Containers/Home/Home'
import Login from './Containers/Login/Login'
import Register from './Containers/Register/Register'
import Products from './Containers/Products/Products'
import Adminproducts from './Containers/Adminproducts/Adminproducts'
import Orders from './Containers/Orders/Orders'
import Role from './Components/Roles/Roles'


function App() {
  let initialClient = null;
  try {
    initialClient = JSON.parse(localStorage.getItem('client'));
  } catch (error) {
    console.error(error)
  }
  const [client, setClient] = useState(initialClient);
  return (
    <BrowserRouter>
    <Header />
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/register' component={Register} exact />
        <Route path='/products' component={Products} exact />
        <Route path='/adminproducts' component={Adminproducts} exact />
        <Route path='/orders' component={Orders} exact />
    </Switch>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
