import React from 'react';
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';
const  NavBar=()=>(
   
   
        
            <div className="navbar">
	

            <Link to='/'className="logo" >Store</Link>
            
            <Helmet>
        
            <script>
             {`
             var navbar = document.querySelector('.navbar')

             navbar.querySelector('.toggle').addEventListener('click',()=>{
                 
                 navbar.classList.toggle('collapsed')
                 
             })
             
             
             
             window.addEventListener('scroll',(e)=>{
                 
                 let windowY = window.pageYOffset
                 
                 let navbarHeight = document.querySelector('.navbar').offsetHeight
                 
                 if(windowY>navbarHeight) navbar.classList.add('sticky')
                 else navbar.classList.remove('sticky')
                 
                 
                 
                 
             })
             `}
            </script>
            </Helmet>
            
            <ul className="links">
                <li><a href="#">All Products</a></li>
                <li><a href="#">Shirts</a></li>
                <li><a href="#">Hoodies</a></li>
                <li><a href="#">Long Sleeves</a></li>
            </ul>
            
            
            <Link to="/cart" className="right">
            <button type="button" >
                Cart
             </button>
            </Link>
	        
            <div className="toggle">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            
            
            
        </div>
        );
    



export default NavBar;