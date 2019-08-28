import React from 'react';
import Product from './product';
import {connect} from 'react-redux';

const ProductsList=(props)=>(
    <div>
      
    {
      //return <Product key={item.id} {...item}  />;
        props.items.length === 0 ? (
          <div className='list-item list-item--message'>
            <span>
              No expenses
            </span>
          </div>
        ) : (
            // props.items.map((item) => {
            //   return(
                
            //   <div id="wrap">
            //     <div id="columns" className="columns_4">
            //       <Product key={item.id} {...item}  />
            //     </div>
            //   </div> ) 
            // })
            <div id="wrap">
              <div id="columns" className="columns_4">
                {
                  props.items.map((item) =>{
                     
                    if(item.section===props.section ){
                        if(props.sort==='all'){
                      return <Product key={item.image} {...item}  />
                        }
                        else if(item.class===props.sort){
                            return <Product key={item.image} {...item}  />

                        }
                    }
                    
                    
                  }             
                      )
                    }
                
              </div>
            </div>
          )
      }
    </div>
);


const mapStateToProps=(state)=>{
    return{
        items:state.items,
        sort:state.sort
    }
}
export default connect(mapStateToProps)(ProductsList);