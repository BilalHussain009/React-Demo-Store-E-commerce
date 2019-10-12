import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import {NavBar} from './NavBar';
import { height } from 'window-size';
export const LoginPage = ({ startLogin }) => (
  <div>
    <NavBar/>
    <div className='form-box'>
    <p className='form-heading'>Login</p>
    <form>
    <p className='form-subheading'>UserName</p>
    <br></br>
      <div className='InputField'>
      
      <img src='https://image.flaticon.com/icons/svg/21/21104.svg' className='form-logo' alt='image here'/>
      <input style={{border:'none'}} className='form-placeholder' type='text' placeholder='Type your user name'></input>
      </div>
      <p className='form-subheading'>Password</p>
      <br></br>
      <div className='InputField'>
    
      <img src='https://img.icons8.com/metro/26/000000/password.png' className='form-logo' alt='image here'/>

      <input style={{border:'none'}} className='form-placeholder' type='password' placeholder='Type your Password here'></input>
      </div>
      <a href='#' className='fpassword'>Forgot Password?</a>
      <br></br>
      <br></br>
      <div className='login-button-box'>
      <a className='login-button' href="#">Login</a>
      </div>
      <p className='othermethod'>Or Login using following</p>
      <div className='social-box'>
      <a href='#'><img className='socialIcon' src='https://image.flaticon.com/icons/svg/145/145802.svg'></img></a>
      <a href='#'><img className='socialIcon' src='https://image.flaticon.com/icons/svg/733/733579.svg'></img></a>
      <a href='#'><img className='socialIcon' src='https://image.flaticon.com/icons/svg/174/174851.svg'></img></a>
      </div>
    </form>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
