import React from 'react';
import ProductList from './ProductsList';
import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Header from './Header';

const DashboardPage = () => (
  <div>
    <NavBar/>
    <Header />
    <ProductList />
    
  </div>
  
  
);

export default DashboardPage;
