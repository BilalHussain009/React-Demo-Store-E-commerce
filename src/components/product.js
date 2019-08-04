import React from 'react';
import {connect} from 'react-redux';
import {startAddItem} from '../actions/item';
export class Product extends React.Component{
    addToCart=(id)=>{
        console.log(this.props.id);
        this.props.startAddItem({id:this.props.id});
    }
    render(){
    return(
        <div>
            <div>Image Here</div>
            <h1>Company: {this.props.company}</h1>
            <h1>Product: {this.props.name}</h1>
            <h1>Price: {this.props.price}</h1>
            <button>Description</button>
            <button onClick={this.addToCart}>Addtocart</button>
        </div>
    )
}}
const mapDispatchToProps = (dispatch) => ({
    startAddItem: (id) => dispatch(startAddItem(id))
    
  });
export default connect(undefined,mapDispatchToProps)(Product)