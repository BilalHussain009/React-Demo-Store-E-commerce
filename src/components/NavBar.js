import React from 'react';
import {connect} from 'react-redux';
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';
import {setSort} from '../actions/sort';


export class NavBar extends React.Component{
    setAll=()=>{
        this.props.setSort('all');
    }
     setShirt=()=>{
        this.props.setSort('shirt');
     }
    setLongSleeves=()=>{
        this.props.setSort('longsleeves')
    }
    setHoodies=()=>{
        this.props.setSort('hoodies')
    }
    setJackets=()=>{
        this.props.setSort('jackets')
    }
            render(){
                return(
        
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
                <li><Link to='/dashboard'><a   onClick={this.setAll} >All Products</a></Link></li>
                <li><a  onClick={this.setShirt}>Shirts</a></li>
                <li><a  onClick={this.setHoodies} >Hoodies</a></li>
                <li><a  onClick={this.setLongSleeves}>Long Sleeves</a></li>
                <li><a  onClick={this.setJackets}>Jackets</a></li>
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
        }}


const mapDispatchToProps = (dispatch) => ({
    setSort: (sortby) => dispatch(setSort(sortby))
            
    });
export default connect(undefined,mapDispatchToProps)(NavBar);