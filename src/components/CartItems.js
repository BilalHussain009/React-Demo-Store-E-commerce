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
    
            
<<<<<<< HEAD
        <li className="items odd">
        
        <div className="infoWrap"> 
            <div className="cartSection">
            <img src={this.props.image} alt="" className="itemImg" />
              <p className="itemNumber">{this.props.company}</p>
              <h3>{this.props.name}</h3>
            
               <p> <input type="text"  className="qty" placeholder="3"/>{this.props.price}</p>
            
              <p className="stockStatus"> In Stock</p>
            </div>  
        
            
            <div className="prodTotal cartSection">
              <p>{this.props.price}</p>
            </div>
                  <div className="cartSection removeWrap">
               <a href="#" className="remove">x</a>
            </div>
          </div>
        </li>
=======
            <li className="paypal__cart-item">
            <a onClick={this.onRemove} className="close"></a>
            <span className="paypal__item-name">{this.props.name}</span>
            <span className="paypal__item-price">Rs. {this.props.price}</span>
            
            </li>
>>>>>>> af64eded691526019f4b047388f687cda31ff0d3
            
            
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