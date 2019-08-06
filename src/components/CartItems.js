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
        <div>
            
            <img src={this.props.image}></img>
            <h1>{this.props.name}</h1>
            <p>{this.props.company}</p>
            <QuantitySelector/>
            <button className='button button--secondary' onClick={this.onRemove}>Remove From Cart</button>
            
        </div>
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