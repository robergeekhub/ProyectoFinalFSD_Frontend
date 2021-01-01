import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Containers/Home/Home'
import Login from './Containers/Login/Login'
import Register from './Containers/Register/Register'
import Products from './Containers/Products/Products'
import Contact from './Containers/Contact/Contact'
import Createproducts from './Containers/Createproducts/Createproducts'
import Showproducts from './Containers/Showproducts/Showproducts'
import Orders from './Containers/Orders/Orders'
import Roles from './Components/Roles/Roles'

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
        <Route path='/login' component={Login} exact >
        <Login setClient={setClient}/>
        </Route>
        <Route path='/register' component={Register} exact />
        <Route path='/products' component={Products} exact />
        <Route path='/contact' component={Contact} exact />
        <Route path='/createproducts' component={Createproducts} exact >
          <Roles client={client} setClient={setClient}/>
        </Route>
        <Route path='/showproducts' component={Showproducts} exact />
        <Route path='/orders' component={Orders} exact />
    </Switch>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
