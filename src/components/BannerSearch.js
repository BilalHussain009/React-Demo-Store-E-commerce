import React from 'react';
import SearchHeader from './SearchHeader';
const BannerSearch=()=>(
  <div className='hero-search'>
    <div className='hero-search-line'>
      <h3>Find Something <br></br>you Love.</h3>
    </div>
    <br></br>
    <div className='hero-search-input'>
    <SearchHeader/>
    </div>
  </div>
);
export default BannerSearch;