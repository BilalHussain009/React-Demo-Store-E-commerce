import React from 'react';
import NavBar from '../components/NavBar';
import SearchHeader from '../components/SearchHeader';
import FilterBar from '../components/FilterBar';
import ProductList from './ProductsList';
import Footer from '../components/Footer';

const NavbarClickPage=()=>(
    <div>
        
        <NavBar/>
        <FilterBar/>
        <SearchHeader/>
        <div className="hero1">
  <div className="hero-text1"></div>
  <div className="live-text-header1">Socks</div>
  <div className="live-text11">Go crazy and put your feet up with these custom socks Made for You.

  </div>
</div>
<ProductList section="socks"/>

<Footer/>
    </div>
);
export default NavbarClickPage;