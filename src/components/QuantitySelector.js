import React from 'react';
class QuantitySelector extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {value: 1}
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    }
    
    increment() {
      this.setState(prevState => {value: ++prevState.value});
    }
    
    decrement() {
      this.setState(prevState => {value: prevState.value > 0? --prevState.value : 0});
    }
    
    render() {
      
      return (
        <div>
         
        <div >
          <button  onClick={this.decrement}>
            &mdash;
          </button>
          <input  type="text" value={this.state.value} readOnly />
          <button  onClick={this.increment}>
            &#xff0b;
          </button>  
        </div>  
        </div>
      );
    }
  }
  export default QuantitySelector;