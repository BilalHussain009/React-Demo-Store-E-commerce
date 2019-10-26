import React from 'react';
import {setSort} from '../actions/sort';
import {setHeading} from '../actions/headings';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import $ from 'jquery';
window.$ = $;

class Featured extends React.Component{
    setAll=()=>{
        localStorage.setItem();
        this.props.setSort('all');
    }
    setSocks=()=>{
        localStorage.setItem('category','socks')
        this.props.setSort('all');
        this.props.setHeading('SET_SOCKS');
     }
    setHoods=()=>{
        localStorage.setItem('category','explore');
        this.props.setSort('all');
        this.props.setHeading('SET_HOODIES');
    }
    setHoodies=()=>{
        this.props.setSort('hoodies')
    }
    setMugs=()=>{
        this.props.setSort('mugs');
        localStorage.setItem('category','mugs');
        this.props.setHeading('SET_MUGS');
    }
    setPhoneCase=()=>{
        this.props.setSort('phonecase');
        localStorage.setItem('category','phonecase');
        this.props.setHeading('SET_PHONECASE');
    }
    render(){
        return(
<div className="container2">
        <section className="featuredm-module">
            <Link to='/products'  onClick={this.setHoods} >
            <div className="featuredm featuredm-one">
                <span className="headline">SHIRTS &amp;TOPS</span>
            </div>
            </Link>
            <Link to='/products'  onClick={this.setPhoneCase} >
            <div className="featuredm featuredm-two">
            <span className="headline">IPHONE &amp; ANDROID PHONE CASES</span>
            </div>
            </Link>
            
            <div className="clear-fix"></div>
            
            <Link to='/products'  onClick={this.setMugs} >

            <div className="featuredm featuredm-three">
                <span className="headline">MUGS <br></br> &amp; TEA CUPS</span>
                <button className="shop-btn">SHOP NOW</button>
            </div>
            </Link>
            <Link to='/products'  onClick={this.setSocks} >

            <div className="featuredm featuredm-four">
                <span className="headline">TACTICAL <br></br> &amp; CAMO HOODIES</span>
                <span className="subline">GACHII &amp; BASS</span>
            </div>
            </Link>
        </section>
    </div>
        )
    }

}
const mapDispatchToProps = (dispatch) => ({
    setSort: (sortby) => dispatch(setSort(sortby)),
    setHeading:(heading)=>dispatch(setHeading(heading))
   
    });
const mapStateToProps=(state)=>({
        auth:state.auth,
        sort:state.sort
    })
export default connect(mapStateToProps,mapDispatchToProps)(Featured);