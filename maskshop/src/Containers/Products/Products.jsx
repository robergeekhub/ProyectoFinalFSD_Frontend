import React, { Component } from 'react'
import './Products.scss';
import { Link } from 'react-router-dom'

const Products = () => {
    
return (
    <div className="maincontainer">
        <div className="row1">
            <div className="containerproduct">
                    <div className="photo1"></div>
                    <div className="containerdescription">
                    <div className="description">Mascarillas Negras tipo quirúrgicas desechables(Pack 50)</div>
                    <div className="price">12€</div>
                    </div>
                <div className="buttonbuy">
                    <Link to='/orders' className='link'>Comprar</Link>
                </div>
            </div>
            
            <div className="containerproduct">
                    <div className="photo2"></div>
                    <div className="containerdescription">
                    <div className="description">Mascarillas FFP2 Negras homologadas (Pack de 10)</div>
                    <div className="price">15,95€</div>  
                    </div>  
                        <div className="buttonbuy">
                        <Link to='/orders' className='link'>Comprar</Link>
                        </div>
            </div>

            <div className="containerproduct">
                    <div className="photo3"></div>
                    <div className="containerdescription">
                    <div className="description">Mascarillas quirúrgicas azules(Pack de 50)</div>
                    <div className="price">16,95€</div>  
                    </div>  
                        <div className="buttonbuy">
                        <Link to='/orders' className='link'>Comprar</Link>
                        </div>
            </div>
        </div>
        <div className="row2">
            <div className="containerproduct">
                    <div className="photo4"></div>
                    <div className="containerdescription">
                    <div className="description">Mascarillas FFP2 blancas homologadas (Pack de 10)</div>
                    <div className="price">14,95€</div>  
                    </div>  
                        <div className="buttonbuy">
                        <Link to='/orders' className='link'>Comprar</Link>
                        </div>
            </div>
            <div className="containerproduct">
                    <div className="photo5"></div>
                    <div className="containerdescription">
                    <div className="description">Mascarillas transparentes(Pack de 4)</div>
                    <div className="price">9,95€</div>  
                    </div>  
                        <div className="buttonbuy">
                        <Link to='/orders' className='link'>Comprar</Link>
                        </div>
            </div>
            <div className="containerproduct">
                    <div className="photo6"></div>
                    <div className="containerdescription">
                    <div className="description">Mascarillas infantiles(Pack de 50)</div>
                    <div className="price">14,95€</div>  
                    </div>  
                        <div className="buttonbuy">
                        <Link to='/orders' className='link'>Comprar</Link>
                        </div>
            </div>
        </div>
    </div>

    
)
}

export default Products;