import React from 'react';
class ItemDescription extends React.Component{    
        
    render(){
    return(<div>{this.props.location.state.description}</div>)
    }
    
}
export default ItemDescription;