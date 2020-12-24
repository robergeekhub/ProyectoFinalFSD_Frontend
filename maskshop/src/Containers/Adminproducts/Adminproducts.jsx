import React, { Component } from 'react';
import axios from 'axios'
import './Adminproducts.scss';
import {useHistory} from "react-router";
import {Link} from 'react-router-dom';
import {Input, notification} from 'antd';

 
const Adminproducts = () =>{
    const history = useHistory();
    const token = localStorage.getItem('authToken')
    const handleSubmit = event =>{
        event.preventDefault();
        const headers = { headers: { Authorization: `${token}` }};
        console.log(headers);
        const productsBody={
          name: event.target.name.value,
          description: event.target.description.value,
          price: event.target.price.value,
          image_path: event.target.image_path.value,
          
        };
        console.log(productsBody);
        axios.post('http://localhost:8000/api/product/add', productsBody, headers)
        .then(res=> {
          console.log(res.data)
          notification.success({message: 'Products created.', description: 'Succesfully product created.'})
  
          setTimeout(() => {
            history.push("/")
        }, 1500);
        }).catch(error => {
          console.log(error)
          notification.error({message: 'Creation error.', description:'There was an error trying to create an product.'})
        })
    }
        return (
    <form className="create-form" onSubmit={handleSubmit}>
    <Input type="name" name="name" required placeholder="Instruct your new product" /><br></br>
    <Input type="description" name="description" required placeholder="Enter a description" /><br></br>
    <Input type="price" name="price" required placeholder="Enter the price" /><br></br>
    <Input type="image_path" name="image_path" required placeholder="Enter a image" /><br></br>
    <button type="primary" className='noStyle' htmlType="submit">Create product</button>
    </form> 
        )
    }
    
export default Adminproducts;
