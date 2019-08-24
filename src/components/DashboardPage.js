import React from 'react';
import ProductList from './ProductsList';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import SearchHeader from '../components/SearchHeader';
import Slider from '../components/Slider';
import Featured from '../components/Featured';
const DashboardPage = () => (
  <div>
    <NavBar/>
    <SearchHeader/>
    <Slider/>
    <div className="section-title">
  <span className="tag tag-regular"> Explore</span>
</div>
<ProductList/>



    <div className="section-title">
  <span className="tag tag-regular">Featured</span>
</div>
<Featured/>

<Footer/>

    
  </div>
  
  
);

export default DashboardPage;
