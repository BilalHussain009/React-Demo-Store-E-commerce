import React from 'react';
import { startLogin,startFaceBookLogin,startLogout} from '../actions/auth';
import {connect} from 'react-redux';
import {firebase} from '../firebase/firebase';
import {startSignupWithEmail} from '../actions/auth';
import {Link} from 'react-router-dom';
class  SignUp extends React.Component{
 

    state={
        email:'',
        password:''
    }
   

    handleChange=(e)=>{
      this.setState({[e.target.id]:e.target.value})
    }
    handleSubmit=(e)=>{
      
      e.preventDefault();
      this.props.startSignupWithEmail(this.state.email,this.state.password);

    }
    render(){
        return(
            <div className='form-container'>
    <div className='form-heading'>
    <p>New Account</p>
    </div>
    <div className='form-box'>
    
    <form autoComplete="on" onSubmit={this.handleSubmit}>
    <p className='form-subheading'>UserName</p>
    <br></br>
      <div className='InputField'>
      
      <img src='https://image.flaticon.com/icons/svg/21/21104.svg' className='form-logo' alt='image here'/>
      <input 
       style={{border:'none'}} className='form-placeholder' 
       type='text' placeholder='Type your user name' required></input>
      </div>
      <p className='form-subheading'>Email</p>
      <br></br>
      <div className='InputField'>
    
      <img src='https://img.icons8.com/metro/26/000000/password.png' className='form-logo' alt='image here'/>

      <input onChange={this.handleChange}
      style={{border:'none'}} className='form-placeholder' id='email'
      type='text' placeholder='eg. max@example.com' required></input>
      </div>
      <p className='form-subheading'>Password</p>
      <br></br>
      <div className='InputField'>
    
      <img src='https://img.icons8.com/metro/26/000000/password.png' className='form-logo' alt='image here'/>

      <input onChange={this.handleChange}
      style={{border:'none'}} className='form-placeholder' id='password' 
      type='password' placeholder='Type your Password here' required></input>
      </div>
      
      <br></br>
      <br></br>
      <div className='login-button-box'>
      <button type='submit' className='login-button' href="#" >SignUp</button>
      </div>
     
    </form>
      
    </div>
  </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLogout:()=>dispatch(startLogout()),
  startSignupWithEmail:(email,password)=>dispatch(startSignupWithEmail(email,password)),
  startFaceBookLogin:()=>{console.log('called');dispatch(startFaceBookLogin())},
  
});
export default connect(undefined, mapDispatchToProps)(SignUp);