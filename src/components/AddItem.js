import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions/item';
const AddItem=(props)=>(
    <div>
        <button onClick={()=>{
                props.dispatch(addItem({
                    
                        name:'Bilal',
                        price:12,
                        company:'Samsung'
                }))
            }}>Add to cart</button>
    </div>
);
const mapStateToProps=(state)=>({
    items:state.items
});
export default connect(mapStateToProps)(AddItem);