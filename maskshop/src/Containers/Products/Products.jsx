import React, { } from 'react';
import './Products.scss';
import { Link } from 'react-router-dom';

const Products = () => {
    
return (
    <div className="maincontainer">
        <div className="row1">
            <div className="containerproduct">
                    <div className="photo1"></div>
                    <div className="containerdescription">
                    <div className="description">Disposable surgical-type black masks(Pack 50)</div>
                    <div className="price">12€</div>
                    </div>
                <div className="buttonBUY">
                    <Link to='/orders' className='link'>BUY</Link>
                </div>
            </div>
            
            <div className="containerproduct">
                    <div className="photo2"></div>
                    <div className="containerdescription">
                    <div className="description">Black FFP2 approved masks (Pack 10)</div>
                    <div className="price">15,95€</div>  
                    </div>  
                        <div className="buttonBUY">
                        <Link to='/orders' className='link'>BUY</Link>
                        </div>
            </div>

            <div className="containerproduct">
                    <div className="photo3"></div>
                    <div className="containerdescription">
                    <div className="description">Blue surgical masks(Pack 50)</div>
                    <div className="price">16,95€</div>  
                    </div>  
                        <div className="buttonBUY">
                        <Link to='/orders' className='link'>BUY</Link>
                        </div>
            </div>
        </div>
        <div className="row2">
            <div className="containerproduct">
                    <div className="photo4"></div>
                    <div className="containerdescription">
                    <div className="description">Approved white FFP2 masks (Pack 10)</div>
                    <div className="price">14,95€</div>  
                    </div>  
                        <div className="buttonBUY">
                        <Link to='/orders' className='link'>BUY</Link>
                        </div>
            </div>
            <div className="containerproduct">
                    <div className="photo5"></div>
                    <div className="containerdescription">
                    <div className="description">Transparent masks(Pack 4)</div>
                    <div className="price">9,95€</div>  
                    </div>  
                        <div className="buttonBUY">
                        <Link to='/orders' className='link'>BUY</Link>
                        </div>
            </div>
            <div className="containerproduct">
                    <div className="photo6"></div>
                    <div className="containerdescription">
                    <div className="description">Children's masks(Pack 50)</div>
                    <div className="price">14,95€</div>  
                    </div>  
                        <div className="buttonBUY">
                        <Link to='/orders' className='link'>BUY</Link>
                        </div>
            </div>
        </div>
    </div>

    
)
}

export default Products;