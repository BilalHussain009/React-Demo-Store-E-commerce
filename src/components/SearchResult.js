import React from 'react';
import {connect} from 'react-redux';
import Product from './product';
import NavBar from '../components/NavBar';
import SearchHeader from '../components/SearchHeader';
const SearchResult=(props)=>{
    
        return(
            <div>
                
                <NavBar/>
                <SearchHeader/>
                <h1>
                <span>Showing Results for "{JSON.parse(localStorage.getItem('search'))}"</span>
                </h1>
                <div id="wrap">
                   
              <div id="columns" className="columns_4">
                {
                  props.items.map((item) =>{
                    const json = localStorage.getItem('search');
                    const search = JSON.parse(json);
                    
                     
                        if(item.name.toUpperCase().includes(search.toUpperCase())){
                            
                            return <Product key={item.id} {...item}  />
                        }
                      
                    
                    
                    
                  }             
                      )
                    }
                
              </div>
            </div>
           </div>
        )
    }
;
const mapStateToProps=(state)=>(
    {
        search:state.search,
        items:state.items,
    }
)
export default connect(mapStateToProps)(SearchResult);