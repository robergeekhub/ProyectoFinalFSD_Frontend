import React from 'react';
import axios from 'axios';
import './Login.scss';
import {useHistory} from 'react-router';
import {notification} from 'antd';
import {} from 'react-router-dom';

const Login = ({setClient}) => {
    const history = useHistory();
    const handleSubmit = event =>{
      event.preventDefault();
      const client ={
          email:event.target.email.value,
          password:event.target.password.value
      };
      console.log(client)
      axios.post('http://localhost:8000/api/login', client)
      .then(res=>{
          console.log('axios done')
          localStorage.setItem('authToken',res.data.token);
          localStorage.setItem('client',JSON.stringify(res.data))
          
          notification.success({message:'Welcome!',description:'Welcome to our application! '+client.email})
          
          setTimeout(() => {
              history.push('/products')
          }, 1000);
      })
      .catch(error=> {throw (error)})
  }
    return (
        <div>
        <form>
     <div class="mb-3">
       <label for="exampleInputEmail1" class="form-label">Email address</label>
       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
       <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
     </div>
     <div class="mb-3">
       <label for="exampleInputPassword1" class="form-label">Password</label>
       <input type="password" class="form-control" id="exampleInputPassword1"></input>
     </div>
     <div class="mb-3 form-check">
     </div>
     <button type="submit" class="btn btn-primary">Submit</button>
     </form>
     </div>
        
    )
}

export default Login;