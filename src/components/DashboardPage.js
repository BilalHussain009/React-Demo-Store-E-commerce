import React from 'react';
import ProductList from './ProductsList';
import {Link} from 'react-router-dom';

const DashboardPage = () => (
  <div>
    <Link to='/cart' className='button'>Go to Cart</Link>
    <ProductList />
    
  </div>
  
  
);

export default DashboardPage;
