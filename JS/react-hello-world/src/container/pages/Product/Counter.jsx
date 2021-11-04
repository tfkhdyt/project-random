import React, { Component } from 'react';

class Counter extends Component {
  state = {
    order: 0
  }
  
  handleCounterChange = (value) => {
    this.props.onCounterChange(value)
  }
  
  handlePlus = () => {
    this.setState({
      order: this.state.order + 1
    }, () => {
      this.handleCounterChange(this.state.order)
    })
  }
  
  handleMinus = () => {
    if (this.state.order > 0){
      this.setState({
        order: this.state.order - 1
      }, () => {
        this.handleCounterChange(this.state.order)
      })
    }
  }
  
  render () {
    return (
      <div className="input-group mb-3">
        <button className="btn btn-primary" type="button" id="buttonKurang" onClick={this.handleMinus}> - </button>
        <input type="number" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={this.state.order} style={{textAlign: "center"}} disabled/>
        <button className="btn btn-primary" type="button" id="buttonTambah" onClick={this.handlePlus}> + </button>
      </div>
    );
  }
}

export default Counter;