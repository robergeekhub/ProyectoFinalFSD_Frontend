import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './Showproducts.scss';
import {notification} from 'antd';

const Products = () =>{
  const [products,setProducts] = useState([]);
  const token = localStorage.getItem('authToken')
  useEffect(()=>{
    const options = { headers: { Authorization: `Bearer ${token}` }};
    axios.get('http://localhost:8000/api/product/show', options)
    .then((res) =>{
      setProducts(res.data);
    }).catch((error) =>{
      console.log(error);
    })
  },)

  const deleteProduct = async (id) =>{
    const options = { headers: { Authorization: `Bearer ${token}` }};
    await axios.delete('http://localhost:8000/api/product/'+ id,options);
    notification.success({message:'Product cancelled.', description:'Product has been successfully cancelled.'})
    await axios.get('http://localhost:8000/api/product/show', options)
    .then((res) =>{
      console.log(res.data)
      setProducts(res.data);
    }).catch((error) =>{
      console.log(error);
    })
  }
  return (
    <div className="maincontainerproducts">
      <div className="rowshow">
        <ul className="menú">
          <li className="menú">Name</li>
          <li className="menú">Description</li>
          <li className="menú">Price €</li>
          <li className="menú">Image_path</li>
        </ul>
    </div>
              <div className="containerproductshow">
            {products?.map(product =>
                <div key={product.id} className='infoProduct'>
                  <div className='inside'>{product.name}</div>
                  <div className='inside'>{product.description}</div>
                  <div className='inside'>{product.price}</div>
                  <div className='inside'>{product.image_path}</div>
                  <div className='buttondelete'><button className='deleteButton' onClick={()=> {deleteProduct(product.id)}}>X</button></div>
              </div>
            )}
        </div>
      </div>
);

}

export default Products;