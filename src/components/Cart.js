import React from 'react'
import {connect} from 'react-redux';
import CartItems from './CartItems';
import {Link} from 'react-router-dom';
const Cart=(props)=>{
    return(
      <div>
       
      <div className="wrap cf">
  <h1 className="projTitle"> Shopping Cart</h1>
  <div className="heading cf">
    <h1>Your Items</h1>
    <Link to='/' href="#" className="continue">Continue Shopping</Link>
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
      <li className="totalRow"><span className="label">Subtotal</span><span className="value">${props.totalAmount}</span></li>
      
          <li className="totalRow"><span className="label">Shipping</span><span className="value">$5.00</span></li>
      
            <li className="totalRow"><span className="label">Tax</span><span className="value">Rs4.00</span></li>
            <li className="totalRow final"><span className="label">Total</span><span className="value">${props.totalAmount+9}</span></li>
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