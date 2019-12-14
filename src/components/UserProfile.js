import React from 'react';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {firebase} from '../firebase/firebase';
import { database } from 'firebase';
const onclickfunction=()=>{

}
const changeText=()=>{
        let userid=firebase.auth().currentUser.uid;
        
        if(firebase.database().ref(`/users/${userid}/address`)){
        return <Link className='form-div-link' to={{pathname: `/userinfo`, state: { flag:'updateinfo'}}}>Edit Address</Link>
        }
        else{
            return <Link className='form-div-link' to={{pathname: `/userinfo`, state: { flag:'updateinfo'}}}>Add New Address</Link>
        }
   
}
const UserProfile=(props)=>(
    <div className='user-profile'>
       
        <div className='user-heading'>
        <p><span className='top-heading'>Account Information</span>
            <span className='below-heading'>View Your Personal Details</span>
        </p>
        </div>
        
       
        <div className='form-div'>
            <label className='form-div-label-one'>Order History</label><br></br><br></br>
            <Link className='form-div-link' to='/yourorders'>View Your orders</Link>
        </div>
        <div className='form-div-one'>
            <label className='form-div-label-one'>Account Details</label><br></br><br></br>
            {/* <a href='#' className='form-div-link'>View Addresses(0)</a> */}
            {changeText()}
            
        </div>
        <div  className='form-div-one'>
        <Link className='form-div-link-logout' to='/' onClick={props.startLogout}>Log out</Link>
        </div>
    </div>
);
const mapDispatchToProps=(dispatch)=>({
    startLogout:()=>dispatch(startLogout()),

});

export default connect(undefined,mapDispatchToProps)(UserProfile);