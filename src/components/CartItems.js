import React from 'react';
import {startRemoveFromCart} from '../actions/cart';
import {startSubtractAmount} from '../actions/item';
import {connect} from 'react-redux';
import QuantitySelector from './QuantitySelector';
class CartItems extends React.Component{
    onRemove=()=>{
        this.props.startRemoveFromCart(this.props.id)
        this.props.startSubtractAmount(this.props.price)
    }
    render(){
    return(
    
            
            <li className="paypal__cart-item">
            <a onClick={this.onRemove} className="close"></a>
            <span className="paypal__item-name">{this.props.name}</span>
            <span className="paypal__item-price">Rs. {this.props.price}</span>
            
            </li>
            
            
             /* <img src={this.props.image}></img>
            <h1>{this.props.name}</h1>
            <p>{this.props.company}</p>
            <QuantitySelector/>
            <button className='button button--secondary' onClick={this.onRemove}>Remove From Cart</button> */
            
    )
}
};
const mapStateToProps=(state)=>({
    cart:state.cart
});
const mapDispatchToProps=(dispatch)=>({
    startRemoveFromCart:(id)=>dispatch(startRemoveFromCart(id)),
    startSubtractAmount:(price)=>dispatch(startSubtractAmount(price))
})
export default connect(mapStateToProps,mapDispatchToProps)(CartItems);