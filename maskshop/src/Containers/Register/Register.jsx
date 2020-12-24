import React from 'react';
import axios from 'axios';
import {useHistory} from "react-router";
import './Register.scss';
import { Input, notification } from 'antd';


const Register = () =>{

    const history = useHistory();

    const handleSubmit = event =>{
        event.preventDefault(); 
        const clientBody={
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        };
        axios.post('http://localhost:8000/api/register', clientBody)
        .then(res => {
            console.log(res.data)
            notification.success({ message :'Registered client.',description:'Succesfully registered client.'})
            
            setTimeout(() => {
                history.push("/")
            }, 1500);
        }).catch(error => {
            console.log(error)
            notification.error({ message: 'Registration error.', description: 'There was an error trying to register the client.' })
        })
    }

    return (
        <form className="register-form" onSubmit={handleSubmit}>
        <Input type="name" name="name" required placeholder="Enter your name" />
        <br></br>
        <Input type="email" name="email" required placeholder="Enter your email" />            
        <br></br>
        <Input type="password" name="password" required placeholder="Enter your password" />
        <br></br>
        <button className='buttonRegister' type="primary" htmlType="submit">Register</ button>
        </form>
)
}

export default Register;
