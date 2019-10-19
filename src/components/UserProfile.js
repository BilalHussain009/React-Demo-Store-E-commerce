import React from 'react';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
const onclickfunction=()=>{

}
const UserProfile=(props)=>(
    <div >
        <div className="section-title">
            <span className="tag tag-regular">My Profile </span>
        </div>
        <div className='user-heading'>
        <p><span className='top-heading'>Account Information</span>
            <span className='below-heading'>View Your Personal Details</span>
        </p>
        </div>
        <button onClick={props.startLogout}>Logout</button>
        <div className='form-div'>
            <form>
                <div className='form-label'>
                    <p>First Name</p>
                </div>
                <div className='form-input-field'>
                    <input type='text'></input>
                </div>
                <div className='form-label'>
                    <p>Last Name</p>
                </div>
                <div className='form-input-field'>
                    <input type='text'></input>
                </div>
                <div className='form-label'>
                    <p>Email</p>
                </div>
                <div className='form-input-field'>
                    <input type='text'></input>
                </div>
                <div className='form-label'>
                    <p>Confirm Email</p>
                </div>
                <div className='form-input-field'>
                    <input type='text'></input>
                </div>
                

            </form>
        </div>
    </div>
);
const mapDispatchToProps=(dispatch)=>({
    startLogout:()=>dispatch(startLogout()),

});

export default connect(undefined,mapDispatchToProps)(UserProfile);