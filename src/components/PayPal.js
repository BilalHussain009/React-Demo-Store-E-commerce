import React, { useState, useRef, useEffect } from 'react';
import { history } from '../routers/AppRouter';
import uuid from 'uuid';

import { firebase } from '../firebase/firebase';

function Product({ product }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: 'USD',
                  value: product.price,
                },
              },
            ],
          });
        },
        style: {
          size: 'responsive',
          color: 'silver',
          shape: 'rect',
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },
        onError: err => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [product.description, product.price]);

  if (paidFor) {
    let items = {};
    let checkUser = firebase.auth().currentUser.uid;
    let item = JSON.parse(localStorage.getItem('cart'));
    var starCountRef = firebase.database().ref(`users/${checkUser}/history`);
    starCountRef.on('value', function (snapshot) {
      items = (snapshot.val());
    });
    console.log(item);
    console.log(items);


    for (const key of Object.keys(item)) {

    }
    console.log(items);
    firebase.database().ref(`users/${checkUser}/history`).set(items);
    localStorage.removeItem("cart");
    localStorage.removeItem("sum");
    alert("The payment was ScuccesFull!");
    let userId = firebase.auth().currentUser.uid;

    history.push('/userprofile');

    return (
      <div>
        <h1>Congrats, you just bought Some Stuff  !</h1>
        <img alt={product.description} />
      </div>
    );
  }

  return (
    <div className="paypal">
      {error && <div>Uh oh, an error occurred! {error.message}</div>}

      <img alt={product.description} width="200" />
      <div ref={paypalRef} />
    </div>
  );
}

function App() {
  // let price=localStorage.getItem('total')
  let price = 0;
  let items = ''
  if (localStorage.getItem('sum') != null) {
    price = JSON.parse(localStorage.getItem('sum')) + 9;
  }
  let item = JSON.parse(localStorage.getItem('cart'));
  if (item == null) {
    item = []
  }
  else {
    for (var i = 0; i < item.length; i++) {
      items = items + item[i].name + ' ';
    }
  }
  console.log(price, items);
  const product = {
    price: price,
    name: 'hello',
  };

  return (
    <div className="paypal">
      <h1 className="projTitle">Pay securely with PayPal <br></br> or Credit Card</h1>
      <Product product={product} />
    </div>
  );
}

export default App;
