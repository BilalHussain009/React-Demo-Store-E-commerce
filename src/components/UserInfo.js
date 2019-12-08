import React from 'react';
import {firebase} from '../firebase/firebase';
import { error } from 'util';
import { userInfo } from 'os';
class UserInfo extends React.Component {
    state = {
        firstname:'',
        lastname:'',
        phone:'',
        address:'',
        cardName:'',
        expDate:'',
        cvv:'',
        cardNumber:''
        
    }
    submitForm=(e)=>{
        e.preventDefault();
        let userId= firebase.auth().currentUser.uid;

        firebase.database().ref('users/'+userId).set({
            firebase:this.state.firstname,
            lastname:this.state.lastname,
            phone:this.state.phone,
            address:this.state.address,
            cardName:this.state.cardName,
            expDate:this.state.expDate,
            cvv:this.state.cvv,
            cardNumber:this.state.cardNumber
        }).then(
            alert("Your Data is saved")
        ).catch(
            error=>{error.message}
        )
    }
    inputedValue=(e)=>{
        console.log(this.state);
        if(e.target.id=="phone"&& e.target.value.length<13){
            this.setState({[e.target.id]:e.target.value});
        }
        
        else if(e.target.id!=="phone"){
            this.setState({[e.target.id]:e.target.value});
        }
       
    }
    inputedValue2=(e)=>{
        if(e.target.value.length<=3){
            this.setState({[e.target.id]:e.target.value});
        }
        
    }
    inputedValue3=(e)=>{
        if(e.target.value.length<=16){
            this.setState({[e.target.id]:e.target.value});
        }
        
    }
    componentDidMount(){
        let userId = firebase.auth().currentUser.uid;
        let ref= firebase.database().ref(`users/${userId}/`);
        var userData;
        ref.on("value",function(snapshot){
             console.log(snapshot.val());
        });
        
    }
    render() {
        return (
            <form id="myform" onSubmit={this.submitForm}>
                <header>Shipping Info</header>
                <div className="area">
                    <div className="row">
                        <div className="col2">
                            <input type="text" required name="firstname" id="firstname" onChange={this.inputedValue} value={this.state.firstname}></input>
                            <label >First Name</label>
                        </div>
                        <div className="col2">
                            <input type="text" required name="lastname" id="lastname"onChange={this.inputedValue} value={this.state.lastname}></input>
                            <label >Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <input  name="phone" id="phone" onChange={this.inputedValue} type="number" maxLength="12"value={this.state.phone}></input>
                        <label>Phone</label>
                    </div>
                    <div className="row">
                        <input required type="text" name="address" id="address" onChange={this.inputedValue} value={this.state.address}></input>
                        <label >Address</label>
                    </div>

                </div>
                <br></br>
                <header>Card Info</header>

                <div className="area">

                    <div className="row">
                        <div className="col2">
                            <input required type="text" name="cardName" id="cardName" onChange={this.inputedValue} value={this.state.cardName}></input>
                            <label >Card Holder Name</label>
                        </div>
                        <div className="col2">
                            <input required type="number" name="cvv" id="cvv" onChange={this.inputedValue2} maxLength="3" value={this.state.cvv}></input>
                            <label >CVV</label>
                        </div>
                    </div>
                    <div className="row">
                        <input required type="number" name="cardNumber" id="cardNumber" onChange={this.inputedValue3} value={this.state.cardNumber}></input>
                        <label >Card Number</label>
                    </div>
                    <div className="row">
                        <div className="col2">
                            <input required type="date" name="expDate" id="expDate" pattern="[A-Za-z]{3}" onChange={this.inputedValue} value={this.state.expDate}></input>
                            <label >Expiration Date</label>
                        </div>
                        <div className="col2">
                        <img className="cardlogo" src="https://seeklogo.net/wp-content/uploads/2013/06/visa-us-vector-logo-400x400.png"  alt="Visa US vector logo free download" />
                        <img className="cardlogo" src="https://seeklogo.net/wp-content/uploads/2016/07/mastercard-vector-logo-400x400.png" alt="MasterCard new logo vector" />
                        </div>
                        
                    </div>

                </div>
                <div className="row">
                    <input type="submit" value="Submit" className="btn"></input>
                    <input type="submit" value="cancel" className="btn"></input>
                </div>

            </form>
        );
    }
}
export default UserInfo; 