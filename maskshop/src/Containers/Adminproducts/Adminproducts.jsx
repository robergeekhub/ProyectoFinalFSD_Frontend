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
          price: event.target.price.value,
          
        };
        axios.post('http://localhost:8000/api/', productsBody, headers)
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
    <Input type="name" name="name" required placeholder="Instruct your new product" />
    <Input type="price" name="price" required placeholder="Enter the price" />
    <button  type="primary" className='noStyle' htmlType="submit">Create product</button>
    </form> 
        )
    }
    


export default Adminproducts;
