import React from 'react'

const Post = props => {
  return (
    <div className="card mx-3 my-4 col-12 col-md-9" style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <div className='row'>
        <div className='col'>
          <img src="https://placeimg.com/640/500/tech" alt="..." className='img-fluid'/>
        </div>
        <div className="col p-4">
          <div className='row'>
            <div className='col'>
              <h5 className="card-title my-1">{props.data.title}</h5>
              <p className="card-text my-1">{props.data.body}</p>
              <button className='btn btn-danger mt-1' onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post