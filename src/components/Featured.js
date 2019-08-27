import React from 'react';
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';
import $ from 'jquery';
window.$ = $;
const Featured =()=>(
    
<div className="wrapper">
      <div className="cards">
        <Link to='/merch'>
        <div className="card">
          <div className="card-content">
            <div className="top">
              <h3 className="name">20% Off</h3>
             
            </div>
            <div className="bottom">
              <h2>Jackets</h2>
              
            </div>
          </div>
          <div className="card-bg">
            <img
              className="bg-img"
              src="https://images.unsplash.com/photo-1554826762-cffbbe6672d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=760&q=80"
              alt="leafs"
            />
          </div>
          <div className="shadow">
            <img
              className="shadow-img"
              src="https://cdn.stocksnap.io/img-thumbs/960w/SKI2T9YF2P.jpg"
              alt="leafs"
            />
          </div>
        </div>
        </Link>
        <Link to='/merch'>
        <div className="card">
          <div className="card-content">
            <div className="top">
              
            </div>
            <div className="bottom">
              <h2>Shirts</h2>
            
            </div>
          </div>
          <div className="card-bg">
            <img
              className="bg-img"
              src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="colorful smoke"
            />
          </div>
          <div className="shadow">
            <img
              className="shadow-img"
              src="https://cdn.stocksnap.io/img-thumbs/960w/ITKSNPZ1VP.jpg"
              alt="colorful smoke"
            />
          </div>
        </div>
        </Link>
 
      </div>
    </div>
);
export default Featured;