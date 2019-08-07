import React from 'react'
import {connect} from 'react-redux';
import CartItems from './CartItems';

const Cart=(props)=>{
    return(
      <div className="paypal">

      

      <div className="paypal__subheader-wrapper">
        <div className="paypal__subheader">
          <h1 className="paypal__username">Hi</h1>
          <span className="paypal__help-text">you've added (3) items in your Cart:</span>
        </div>
      </div>

      <div className="paypal__cart">
        <h2 className="paypal__cart-title">Cart:</h2>

        <ul className="paypal__cart-list">
        {
                  props.cart.map((item) =>(
                    
                     <CartItems key={item.id} {...item}  />
                  ))
        }

          
          <li className="paypal__cart-item">
            <span className="paypal__cart-total">Total</span>
            <span className="paypal__item-price">Rs. {props.totalAmount}</span>
          </li>
        </ul>
      </div>

      <div className="paypal__footer">
      </div>
    </div>









    //     <div>
          
    //         {
    //   props.cart.length === 0 ? (
    //     <div >
    //       <span>
    //         No Items in Cart
    //       </span>
    //     </div>
    //   ) : (
          
    //       props.cart.map((item) => {
    //         return <CartItems key={item.id} {...item}  />;
    //       })
    //     )
    // }
    // <button>Proceed To checkout</button>
    //     </div>
    )
};
const mapStateToProps=(state)=>({
    cart:state.cart,
    totalAmount:state.totalAmount
});
export default connect(mapStateToProps)(Cart);