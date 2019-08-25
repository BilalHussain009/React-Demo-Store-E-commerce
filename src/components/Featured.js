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
              <div className="bookmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="bookmark-icn"
                >
                  <path
                    d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"
                  ></path>
                </svg>
              </div>
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
              <div className="bookmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="bookmark-icn"
                >
                  <path
                    d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"
                  ></path>
                </svg>
              </div>
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