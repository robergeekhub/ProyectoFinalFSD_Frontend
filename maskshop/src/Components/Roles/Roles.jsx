import React from 'react';
import Products from '../../Containers/Products/Products'
import Createproducts from '../../Containers/Createproducts/Createproducts'

function Roles(props) {

  const returnViewByRole = (props) => {
    console.log(props.client)
    if(props.client.role === 'admin'){
      return <Createproducts client={props.client} setClient={props.setClient}/>
    }else{
      return <Products client={props.client} setClient={props.setClient}/>
    }
  }
  return (
    returnViewByRole(props)
  );
}

export default Roles;