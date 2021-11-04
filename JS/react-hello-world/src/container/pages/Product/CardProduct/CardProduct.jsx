import React from 'react';
import Counter from '../Counter';

class Product extends React.Component {
  render(){
    return (
      <div className="card" style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
        <img src="https://baksojwr.com/wp-content/uploads/2018/02/2-1.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h6 className="card-title">Mie Bakso yang rasanya enak banged</h6>
          <p className="card-text" style={{color:'orange',fontWeight:'bold'}}>Rp15.000</p>
          <Counter />
        </div>
      </div>
    )
  }
}

export default Product