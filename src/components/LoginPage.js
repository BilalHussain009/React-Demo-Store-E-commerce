import React from 'react';
import { startLogin, startFaceBookLogin, startLogout } from '../actions/auth';
import { connect } from 'react-redux';
import { firebase } from '../firebase/firebase';
import { startSignupWithEmail, startSigninWithEmail } from '../actions/auth';
import { Link } from "react-router-dom";
import { history } from '../routers/AppRouter';
class LoginPage extends React.Component {


  state = {
    email: '',
    password: '',
    resetEmail: '',
    passreset: false
  } //temporary saving the values the user enter in form to save in the component state

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value }); //Changing the state when user enters something in the form
    console.log(this.state);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.startSigninWithEmail(this.state.email, this.state.password); //Dispatching the firebase method of 
    // user sign in 

  }
  changePassword = () => {
    this.setState({ passreset: true })  // changing the state of passreset to true when user clicks reset password
  }
  changeToLogin = () => {
    this.setState({ passreset: false })
  }
  handleChangePass = (e) => {
    this.setState({ resetEmail: e.target.value }); //saving the user entered password value in the state 

  }
  handleChangePassSubmit = (e) => {
    firebase.auth().sendPasswordResetEmail(this.state.resetEmail).then(
      alert("Reset password has been sent! Check Your Email!") //Changing the password if the password scuccessfully changes 
      //we notidy user that your passwrod has been changed other wise we say that email does not exisit in the data base

    ).catch(alert("The email does not exists")).then(history.push('/loginPage'));
  }
  render() {
    return (
      <div>

        <div className='form-heading'>
          {this.state.passreset == true ? <p>Recover Password</p> : <p>LOGIN</p>}
        </div>
        <div className='form-box'>

          <form autoComplete="on" >
            {this.state.passreset == true ?

              <div>
                <p className='form-subheading'>Enter Your email</p>
                <br></br>
                <div className='InputField'>

                  <img src='https://image.flaticon.com/icons/svg/21/21104.svg' className='form-logo' alt='image here' />
                  <input onChange={this.handleChangePass}
                    style={{ border: 'none' }} className='form-placeholder' id='email'
                    type='text' placeholder='Email'></input>
                  <button className='fpassword' onClick={this.changeToLogin}>Back To Login</button>
                </div>

                <div className='login-button-box'>
                  <button className='login-button' onClick={this.handleChangePassSubmit}>Send Email</button>
                </div>


              </div>

              : <div>
                <p className='form-subheading'>Email</p>
                <br></br>
                <div className='InputField'>

                  <img src='https://image.flaticon.com/icons/svg/21/21104.svg' className='form-logo' alt='image here' />
                  <input onChange={this.handleChange}
                    style={{ border: 'none' }} className='form-placeholder' id='email'
                    type='text' placeholder='Type your user name'></input>
                </div>
                <p className='form-subheading'>Password</p>
                <br></br>
                <div className='InputField'>

                  <img src='https://img.icons8.com/metro/26/000000/password.png' className='form-logo' alt='image here' />

                  <input onChange={this.handleChange}
                    style={{ border: 'none' }} className='form-placeholder' id='password'
                    type='password' placeholder='Type your Password here'></input>
                </div>
                <button className='fpassword' onClick={this.changePassword}>Forgot Password?</button>

                <br></br>
                <br></br>
              </div>}

            {this.state.passreset == true ? <div></div> :
              <div>
                <div className='login-button-box'>
                  <button type='submit' className='login-button' href="#" onClick={this.handleSubmit}>Login</button>
                </div>
                <div className='login-button-box'>
                  <Link to='/signup' className='login-button'>SignUp</Link>
                </div>
              </div>}

            <p className='othermethod'>Or Login using following</p>
            <div className='social-box'>

              <a href="#" onClick={this.props.startLogin} className="social-button" id="google-connect"> <span>Connect with Google</span></a><br></br>

            </div>
          </form>

        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout()),
  startSignupWithEmail: (email, password) => dispatch(startSignupWithEmail(email, password)),
  startFaceBookLogin: () => { console.log('called'); dispatch(startFaceBookLogin()) },
  startSigninWithEmail: (email, password) => dispatch(startSigninWithEmail(email, password)),

});
export default connect(undefined, mapDispatchToProps)(LoginPage);