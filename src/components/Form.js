import React from 'react';
const Form =()=>(
    <section className='merch'>
    <div className="background">
  <div className="container">
    <div className="screen">
      
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>You Would Be Surprised How easy it is </span>
            <span></span>
          </div>
          <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" ></input>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL"></input>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Primary Platform Link"></input>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE"></input>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
</section>

);
export default Form;