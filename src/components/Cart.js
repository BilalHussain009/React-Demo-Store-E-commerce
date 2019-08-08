import React from 'react'
import {connect} from 'react-redux';
import CartItems from './CartItems';

const Cart=(props)=>{
    return(
<<<<<<< HEAD
      <div className="wrap cf">
  <h1 className="projTitle">Responsive Table<span>-Less</span> Shopping Cart</h1>
  <div className="heading cf">
    <h1>My Cart</h1>
    <a href="#" className="continue">Continue Shopping</a>
  </div>
  <div className="cart">

    <ul className="cartWrap">
    {
                  
      props.cart.map((item) =>(
                      
      <CartItems key={item.id} {...item}  />
      ))
    }
    </ul>
  </div>
  
  
  
  <div className="subtotal cf">
    <ul>
      <li className="totalRow"><span className="label">Subtotal</span><span className="value">$35.00</span></li>
      
          <li className="totalRow"><span className="label">Shipping</span><span className="value">$5.00</span></li>
      
            <li className="totalRow"><span className="label">Tax</span><span className="value">Rs4.00</span></li>
            <li className="totalRow final"><span className="label">Total</span><span className="value">{}</span></li>
      <li className="totalRow"><a href="#" className="btn continue">Checkout</a></li>
    </ul>
  </div>
</div>





// {
                  
//   props.cart.map((item) =>(
    
//      <CartItems key={item.id} {...item}  />
//   ))
// }





    //     <div>
          
    //         {
    //   props.cart.length === 0 ? (
    //     <div >
    //       <span>
    //         No Items in Cart
    //       </span>
    //     </div>
    //   ) : (
          
=======
      <div className="paypal">
        
      

      <div className="paypal__subheader-wrapper">
        <div className="paypal__subheader">
          <h1 className="paypal__username">Hi</h1>
          <span className="paypal__help-text">you've added {props.cart.length} items in your Cart:</span>
        </div>
      </div>

      <div className="paypal__cart">
        <h2 className="paypal__cart-title">Items In The Cart:</h2>
        
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
          
>>>>>>> af64eded691526019f4b047388f687cda31ff0d3
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