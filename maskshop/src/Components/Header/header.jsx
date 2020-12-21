import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';
import logo from '../../img/maskshop.jpg'

const Header = ({user,setUser}) => {

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        setUser(null)
    }
    return (
        <header className="header">
            <div className="containerlogo">
                <div class="logo">
                <img src={logo} height="100" width="100" alt={"MaskShop"}/> 
                </div>
            </div>
            <div className="containerHome">
                    <Link to="/">Home</Link>
            </div>
            <div className="containerProducts">
                <Link to="/products">Products</Link>
            </div>
            <div className="containerLogin">
                <Link to="/login">Login</Link>
            </div>
            <div className="containerRegister">
                <Link to="/register">Register</Link>
            </div>

        </header>
    )
}
export default Header;

