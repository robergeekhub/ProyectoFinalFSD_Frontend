import React from 'react';
import AdminProfile from '../../Containers/AdminProfile/AdminProfile'
import AdminProducts from '../../Containers/Adminproducts/Adminproducts'

function Roles(props) {

  const returnViewByRole = (props) => {
    console.log(props.client)
    if(props.client.role === 'admin'){
      return <AdminProfile client={props.client} setClient={props.setClient}/>
    }else{
      return <AdminProducts client={props.client} setClient={props.setClient}/>
    }
  }
  return (
    returnViewByRole(props)
  );
}

export default Roles;