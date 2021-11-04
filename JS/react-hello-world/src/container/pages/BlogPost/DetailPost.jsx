import React, { Component } from 'react';
import axios from 'axios';

class DetailPost extends Component {
  state = {
    post : {
      title : '',
      body : ''
    }
  }
  
  componentDidMount () {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:3001/posts/${id}`)
    .then(res => {
      console.log('results : ', res);
      const post = res.data;
      this.setState ({
        post : {
          title : post.title,
          body : post.body
        }
      })
    });
  }

  render () {
    return (
      <div className="container mt-2 ms-3">
        <div className="row">
          <div className="col-12 col-md-8">
            <p className='fs-1 fw-bold'>{this.state.post.title}</p>
            <p>{this.state.post.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPost;