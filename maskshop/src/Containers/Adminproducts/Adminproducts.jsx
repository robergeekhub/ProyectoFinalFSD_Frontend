import React from 'react'

class EmployeeForm extends React.Component{

  constructor(){
    super(...arguments)
    this.state = {
      name: '',
      price: '',
      iamge: ''
    }
  }

  componentDidMount(){
    this.refs.name.focus();
  }

  handleChanges(e){
    let newState = Object.assign(
      this.state, {[e.target.id]: e.target.value})
    this.setState(newState)
  }

  saveEmployee(e){
    this.props.save(this.state)
  }

  render(){
    return (
      <form>
        <label htmlFor='product'>Product</label>
        <input ref='firstName' id='firstName'
          type='text' value={this.state.product}
          onChange={this.handleChanges.bind(this)}/>
        <br/>
        <label htmlFor='price'>Price</label>
        <input id='price' type='text' value={this.state.price}
          onChange={this.handleChanges.bind(this)}/>
        <br/>
        <label htmlFor='images'>Images</label>
        <input id='images' type='images' value={this.state.images}
          onChange={this.handleChanges.bind(this)}/>
        <br/>
        <button onClick={this.saveEmployee.bind(this)}>Guardar</button>
      </form>
    )
  }
}
export default EmployeeForm
