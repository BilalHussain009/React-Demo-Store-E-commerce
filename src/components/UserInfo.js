import React from 'react';
import { firebase } from '../firebase/firebase';
import { history } from '../routers/AppRouter';

import { error } from 'util';
import { userInfo } from 'os';
class UserInfo extends React.Component {
    state = {
        firstname: '',
        lastname: '',
        phone: '',
        address: '',
        cardName: '',
        expDate: '',
        cvv: '',
        cardNumber: '',
        zipcode:'',
        address2:''

    }
    submitForm = (e) => {
        e.preventDefault();
        let userId = firebase.auth().currentUser.uid;

        firebase.database().ref('users/' + userId + '/address').set({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phone: this.state.phone,
            address: this.state.address,
            address2:this.state.address2,
            zipcode:this.state.zipcode
        }).then(
            alert("Your Data is saved")
        ).then(history.push('/userprofile')).catch(
            error => { error.message }
        )
    }
    inputedValue = (e) => {
        console.log(this.state);
        if (e.target.id == "phone" && e.target.value.length < 13) {
            this.setState({ [e.target.id]: e.target.value });
        }

        else if (e.target.id !== "phone") {
            this.setState({ [e.target.id]: e.target.value });
        }

    }
    inputedValue2 = (e) => {
        if (e.target.value.length <= 3) {
            this.setState({ [e.target.id]: e.target.value });
        }

    }
    inputedValue3 = (e) => {
        if (e.target.value.length <= 16) {
            this.setState({ [e.target.id]: e.target.value });
        }

    }
    inputedValue4 = (e) => {
        // console.log(this.state);
        console.log(e.target.value.length);
        if (e.target.id == "zipcode" && e.target.value.length <=5) {
            this.setState({ [e.target.id]: e.target.value });
        }


    }

    componentDidMount = () => {
        let userId = firebase.auth().currentUser.uid;
        var userData = {};
        if (this.props.location.state.flag == "updateinfo") {
            firebase.database().ref(`users/${userId}/address`).once("value").then((snapshot) => {
                // let firstname=snapshot.val().firstname;
                //  let lastname=snapshot.val().lastname;
                //  let phone=snapshot.val().phone;
                // let address= snapshot.val().address;
                // let cardName= snapshot.val().cardName;
                // let expDate= snapshot.val().expDate;
                // let cvv=snapshot.val().cvv;
                // let cardNumber=snapshot.val().cardNumber;
                console.log(snapshot.val())
                this.setState(snapshot.val());
                // userData={
                //     firstname: snapshot.val().firstname,
                //     lastname: snapshot.val().lastname,
                //     phone: snapshot.val().phone,
                //     address: snapshot.val().address,
                //     cardName: snapshot.val().cardName,
                //     expDate: snapshot.val().expDate,
                //     cvv: snapshot.val().cvv,
                //     cardNumber: snapshot.val().cardNumber
                // }



            });

            // this.setState(userData);

        }
        console.log(userData)


        // console.log(this.props.location.state.flag);

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
                            <input type="text" required name="lastname" id="lastname" onChange={this.inputedValue} value={this.state.lastname}></input>
                            <label >Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col2">
                            <input type="text" required name="zipcode" id="zipcode" onChange={this.inputedValue4} value={this.state.zipcode}></input>
                            <label >ZipCode</label>
                        </div>
                    </div>
                    <div className="row">
                        <input name="phone" id="phone" onChange={this.inputedValue} type="number" maxLength="12" value={this.state.phone}></input>
                        <label>Phone</label>
                    </div>
                    <div className="row">
                        <input required type="text" name="address" id="address" onChange={this.inputedValue} value={this.state.address}></input>
                        <label >Address</label>
                    </div>
                    <div className="row">
                        <input required type="text" name="address2" id="address2" onChange={this.inputedValue} value={this.state.address2}></input>
                        <label >Address2 (optional)</label>
                    </div>

                </div>
                <br></br>
                
                <div className="row">
                    <input type="submit" value="Submit" className="btn"></input>
                    <input type="submit" value="cancel" className="btn"></input>
                </div>

            </form>
        );
    }
}
export default UserInfo; 