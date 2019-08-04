import React from 'react';
import {addItem} from '../actions/item';
import {connect} from 'react-redux';

 const Product=(props)=>{
    return(
        <div>
            <div>Image Here</div>
            <h1>{props.company}</h1>
            <h1>{props.name}</h1>
            <h1>{props.price}</h1>
            
            <button>Description</button>
        </div>
    )
}
export default connect()(Product)