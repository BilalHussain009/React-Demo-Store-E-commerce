import React from 'react'
import {connect} from 'react-redux';
import CartItems from './CartItems';

const Cart=(props)=>{
    return(
        <div>
          
            {
      props.cart.length === 0 ? (
        <div >
          <span>
            No Items in Cart
          </span>
        </div>
      ) : (
          
          props.cart.map((item) => {
            return <CartItems key={item.id} {...item}  />;
          })
        )
    }
    <button>Proceed To checkout</button>
        </div>
    )
};
const mapStateToProps=(state)=>({
    cart:state.cart
});
export default connect(mapStateToProps)(Cart);