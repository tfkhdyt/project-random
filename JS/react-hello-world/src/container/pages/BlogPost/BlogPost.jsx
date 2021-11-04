import React, {Component, Fragment} from 'react'
import Post from "../../../component/Post"
import axios from 'axios'

class BlogPost extends Component {
  state = {
    post : [],
    formBlogPost : {
      id: 1,
      title: '',
      body: '',
      userId: 1
    },
    isUpdate : false
  }
  
  getPostAPI = () => {
    axios.get('http://localhost:3001/posts?_sort=id&_order=desc')
    .then(res => {
      this.setState({
        post : res.data
      })
    })
  }
  
  postDataToAPI = () => {
    axios.post('http://localhost:3001/posts', this.state.formBlogPost)
    .then((res) => {
      console.log(res);
      this.getPostAPI();
      this.setState({
        formBlogPost : {
          id: 1,
          title: '',
          body: '',
          userId: 1
        },
      });
    }, (err) => {
      console.log("error : ", err);
    });
  }
  
  putDataToAPI = () => {
    axios.put(`http://localhost:3001/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
    .then((res) => {
      this.getPostAPI();
      this.setState({
        isUpdate: false,
        formBlogPost : {
          id: 1,
          title: '',
          body: '',
          userId: 1
        },
      })
    }, (err) => {
      console.log('error: ', err)
    })
  }
  
  handleUpdate = (data) => {
    this.setState({
      formBlogPost : data,
      isUpdate: true
    });
  }
  
  handleRemove = (data) => {
    console.log(data)
    axios.delete('http://localhost:3001/posts/' + data)
    .then((res) => {
      this.getPostAPI()
    })
  }
  
  handleFormChange = (e) => {
    const formBlogSpotNew = {...this.state.formBlogPost};
    const timestamp = new Date().getTime();
    if(!this.state.isUpdate){
      formBlogSpotNew['id'] = timestamp;
    }
    console.log(this.state.isUpdate)
    formBlogSpotNew[e.target.name] = e.target.value;
    this.setState({
      formBlogPost: formBlogSpotNew
    });
  }
  
  handleSubmit = () => {
    if(this.state.isUpdate){
      this.putDataToAPI();
    }else{
      this.postDataToAPI();
    }
  }
  
  handleDetail = (id) => {
    this.props.history.push(`/detail-post/${id}`);
  }
  
  componentDidMount(){
    this.getPostAPI()
  }
  
  render(){
    return (
      <Fragment>
        <div className='row m-3'>
          <div className='col-12 col-md-9 p-4 mx-auto' style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <div className="form-floating mb-3">
              <input type="text" value={this.state.formBlogPost.title} className="form-control" id="title" name="title" placeholder="Judul" onChange={this.handleFormChange}/>
              <label htmlFor="title">Judul</label>
            </div>
            <div className="form-floating">
              <textarea value={this.state.formBlogPost.body} className='form-control' id='body' name="body" placeholder='Body' style={{height:'100px'}} onChange={this.handleFormChange}>
              </textarea>
              <label htmlFor="body">Deskripsi</label>
            </div>
            <button className='btn btn-success mt-3' onClick={this.handleSubmit}>Simpan</button>
          </div>
        </div>
        {
          this.state.post.map(post => {
            return <Post key={post.id} data={post} update={this.handleUpdate} remove={this.handleRemove} goDetail={this.handleDetail}/>
          })
        }
      </Fragment>
    )
  }
}

export default BlogPost