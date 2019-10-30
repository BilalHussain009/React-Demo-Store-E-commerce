import React from 'react';
import { connect } from 'react-redux';
import { startLogin,startFaceBookLogin,startLogout} from '../actions/auth';
export const LoginPage = ({startLogin,startLogout,startFaceBookLogin}) => (
  <div>
    <div className='form-heading'>
    <p>Login</p>
    </div>
    <div className='form-box'>
    
    <form autoComplete="on">
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
        
      <a href="#"onClick={startLogin}  className="social-button" id="google-connect"> <span>Connect with Google</span></a><br></br>

      </div>
    </form>
      
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLogout:()=>dispatch(startLogout()),
  startFaceBookLogin:()=>{console.log('called');dispatch(startFaceBookLogin())},
  
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
