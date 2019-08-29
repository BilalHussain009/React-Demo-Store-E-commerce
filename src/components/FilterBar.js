import React from 'react';
import {setSort} from '../actions/sort';

import {connect} from 'react-redux';
class FilterBar extends React.Component{
    setAll=()=>{
        
        this.props.setSort('all');
    }
     setCat=()=>{
        if(localStorage.getItem('category')=='mugs'){
            this.props.setSort('animal');
        }
        if(localStorage.getItem('category')=='socks'){
            this.props.setSort('cat');
        }
     }
    setLove=()=>{
        if(localStorage.getItem('category')=='mugs'){
            this.props.setSort('Halloween');
        }
        if(localStorage.getItem('category')=='socks'){
            this.props.setSort('cat');
        }
    }
    setCamo=()=>{
        if(localStorage.getItem('category')=='mugs'){
            this.props.setSort('mom');
        }
        if(localStorage.getItem('category')=='socks'){
            this.props.setSort('camo');
        }
    }
    setPassion=()=>{
        if(localStorage.getItem('category')=='mugs'){
            this.props.setSort('american');
        }
        if(localStorage.getItem('category')=='socks'){
            this.props.setSort('passion');
        }
    }
    render(){
        return(
            <div className="menu">
    <div className="title">FILTERS</div>
    <ul className="nav">
      <li><a onClick={this.setCamo} href="#">Camo Socks</a></li>
      <li><a  onClick={this.setCat}href="#">Cat Socks</a></li>
      <li><a  onClick={this.setPassion}href="#">Passion Socks</a></li>
      <li><a onClick={this.setLove}href="#">Love Socks</a></li>
      <li><a onClick={this.setAll}href="#">All Socks</a></li>

    </ul>
</div>
        );
    }

};
const mapStateToProps=(state)=>(
    {
        sort:state.sort
    }
);
const mapDispatchToProps = (dispatch) => ({
    setSort: (sortby) => dispatch(setSort(sortby))
            
    });
export default  connect(mapStateToProps,mapDispatchToProps)(FilterBar);