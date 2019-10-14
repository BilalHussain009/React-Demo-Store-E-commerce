import React from 'react';
import Form from '../components/Form';
import Features from '../components/Features';
import Footer from '../components/Footer';
class Merch extends React.Component{
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    return(
<div>
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
<Footer/>
</div>
    )
  }

};
export default Merch