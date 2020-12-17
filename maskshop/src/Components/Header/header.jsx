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
            <div class="logo">
            <img src={logo} height="124" width="124" alt={"MaskShop"}/> 
            </div>
            <input autocapitalize="off" autocomplete="off" autocorrect="off" placeholder="Busca en MaskShop..." role="textbox" spellcheck="false" type="text" value="" class="buscador" required="true"></input>   
            <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            {user ?
                <div className="loggedIn">
                    <Link to="/profile">{user.email}</Link>
                    <span className="logout" onClick={logout}>Logout</span>
                </div> :
                <div className="notLoggedIn">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>}
                    <div className="containerCard">
                    <div className="card"></div>
                </div>
            
                  
        </header>
    )
}
export default Header;

