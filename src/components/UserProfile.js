import React from 'react';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {firebase} from '../firebase/firebase';
const onclickfunction=()=>{

}
const changeText=()=>{
    
        return <Link className='form-div-link' to={{pathname: `/userinfo`, state: { flag:'updateinfo'}}}>Addresses</Link>
   
   
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
            <label className='form-div-label-two'>You Haven't placed any orders yet.</label>
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