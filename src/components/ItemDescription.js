import React from 'react';
class ItemDescription extends React.Component{    
        
    render(){
    return(<div>
        <p>{this.props.location.state.product}</p>
        <p>{this.props.location.state.price}</p>
        <p>{this.props.location.state.company}</p>
        <p>{this.props.location.state.description}</p>
        </div>)
    }
    
}
export default ItemDescription;