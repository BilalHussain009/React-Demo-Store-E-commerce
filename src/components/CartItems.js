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
    
            
        <li className="items odd">
        
        <div className="infoWrap"> 
            <div className="cartSection">
            <img src={this.props.image} alt="" className="itemImg" />
              <p className="itemNumber">{this.props.company}</p>
              <h3>{this.props.name}</h3>
            
               <p> <input type="text"  className="qty" placeholder="1x"/>${this.props.price}</p>
            
              <p className="stockStatus">{this.props.size} -size </p>
            </div>  
        
            
            <div className="prodTotal cartSection">
              <p>${this.props.price}</p>
            </div>
                  <div className="cartSection removeWrap">
               <a href="#" onClick={this.onRemove} className="remove">x</a>
            </div>
          </div>
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