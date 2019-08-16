import React from 'react';
import NavBar from '../components/NavBar';
import {connect} from 'react-redux';
import {startAddItem} from '../actions/item';
import {startTotalSum} from '../actions/item';
import  {DiscussionEmbed} from 'disqus-react';
import uid from 'uuid';
class ItemDescription extends React.Component{
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  state={
    size:'Small'
  }
  
  addToCart=(id,company,name,price,image)=>{
    
    this.props.startTotalSum(this.props.location.state.price);
    
    this.props.startAddItem({id:this.props.id,
        company:this.props.company,
        name:this.props.location.state.name,
        price:this.props.location.state.price,
        image:this.props.location.state.image,
        description:this.props.description,
        size:this.state.size
    });
} 
  sizeChange=(e)=>{
    const a=e.target.value;
    this.setState(()=>({size:a}))
  }
        
    render(){
    return(<div>
      <NavBar/>
      <section className="buy-grid container">
    
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
      <h5>Select Size:</h5>
      <div className="select">
  <select name="slct" id="slct"
  onChange={this.sizeChange}>
    
    <option value="Small">S</option>
    <option value="Medium">M</option>
    <option value="Large">L</option>
  </select>
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

    
  </section>
  <div className='comment'>
  <DiscussionEmbed shortname={'reactdigitalstore-1'} config={{
    identifier:uid.v4(),
    title:'Post',
    url:'https://digitalstore-bilal.herokuapp.com'
  }}/></div>
  </div>)
    }
    
}
const mapDispatchToProps = (dispatch) => ({
  startAddItem: (id,company,name,price,image,description) => dispatch(startAddItem(id,company,name,price,image,description)),
  startTotalSum:(price)=>dispatch(startTotalSum(price))
});

export default connect(undefined,mapDispatchToProps)(ItemDescription);