import React from 'react';
import {connect} from 'react-redux';
import {startAddItem} from '../actions/item';
import {startTotalSum} from '../actions/item';
class ItemDescription extends React.Component{
  addToCart=(id,company,name,price,image)=>{
    
    this.props.startTotalSum(this.props.location.state.price);
    
    this.props.startAddItem({id:this.props.id,
        company:this.props.company,
        name:this.props.location.state.name,
        price:this.props.location.state.price,
        image:this.props.location.state.image,
        description:this.props.description
    });
}    
        
    render(){
    return(<section className="buy-grid container">
    
    <div className="hero-image-wrapper">
      <img src={this.props.location.state.image} className="hero-image-element" alt="alt"></img>
    </div>
    <div className="selection">

    <div className="selection-row">
      <h2>{this.props.location.state.name}</h2>
    </div>
    <div className="selection-row">
      <h3>${this.props.location.state.price}</h3>
    </div>
      <div className="selection-row">

        <h5>Select a size:
          </h5>
            <div className="swatch">
              s
            </div>
            <div className="swatch">
              m
            </div>
            <div className="swatch">
              l
            </div>
            <div className="swatch">
              xl
            </div>
            </div>
  <div className="selection-row">
            <h5>Select a Color:
              </h5>
                <div className="swatch color">
  
                </div>
                <div className="swatch color">
  
                </div>
                <div className="swatch color">
  
                </div>
                <div className="swatch color">
  
                </div>
                </div>
                <button onClick={this.addToCart} className="btn btn-primary btn-large btn-full">Add to Cart</button>
  
    </div>
    
  </section>)
    }
    
}
const mapDispatchToProps = (dispatch) => ({
  startAddItem: (id,company,name,price,image,description) => dispatch(startAddItem(id,company,name,price,image,description)),
  startTotalSum:(price)=>dispatch(startTotalSum(price))
});

export default connect(undefined,mapDispatchToProps)(ItemDescription);