import React from 'react';
import axios from 'axios'
import './Createproducts.scss';
import {useHistory} from "react-router";
import {Input,notification,} from 'antd';

 
const Createproducts = () =>{
    const history = useHistory();
    const token = localStorage.getItem('authToken')
    const handleSubmit = event =>{
        event.preventDefault();
        const headers = { headers: { Authorization: `${token}` }};
        const productsBody={
          name: event.target.name.value,
          description: event.target.description.value,
          price: event.target.price.value,
          image_path: event.target.image_path.value,
          
        };
        axios.post('http://localhost:8000/api/product/add', productsBody, headers)
        .then(res=> {
          console.log(res.data)
          notification.success({message: 'Products created.', description: 'Succesfully product created.'})
  
          setTimeout(() => {
            history.push("/showproducts")
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
        <Input type="file" name="image_path" required placeholder="Enter image"></Input><br></br>
        <button type="primary" className='noStyle' htmlType="submit">Create product</button>
        </form> 
        )
    }
    
export default Createproducts;
