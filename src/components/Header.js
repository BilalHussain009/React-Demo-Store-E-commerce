import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <div className="header">
   <div className="header__bg"></div>
   
   <h1 className="header__title">Come Shop with us.</h1>
   <div className="header__log">
      
      
   </div>
</div>


);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
