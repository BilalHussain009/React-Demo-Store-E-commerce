import React from 'react';
import { Helmet } from "react-helmet";
import $ from 'jquery';
window.$ = $;
import { connect } from 'react-redux';
import { startAddItem } from '../actions/item';
import { startTotalSum } from '../actions/item';
import { DiscussionEmbed } from 'disqus-react';
import {firebase} from '../firebase/firebase';
import { history } from '../routers/AppRouter';

import uid from 'uuid';
class ItemDescription extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  state = {
    size: 'Small',
    quantity: '1',
    popup: "Cart"
  }
  myFunction() {
    var x = document.getElementById("notification"); // function to call when we click add product button
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);//Time out for 3 seconds
  }

  addToCart = (id, company, name, price, image) => {

    if (JSON.parse(localStorage.getItem("sum")) == null || undefined) {
      var sum = 0;
    }
    else {
      var sum = JSON.parse(localStorage.getItem("sum"));
    }

    sum += this.props.location.state.price;
    localStorage.setItem('sum', JSON.stringify(sum));

    this.props.startAddItem({
      id: this.props.id,
      company: this.props.company,
      name: this.props.location.state.name,
      price: this.props.location.state.price,
      image: this.props.location.state.image,
      description: this.props.description,
      size: this.state.size,
      quantity: this.state.quantity
    });
  }
  sizeChange = (e) => {
    console.log(this.state);
    this.setState({ [e.target.id]: e.target.value });

  }
  addToWishList = () => {
    if(firebase.auth().currentUser){
      let userId = firebase.auth().currentUser.uid;
      firebase.database().ref(`users/${userId}/wishlist`).update({item:this.props.location.state.name})
    }
    else{
      history.push('/loginpage')
    }
  }

  render() {
    return (<div>
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
          {console.log(this.props.location.section)}
          <div className="selection-row">
            <h5>Select Size:</h5>
            <div className="select">
              <select name="slct" id="size"
                onChange={this.sizeChange}>

                <option value="Small">S</option>
                <option value="Medium">M</option>
                <option value="Large">L</option>
              </select>
            </div>
          </div>
          <div className="selection-row">
            <h5>Select Quantity:
              </h5>
            <div className="select" >
              <select id="quantity" onChange={this.sizeChange}>
                <option value='1'>
                  1
              </option>
                <option value='2'>
                  2
              </option>
                <option value='3'>
                  3
              </option>
                <option value='4'>
                  4
              </option>
                <option value='5'>
                  5
              </option>
              </select>
            </div>
          </div>
          <Helmet>
            <script>
              {`$(".toast-trigger").click(function(e){
  e.preventDefault();
  datatoast = $(this).attr("data-toast");
  if ( $( this ).hasClass( "toast-auto" ) && !$("#" + datatoast).is(":visible") ){ 
    $("#" + datatoast).fadeIn(400).delay(2000).fadeOut(400);
  }
  else if ( !$("#" + datatoast).is(":visible") ){
    $("#" + datatoast).fadeIn(400);
  };
});
$(".toast-trigger1").click(function(e){
  $(".toast").text("added to wish list");
  e.preventDefault();
  datatoast = $(this).attr("data-toast");
  if ( $( this ).hasClass( "toast-auto" ) && !$("#" + datatoast).is(":visible") ){ 
    $("#" + datatoast).fadeIn(400).delay(2000).fadeOut(400);
  }
  else if ( !$("#" + datatoast).is(":visible") ){
    $("#" + datatoast).fadeIn(400);
  };
});
$(".close-toast").click(function(e){
  e.preventDefault();
  closetoast = $(this).parent().attr("id");
  $("#" + closetoast).fadeOut(400);
});`}
            </script>
          </Helmet>
          <button onClick={this.addToCart} className="toast-trigger" data-toast="toast-name-1">Add To Cart</button>


          <div className="toast-container toast-pos-right toast-pos-bottom">


            <div className="toast" id="toast-name-1">

              <a href="#" className="close-toast">&#10006;</a>
              Added To Cart Successfully!.
  </div>




          </div>
          {/* <button onClick={this.addToCart} className="btn btn-primary btn-large btn-full">Add to Cart</button> */}

        </div>


      </section>
      <div className='Shipping-Info'>
        <h5 className='ship-info'>Shipping Info</h5>
        <hr></hr>
        <p className='ship-detail'>
          All products are printed to order.<br></br>
          If you place your order now, it will ship on or before November 13, 2019.<br></br>
          Please allow additional 6 - 9 business days for standard shipping.<br></br>
          Expedited or Rush shipping may be available depending upon the product(s) selected and the destination country.<br></br>
          Products are fulfilled in the US<br></br>


        </p><br></br>
        <h5 className='ship-info'>Return Policy</h5>
        <p className='ship-detail'>
          If you're not 100% satisfied, let us know and we'll make it right
    </p>
        <br></br>


      </div>
      <div className="section-title">
        <span className="tag tag-regular">You May Also Like</span>
      </div>
      <div className='comment'>
        <DiscussionEmbed shortname={'reactdigitalstore-1'} config={{
          identifier: uid.v4(),
          title: 'Post',
          url: 'https://digitalstore-bilal.herokuapp.com'
        }} /></div>

    </div>)
  }

}
const mapDispatchToProps = (dispatch) => ({
  startAddItem: (id, company, name, price, image, description) => dispatch(startAddItem(id, company, name, price, image, description)),
  startTotalSum: (price) => dispatch(startTotalSum(price))
});

export default connect(undefined, mapDispatchToProps)(ItemDescription); //Conneting wiht react -redux