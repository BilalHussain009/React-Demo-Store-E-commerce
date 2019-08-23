import React from 'react';
import $ from 'jquery';
window.$ = $;
import { Helmet } from "react-helmet";
const CheckOut=()=>(
    <div className="container">
          <Helmet>
      <script>
        {`$(document).ready(function(){
  $(".form-wrapper .button").click(function(){
    var button = $(this);
    var currentSection = button.parents(".section");
    var currentSectionIndex = currentSection.index();
    var headerSection = $('.steps li').eq(currentSectionIndex);
    currentSection.removeclassName("is-active").next().addclassName("is-active");
    headerSection.removeclassName("is-active").next().addclassName("is-active");

    $(".form-wrapper").submit(function(e) {
      e.preventDefault();
    });

    if(currentSectionIndex === 3){
      $(document).find(".form-wrapper .section").first().addclassName("is-active");
      $(document).find(".steps li").first().addclassName("is-active");
    }
  });
});
`}
      </script>
    </Helmet>
    <div className="wrapper">
      <ul className="steps">
        <li className="is-active">Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
      </ul>
      <form className="form-wrapper">
        <fieldset className="section is-active">
          <h3>Your Details</h3>
          <input type="text" name="name" id="name" placeholder="Name"></input>
          <input type="text" name="email" id="email" placeholder="Email"></input>
          <div className="button">Next</div>
        </fieldset>
        <fieldset className="section">
          <h3>Account Type</h3>
          <div className="row cf">
            <div className="four col">
              <input type="radio" name="r1" id="r1" checked></input>
              <label htmlFor="r1">
                <h4>Designer</h4>
              </label>
            </div>
            <div className="four col">
              <input type="radio" name="r1" id="r2"></input><label htmlFor="r2">
                <h4>Developer</h4>
              </label>
            </div>
            <div className="four col">
              <input type="radio" name="r1" id="r3"></input><label htmlFor="r3">
                <h4>Project Manager</h4>
              </label>
            </div>
          </div>
          <div className="button">Next</div>
        </fieldset>
        <fieldset className="section">
          <h3>Choose a Password</h3>
          <input type="password" name="password" id="password" placeholder="Password"></input>
          <input type="password" name="password2" id="password2" placeholder="Re-enter Password"></input>
          <input className="submit button" type="submit" value="Sign Up"></input>
        </fieldset>
        <fieldset className="section">
          <h3>Account Created!</h3>
          <p>Your account has now been created.</p>
          <div className="button">Reset Form</div>
        </fieldset>
      </form>
    </div>

  </div>
);
export default CheckOut;