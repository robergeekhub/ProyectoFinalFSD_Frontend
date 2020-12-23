import React from 'react';
import Adminproducts from '../../Containers/Adminproducts/Adminproducts';
import Products from '../../Containers/Products/Products'

function Roles(props) {

  const returnViewByRole = (props) => {
    console.log(props.client)
    if(props.client.role === 'admin'){
      return <Adminproducts client={props.client} setClient={props.setClient}/>
    }else{
      return <Products client={props.client} setClient={props.setClient}/>
    }
  }
  return (
    returnViewByRole(props)
  );
}

export default Roles;