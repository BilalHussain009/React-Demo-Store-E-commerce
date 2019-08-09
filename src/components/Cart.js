import React from 'react'
import {connect} from 'react-redux';
import CartItems from './CartItems';

const Cart=(props)=>{
    return(
      <div>
       
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