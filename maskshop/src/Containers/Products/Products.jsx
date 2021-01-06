import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Actions/cartActions';
import './Products.scss';

class Products extends Component {

    render() {
      //this.props.cart se agrega a través de mapStateToProps
      //this.props.removeFromCart se agrega a través de mapDispatchToProps
      const productList = this.props.products.map( (item,index)  => {
        return (
            <div key={index}> 
            <div className="maincontainer">
                <div className="row1">
                    <div className="containerproduct">
                        <img src={item.image} alt="selected product" style={{ width: 400 }}/>
                        <p style={{ color:'black',fontWeight:'bold'}}>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.price}€</p>
                        <button className="button" onClick={() => this.props.addToCart(item)}><i className="fas fa-shopping-cart"></i> Add to cart </button> 
                    </div>
                </div>
            </div>    
            </div>
        )
    
      });
  
      return (
        <div className= "products">
           { productList }
        </div>
      );
    }
  }
  
  function mapStateToProps(state, props) {
      return {
          products: state.products
      };
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          addToCart: item => dispatch(addToCart(item))
      }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Products);