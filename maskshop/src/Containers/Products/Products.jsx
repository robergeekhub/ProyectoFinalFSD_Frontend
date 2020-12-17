import React, { Component } from 'react'
import './Products.scss';
import { Link } from 'react-router-dom'

const Products = () => {
    
return (
    <div className="containerproduct">
        <div className="photo">
            <div className="description">Mascarillas Negras tipo quirúrgicas desechables, 10€
            <button type="submit" name="add-to-cart" value="3813" class="single_add_to_cart_button button alt">
            <Link to='/orders' className='link'>Comprar</Link>
            </button>
            </div>
    </div>
        
    <div className="containerproduct2">
        <div className="photo2">
            <div className="description">Mascarillas FPP2 Negras Homologadas, 14€
            <button type="submit" name="add-to-cart" value="3813" class="single_add_to_cart_button button alt">
            <Link to='/orders' className='link'>Comprar</Link>

            </button>
            </div>
    </div>
    </div>
    </div>
    
)
}

export default Products;