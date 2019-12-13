import React, { useState,useRef, useEffect } from 'react';


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
    return (
      <div>
        <h1>Congrats, you just bought {product.name}!</h1>
        <img alt={product.description}  />
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
  const product = {
    price: 777.77,
    name: 'comfy chair',
  };

  return (
    <div className="paypal">
      <h1 className="projTitle">Pay securely with PayPal <br></br> or Credit Card</h1>
      <Product product={product} />
    </div>
  );
}

export default App;
