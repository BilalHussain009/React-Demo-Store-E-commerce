import React from 'react';
import Product from './product';
import {connect} from 'react-redux';

export const ProductsList=(props)=>(
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
                  props.items.map((item) =>(
                    <Product key={item.id} {...item}  />
                  )
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
        items:state.items
    }
}
export default connect(mapStateToProps)(ProductsList);