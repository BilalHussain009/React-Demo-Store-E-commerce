import React from 'react';
import {connect} from 'react-redux';
import {startAddItem} from '../actions/item';
import {Link} from 'react-router-dom';
export class Product extends React.Component{
    addToCart=(id,company,name,price,image)=>{
        console.log(this.props.id);
        this.props.startAddItem({id:this.props.id,
            company:this.props.company,
            name:this.props.name,
            price:this.props.price,
            image:this.props.image,
            description:this.props.description
        });
    }
    
    render(){
    return(
        <div>
            
            <img src={this.props.image}></img>
            <h1>Company: {this.props.company}</h1>
            <h1>Product: {this.props.name}</h1>
            <h1>Price: {this.props.price}</h1>
            <Link to={{pathname:'/description',state:{description:this.props.description}}} className='button button--tri' >Description</Link>
            
            <button className='button' onClick={this.addToCart}>Addtocart</button>
        </div>
    )
}}
const mapDispatchToProps = (dispatch) => ({
    startAddItem: (id,company,name,price,image,description) => dispatch(startAddItem(id,company,name,price,image,description))
    
  });
export default connect(undefined,mapDispatchToProps)(Product)