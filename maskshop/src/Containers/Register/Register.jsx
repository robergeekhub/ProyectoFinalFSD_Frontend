import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';
import './Register.scss';
import 'antd/dist/antd.css';

const Register = () => {
    const onFinish = (user) => {
        
        axios.post('http://localhost:8000/api/register', user)
            .then(res => {
                console.log(res.data)
                notification.success({ message :'registered user',description:'Registered user successfully'})
            }).catch(error => {
                console.log(error)
                notification.error({ message: 'Registry error', description: 'There was an error trying to register the user, check your fields' })
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <form className="login-form">
            <input type="name" name="name" required placeholder="Enter your name" />
            <br></br>
            <input type="email" name="email" required placeholder="Enter your email" />
            <br></br>
            <input type="password" name="password" required placeholder="Enter your password"/>
            <br></br>
            <button type="submit">Register</button>
        </form>
        
    )
}

export default Register;
