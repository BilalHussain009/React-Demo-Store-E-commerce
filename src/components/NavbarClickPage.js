import React from 'react';
import NavBar from '../components/NavBar';
import SearchHeader from '../components/SearchHeader';
import FilterBar from '../components/FilterBar';
import ProductListNavbar from './ProductListNavbar';
import Footer from '../components/Footer';
import {connect} from 'react-redux';
import headings from '../reducers/headings';
class NavbarClickPage extends React.Component{
    setHeadingFucntion=()=>{
        if(this.props.sort[0]==''){
            return(
                <div className="hero1">
      <div className="live-text-header1">{this.props.heading[0]}</div>
      <div className="live-text11">{this.props.heading[1]}
    
      </div>
    </div>
            )
        }
    }
    setHeadng=()=>{
        
    }
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
      <div className="live-text-header1">{this.props.heading[0]}</div>
      <div className="live-text11">{this.props.heading[1]}
    
      </div>
    </div>
    <ProductListNavbar section={localStorage.getItem('category')}/>
    
    <Footer/>
        </div>
        )
    }
   
};
const mapStateToProps=(state)=>({
    sort:state.sort,
    heading:state.heading
})
export default connect(mapStateToProps)(NavbarClickPage);