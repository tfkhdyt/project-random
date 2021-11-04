import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './container/Home/Home'
//import Product from './container/Product/Product'
//import LifeCycleComp from './container/LifeCycleComp/LifeCycleComp'
//import BlogPost from './container/BlogPost/BlogPost'

ReactDOM.render(
  <React.StrictMode>
    <div className='mx-auto'>
      <Home />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
