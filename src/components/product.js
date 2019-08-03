import React from 'react';
import {addItem} from '../actions/item';
import {connect} from 'react-redux';

 const Product=(props)=>{
    return(
        <div>
            <div>Image Here</div>
            <h1>Title here</h1>
            <h1>Price here</h1>
            <button onClick={()=>{
                props.dispatch(addItem({
                    
                        name:'Bilal',
                        price:12,
                        company:'Samsung'
                }))
            }}>Add to cart</button>
            <button>Description</button>
        </div>
    )
}
export default connect()(Product)