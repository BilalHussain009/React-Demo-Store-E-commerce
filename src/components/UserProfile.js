import React from 'react';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { firebase } from '../firebase/firebase';
import database  from 'firebase';


class UserProfile extends React.Component{
    state={
        address:false
    }
    componentWillMount(){
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userId + '/address').once('value').then(function (snapshot) {
            var username = snapshot.val();
            if(username){
                this.setState({
                    address:true
                })
            }
        
    
        });
        console.log(this.state)
    }

    render(){
        return(
            <div className='user-profile'>

            <div className='user-heading'>
                <p><span className='top-heading'>Account Information</span>
                    <span className='below-heading'>View Your Personal Details</span>
                </p>
            </div>
    
    
            <div className='form-div'>
                <label className='form-div-label-one'>Order History</label><br></br><br></br>
                <Link className='form-div-link' to='/purchaseHistory'>You haven't placed any Orders yet</Link>
            </div>
            <div className='form-div-one'>
            <Link className='form-div-link' to={{ pathname: `/userinfo`, state: { flag: 'updateinfo' } }}>Your Address</Link>
                
    
            </div>
            <div className='form-div-one'>
                <Link className='form-div-link-logout' to='/' onClick={this.props.startLogout}>Log out</Link>
            </div>
        </div>
        )
    }
   
};
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),

});

export default connect(undefined, mapDispatchToProps)(UserProfile);