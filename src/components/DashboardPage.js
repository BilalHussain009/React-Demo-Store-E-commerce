import React from 'react';
import ProductList from './ProductsList';
import PhoneCaseSection from './PhoneCaseSection';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import SearchHeader from '../components/SearchHeader';
import Slider from '../components/Slider';
import Featured from '../components/Featured';
import Banner from '../components/Banner';
import BannerSearch from '../components/BannerSearch';
const DashboardPage = () => (
  <div>
    <SearchHeader/>
    <Slider/>
    <div className="section-title">
  <span className="tag tag-regular">Special Offers </span>
</div>
    <Featured/>
    <div className="section-title">
  <span className="tag tag-regular"> Explore</span>
</div>
<ProductList section='explore'/>


<div className="section-title">
  <span className="tag tag-regular">For Creators</span>
</div> 
    
<Banner/>
<div className="section-title">
  <span className="tag tag-regular">Discover</span>
</div>
<BannerSearch/>
<div className="section-title">
  <span className="tag tag-regular">Protect Your Phone</span>
</div>
<PhoneCaseSection/>
<Footer/>

    
  </div>
  
  
);

export default DashboardPage;
