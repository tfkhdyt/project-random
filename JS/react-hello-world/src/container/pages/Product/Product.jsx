import React from 'react'
//import Header from '../../component/Header/Header'
import CardProduct from './CardProduct/CardProduct';

class Product extends React.Component {
  state = {
    order: 0
  }
  
  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue
    })
  }
  
  render(){
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Ini nama restorannya</span>
            <div>
              <span>Troli : </span>
              <span className='count'>{this.state.order}</span>
            </div>
          </div>
        </nav>
        <div className='container mt-3'>
          <div className='row'>
            <div className='col-6 col-md-3'>
              <CardProduct onCounterChange = {(value) => this.handleCounterChange(value) }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product