import React from 'react';
import {connect} from 'react-redux';
import {startAddItem} from '../actions/item';
import {startTotalSum} from '../actions/item';
import {Link} from 'react-router-dom';
export class Product extends React.Component{
    addToCart=(id,company,name,price,image)=>{
        this.props.startTotalSum(this.props.price);
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
        // <div>
            
        //     <img src={this.props.image}></img>
        //     <h1>Company: {this.props.company}</h1>
        //     <h1>Product: {this.props.name}</h1>
        //     <h1>Price: {this.props.price}</h1>
        //     <Link to={{pathname:'/description',state:{description:this.props.description,
        //     product:this.props.name,price:this.props.price,company:this.props.company}}} className='button button--tri' >Description</Link>
            
        //     <button className='button' onClick={this.addToCart}>Addtocart</button>
        // </div>
        
        <Link to={{
            pathname: "/description",
            state: { name:this.props.name,
                    price:this.props.price,
                    image:this.props.image,
                    section:this.props.section}
         }} >
        <figure>
        <img src={this.props.image}></img>
	        <figcaption>{this.props.name}</figcaption>
            <span className="price"> Rs.{this.props.price}</span>
            
	    </figure>
        </Link>
        
  

        



    )
}}
const mapDispatchToProps = (dispatch) => ({
    startAddItem: (id,company,name,price,image,description) => dispatch(startAddItem(id,company,name,price,image,description)),
    startTotalSum:(price)=>dispatch(startTotalSum(price))
  });
export default connect(undefined,mapDispatchToProps)(Product)