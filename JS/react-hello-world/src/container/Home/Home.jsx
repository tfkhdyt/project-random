// libraries
import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

// pages
import BlogPost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost';
import Product from '../pages/Product/Product';
import YT from '../pages/youtube/youtube';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp'

// styling
import './Home.css';

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/#">Belajar React</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink to='/' exact className='nav-link' activeClassName="active">Blog Post</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/product' className="nav-link" activeClassName="active">Product</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/yt' className="nav-link" activeClassName="active">YouTube</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Route path='/' exact component={BlogPost} />
          <Route path='/detail-post/:id' component={DetailPost} />
          <Route path='/product' component={Product} />
          <Route path='/yt' component={YT} />
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default Home