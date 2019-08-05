import React from 'react';
const CartItems=(props)=>{
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.company}</p>
            <img src={props.image}></img>
            
        </div>
    )
}
export default CartItems;