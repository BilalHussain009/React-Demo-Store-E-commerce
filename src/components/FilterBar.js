import React from 'react';
import {setSort} from '../actions/sort';

import {connect} from 'react-redux';

class FilterBar extends React.Component{//This Compontn is the side filter bar in the product section
    setAll=()=>{
        
        this.props.setSort('all'); ///Displaying all the items from a categry
    }
     setCat=()=>{
        if(localStorage.getItem('category')=='mugs'){
            this.props.setSort('Halloween');
        }
        if(localStorage.getItem('category')=='socks'){
            this.props.setSort('cat');
        }
        if(localStorage.getItem('category')=='phonecase'){
            this.props.setSort('camo-phone');
            // this.props.setSort('funny-phone');
        }
        if(localStorage.getItem('category')=='creators'){
            this.props.setSort('yestheory');
        }
     }
    setLove=()=>{
        if(localStorage.getItem('category')=='mugs'){
            this.props.setSort('american');
        }
        if(localStorage.getItem('category')=='socks'){
            this.props.setSort('love');
        }
        if(localStorage.getItem('category')=='phonecase'){
            this.props.setSort('texture-phone');
        }
        if(localStorage.getItem('category')=='creators'){
            this.props.setSort('merk');
        }
    }
    setCamo=()=>{
        if(localStorage.getItem('category')=='mugs'){
            this.props.setSort('mom');
        }
        if(localStorage.getItem('category')=='socks'){
            this.props.setSort('camo');
        }
        if(localStorage.getItem('category')=='phonecase'){
            this.props.setSort('funny-phone');
            // this.props.setSort('digital-phone');
        }
        if(localStorage.getItem('category')=='creators'){
            this.props.setSort('pewdiepie');
        }
    }
    setPassion=()=>{
        if(localStorage.getItem('category')=='mugs'){
            this.props.setSort('animal');
        }
        if(localStorage.getItem('category')=='socks'){
            this.props.setSort('passion');
        }
        if(localStorage.getItem('category')=='phonecase'){
            this.props.setSort('digital-phone');
            //
        }
        if(localStorage.getItem('category')=='creators'){
            this.props.setSort('jse');
        }
    }
    render(){
        return(
            <div className="menu">
    <div className="title">FILTERS</div>
    <ul className="nav">
      <li><a onClick={this.setCamo} href="#">{this.props.heading[2]}</a></li> {/* Set filter to camo*/}
      <li><a  onClick={this.setCat}href="#">{this.props.heading[3]}</a></li>
      <li><a  onClick={this.setPassion}href="#">{this.props.heading[4]}</a></li>
      <li><a onClick={this.setLove}href="#">{this.props.heading[5]}</a></li>
      <li><a onClick={this.setAll}href="#">All Items</a></li>

    </ul>
</div>
        );
    }

};
const mapStateToProps=(state)=>(
    {
        sort:state.sort,
        heading:state.heading
    }
);
const mapDispatchToProps = (dispatch) => ({
    setSort: (sortby) => dispatch(setSort(sortby))
            
    });
export default  connect(mapStateToProps,mapDispatchToProps)(FilterBar);