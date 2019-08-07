import React from 'react';
import {startRemoveFromCart} from '../actions/cart';
import {connect} from 'react-redux';
import QuantitySelector from './QuantitySelector';
class CartItems extends React.Component{
    onRemove=()=>{
        this.props.startRemoveFromCart(this.props.id)
    }
    render(){
    return(
    
            
            <li className="paypal__cart-item">
            <span className="paypal__index">1</span>
            <span className="paypal__item-name">{this.props.name}</span>
            <span className="paypal__item-price">{this.props.price}</span>
            
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
    startRemoveFromCart:(id)=>dispatch(startRemoveFromCart(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(CartItems);