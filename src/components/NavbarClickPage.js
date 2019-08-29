import React from 'react';
import NavBar from '../components/NavBar';
import SearchHeader from '../components/SearchHeader';
import FilterBar from '../components/FilterBar';
import ProductListNavbar from './ProductListNavbar';
import Footer from '../components/Footer';
import {connect} from 'react-redux';
class NavbarClickPage extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        return(
            <div>
        
            <NavBar/>
            <FilterBar/>
            <SearchHeader/>
            <div className="hero1">
      <div className="hero-text1">{console.log(this.props.location.state)}</div>
      <div className="live-text-header1">Socks</div>
      <div className="live-text11">Go crazy and put your feet up with these custom socks Made for You.
    
      </div>
    </div>
    <ProductListNavbar section={localStorage.getItem('category')}/>
    
    <Footer/>
        </div>
        )
    }
   
};
const mapStateToProps=(state)=>({
    sort:state.sort
})
export default connect(mapStateToProps)(NavbarClickPage);