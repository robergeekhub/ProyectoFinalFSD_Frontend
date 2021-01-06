import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';
import logo from '../../img/maskshop.jpg'
import {useHistory} from 'react-router';
import axios from 'axios';
import {notification} from 'antd';

const Header = ({setClient}) =>{
    const history = useHistory();
  
    const logout = async () =>{
        try{
          axios.post(`http://localhost:3000/api/logout?access_token=${localStorage.getItem('access_token')}`)       
          localStorage.removeItem('authToken')
          localStorage.removeItem('client')
          notification.success({message:'¡Goodbye!',description:'We look forward to seeing you soon.'})
             setTimeout(() => {
                history.push('/')
            }, 1000); 
        }catch (error) {
          console.log(error);
      }
      }
    return (
        <header className="header">
            <div className="containerlogo">
                <div className="logo">
                <img src={logo} height="100" width="100" alt={"MaskShop"}/> 
                </div>
            </div>
            <div className="containerHome">
                <Link to="/">Home</Link>
            </div>
            <div className="containerProducts">
                <Link to="/products">Products</Link>
            </div>
            <div className="containerContact">
                <Link to="/contact">Contact</Link>
            </div>
            <div className="containerLogin">
                <Link to="/login">Login</Link>
            </div>
            <div className="containerRegister">
                <div className="containersignup">
                <Link to="/register">Register</Link>
                </div>
            </div>
            <button className='buttonheader'  onClick={logout}><i className="fas fa-user"></i>Logout<i className="fas fa-sign-out-alt"></i></button>
            <div className="cart">         
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                </Link>
            </div>
        </header>
    )
}
export default Header;

