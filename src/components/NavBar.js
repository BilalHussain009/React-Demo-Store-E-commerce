import React from 'react';
import {connect} from 'react-redux';
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';
import {setSort} from '../actions/sort';
import {setHeading} from '../actions/headings';
import { firebase} from '../firebase/firebase';

export class NavBar extends React.Component{
    setAll=()=>{
        localStorage.setItem();
        this.props.setSort('all');
    }
    setSocks=()=>{
        localStorage.setItem('category','socks')
        this.props.setSort('all');
        this.props.setHeading('SET_SOCKS');
     }
    setHoods=()=>{
        localStorage.setItem('category','explore');
        this.props.setSort('all');
        this.props.setHeading('SET_HOODIES');
    }
    setHoodies=()=>{
        this.props.setSort('hoodies')
    }
    setMugs=()=>{
        this.props.setSort('mugs');
        localStorage.setItem('category','mugs');
        this.props.setHeading('SET_MUGS');
    }
    setPhoneCase=()=>{
        this.props.setSort('phonecase');
        localStorage.setItem('category','phonecase');
        this.props.setHeading('SET_PHONECASE');
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
                <li><Link to='/socks'><a   onClick={this.setAll} >All Products</a></Link></li>
                <li><Link to='/socks'   onClick={this.setSocks}><a     >Socks</a></Link></li>
                <li><Link to='/socks'><a    onClick={this.setHoods} >Hoodies</a></Link></li>
                
                <li><Link to='/socks'><a    onClick={this.setMugs} >Mugs</a></Link></li>
                <li><Link to='/socks'><a    onClick={this.setPhoneCase} >Phone Case</a></Link></li>
                <li>
                    <Link to='/LoginPage'>
                    <div className='LoginBox'>
                        
                        {localStorage.getItem('loggedin')=="false"? <img className="LoginButton" src='https://i.ibb.co/ssp09kd/585e4bf3cb11b227491c339a.png'></img>:<img className="LoginButton" src={firebase.auth().currentUser.photoURL}></img>}
                        {/* <img className="LoginButton" src= "{firebase.auth().currentUser.photoURL===null?'https://i.ibb.co/ssp09kd/585e4bf3cb11b227491c339a.png':firebase.auth().currentUser.photoURL} "></img> */}
                        {localStorage.getItem('loggedin')=="false"? <p className='LoginText'>Login</p>:<p className='LoginText'>{firebase.auth().currentUser.displayName}</p>}

                        
                    </div>
                    </Link>
                </li>
            </ul>
            
            
            <Link to="/cart" className="right">
            <button type="button" className='cartbutton' >
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
    setSort: (sortby) => dispatch(setSort(sortby)),
    setHeading:(heading)=>dispatch(setHeading(heading))
   
    });
export default connect(undefined,mapDispatchToProps)(NavBar);