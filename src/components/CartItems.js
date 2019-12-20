import React from 'react';
import {startRemoveFromCart} from '../actions/cart';
import {startSubtractAmount} from '../actions/item';
import {connect} from 'react-redux';
import QuantitySelector from './QuantitySelector';
class CartItems extends React.Component{
    onRemove=()=>{
        // this.props.startRemoveFromCart(this.props.id)
        // this.props.startSubtractAmount(this.props.price)
        let cart =JSON.parse(localStorage.getItem("cart")); //Getting the items from the old cart
        
        let newCart=cart.filter(({id})=>id!==this.props.id); //Making the new Cart where i.e removing the items from old cart
        localStorage.setItem('cart',JSON.stringify(newCart));//SAving new Cart
        
        var sum=JSON.parse(localStorage.getItem("sum"));//Getting the total Bill from the local Storage
        
        
        sum-=this.props.price; // Subtracting the price of deleted item from the total sum
        localStorage.setItem('sum',JSON.stringify(sum));//updating the sum in the local storage
        
    }
    render(){
    return(
    
            
        <li className="items odd">
        
        <div className="infoWrap"> 
            <div className="cartSection">
            <img src={this.props.image} alt="" className="itemImg" />
              <p className="itemNumber">{this.props.company}</p> {/*Dispplaying the Company name that was passed as props */}
              <h3>{this.props.name}</h3>{/* Displaying the product name from the props*/}
            
               <p> <input type="text"  className="qty" placeholder={this.props.quantity+'x'}/>${this.props.price}</p>
            
              <p className="stockStatus">{this.props.size} -size </p>
            </div>  
        
            
            <div className="prodTotal cartSection">
              <p>${this.props.price}</p>
            </div>
                  <div className="cartSection removeWrap">
               <a href="#" onClick={this.onRemove} className="remove">x</a> {/*Product remove button  */}
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
});{/* Ading the methods to the prosp so that we can call them latter */}
export default connect(mapStateToProps,mapDispatchToProps)(CartItems);