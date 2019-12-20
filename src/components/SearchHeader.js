import React from 'react';
import {setSearch} from '../actions/search';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ReactTooltip from 'react-tooltip'

class SearchHeader extends React.Component{
  onChange=(e)=>{
    this.setState({searchTerm:e.target.value})
  }
  onSubmit=(e)=>{
    e.preventDefault();
    
    
    this.props.setSearch(this.state.searchTerm);
    this.props.history.push("/search");
    const json = JSON.stringify(this.state.searchTerm);
    localStorage.setItem('search', json);
  }
  render(){
    return(
      // <div className="search" onSubmit={this.onSubmit}>
			// 	<form className="search-form">
			// 		<input onChange={this.onChange} type="text" placeholder="Search for books, authors, categories and more.."></input>
			// 		<button>Go</button>
          
			// 	</form>
      // </div>
      <div className='search-box'>
      <form  className="flex-form" onSubmit={this.onSubmit}>
      <label htmlFor="from">
        <i className="ion-location"></i>
      </label>

      <input type="search"  placeholder="Search For Products" onChange={this.onChange}></input>
      <input type="submit" value="Search" ></input>
    </form>
    </div>
    )
  }
}
const mapStateToProps=(state)=>({
  items:state.items,
  search:state.search
});
const mapDispatchToProps = (dispatch) => ({
  setSearch: (search) => dispatch(setSearch(search))
          
  });

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchHeader));