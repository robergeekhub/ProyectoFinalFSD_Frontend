import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';
import logo from '../../img/maskshop.jpg'

const Header = ({user,setUser}) => {

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
            <div className="cart">
                <span className="carnumber">0</span>
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                </Link>
            </div>
        </header>
    )
}
export default Header;

