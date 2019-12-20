import React from 'react';
import { firebase } from '../firebase/firebase';
class purchaseHistory extends React.Component {
    state = {
        name:[],
        price:[]
    }
    componentDidMount = () => {
      let userId = firebase.auth().currentUser.uid;
      var userData = {};
       
          firebase.database().ref(`orders/${userId}/items`).once("value").then((snapshot) => {
              // let firstname=snapshot.val().firstname;
              //  let lastname=snapshot.val().lastname;
              //  let phone=snapshot.val().phone;
              // let address= snapshot.val().address;
              // let cardName= snapshot.val().cardName;
              // let expDate= snapshot.val().expDate;
              // let cvv=snapshot.val().cvv;
              // let cardNumber=snapshot.val().cardNumber;
              for(var i=0;i<snapshot.val().length;i++){
                    // this.setState(prevstate => ({name:prevstate.name.push(snapshot.val()[i].name),price:prevstate.price.push(snapshot.val()[i].price)}));
                  this.setState({name:snapshot.val()[i].name,price:snapshot.val()[i].price});
                  
              }
              
              
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



          }).then(console.log);

          // this.setState(userData);

      


      // console.log(this.props.location.state.flag);

  }
    
    render() {
        return (
            <div>
                <h1>Your Order History</h1>
                <h2>Product Name</h2> <input type="text" value={this.state.name}></input>
                <h2>Product price</h2> <input type="text" value={this.state.price}></input>
            </div>
        )
    }
}
export default purchaseHistory;