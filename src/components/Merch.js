import React from 'react';
import NavBar from '../components/NavBar';
import Form from '../components/Form';
import Features from '../components/Features';

class Merch extends React.Component{
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    return(
<div>
    <NavBar/>
<div className="hero">
  <div className="hero-text"></div>
 
  <div className="live-text1">Let's Make Merch Happen
  </div>
  
</div>
<div className="section-title">
  <span className="tag tag-regular">Order Here</span>
</div>
<Form/>
<div className="section-title">
  <span className="tag tag-regular">Our Specializtions</span>
</div>
<Features/>
</div>
    )
  }

};
export default Merch