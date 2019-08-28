import React from 'react';
import {setSort} from '../actions/sort';

import {connect} from 'react-redux';
class FilterBar extends React.Component{
    setAll=()=>{
        this.props.setSort('all');
    }
     setCat=()=>{
        this.props.setSort('cat');
     }
    setLove=()=>{
        this.props.setSort('love');
    }
    setCamo=()=>{
        this.props.setSort('camo');
    }
    setPassion=()=>{
        this.props.setSort('passion');
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