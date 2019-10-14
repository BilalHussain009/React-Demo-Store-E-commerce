import React from 'react';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
const onclickfunction=()=>{

}
const UserProfile=(props)=>(
    <div>
        here is the profile of user
        <button onClick={props.startLogout}>Logout</button>
        <Link to='/' onClick={props.startLogout}>Log</Link>

    </div>
);
const mapDispatchToProps=(dispatch)=>({
    startLogout:()=>dispatch(startLogout()),

});

export default connect(undefined,mapDispatchToProps)(UserProfile);