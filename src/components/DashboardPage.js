import React from 'react';
import ProductList from './ProductsList';
import PhoneCaseSection from './PhoneCaseSection';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer'; ///importing component to Render in the Dashboad page 
import NavBar from '../components/NavBar';//This is A HOC componennt
import SearchHeader from '../components/SearchHeader';
import Slider from '../components/Slider';
import Featured from '../components/Featured';
import Banner from '../components/Banner';
import BannerSearch from '../components/BannerSearch';
import ReactTooltip from 'react-tooltip';

const DashboardPage = () => ( //Functunal Component Dashboard
  <div>
    <SearchHeader/>
    <ReactTooltip />

    <Slider/>{/* Rendering th Slider Comonent Here*/}
    <div className="section-title">
  <span className="tag tag-regular">Special Offers </span>
</div>
<ProductList section='explore'/> {/* Rendering the ProductList Component Here*/}

    <div className="section-title">
  <span className="tag tag-regular"> Explore</span>
</div>
<Featured/>


<div className="section-title">
  <span className="tag tag-regular">For Creators</span>
</div> 
    
<Banner/> {/* Rendering the Banner Component Here*/}
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
