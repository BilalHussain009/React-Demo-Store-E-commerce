import React from 'react';
import ProductList from './ProductsList';
import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import SearchHeader from '../components/SearchHeader';

import Slider from '../components/Slider';
const DashboardPage = () => (
  <div>
    <NavBar/>
    <SearchHeader/>
    <Slider/>
    <div className="section-title">
  <span className="tag tag-regular">Best Sellers</span>
</div>
    <ProductList/>

    
  </div>
  
  
);

export default DashboardPage;
