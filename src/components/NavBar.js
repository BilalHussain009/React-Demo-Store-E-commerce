import React from 'react';
import { Helmet } from "react-helmet";

export default class NavBar extends React.Component{
   
    render(){
        return(
            <div className="navbar">
	
            <div className="logo">
                <h2>STORE</h2>
            </div>
            <Helmet>
        
            <script>
             {`
             const navbar = document.querySelector('.navbar')

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
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            
            
            <div className="right">
                <button>Dashboard</button>
            </div>
            
            <div className="toggle">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            
            
            
        </div>
        )
    }

}

