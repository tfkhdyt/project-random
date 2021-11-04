import React from 'react'

class LifeCycleComp extends React.Component {
  render () {
    return (
      <div className='container m-2'>
        <div className='row'>
          <div className='col-12'>
            <h3>Life Cycle Component</h3>
          </div>
          <hr />
        </div>
        <div className='row'>
          <div className='col'>
            <button className='btn btn-primary'>Component Button</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LifeCycleComp